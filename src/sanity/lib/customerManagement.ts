// utils/sanity/customerManagement.js
import { CartItem } from "@/types/cartType";
import { client } from "./client";
import { strict } from "assert";

interface userData {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
}
export async function createOrUpdateCustomer(userData: userData) {
  const { id, firstName, lastName, emailAddress } = userData;

  // First check if customer exists
  const existingCustomer = await client.fetch(
    `*[_type == "customer" && email == $email][0]`,
    { email: emailAddress }
  );

  if (existingCustomer) {
    return existingCustomer._id;
  }

  // If no existing customer, create new one
  const newCustomer = await client.create({
    _type: "customer",
    clerkId: id,
    firstName,
    lastName,
    email: emailAddress,
  });

  return newCustomer._id;
}

export async function addAddressToCustomer(
  customerId: string,
  phone: string,
  street: string,
  city: string,
  apartment?: string,
  postalCode?: string
) {
  return await client
    .patch(customerId)
    .setIfMissing({ address: {}, phone: "" }) // Ensure the `address` object exists
    .set({
      address: {
        street,
        apartment,
        city,
        postalCode,
      },
      phone,
    })
    .commit();
}
interface OrderData {
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
  phone: string;
  street: string;
  apartment?: string;
  city: string;
  postalCode?: string;
}
export async function createOrder(orderData: OrderData, customerId: string) {
  const {
    items,
    totalAmount,
    paymentMethod,
    phone,
    street,
    apartment,
    city,
    postalCode,
  } = orderData;

  // First update customer with new addresses if provided
  await addAddressToCustomer(
    customerId,
    phone,
    street,
    city,
    apartment,
    postalCode
  );

  // Create the order
  const order = await client.create({
    _type: "order",
    orderNumber: ` ORD-${Date.now()}`,
    customer: {
      _type: "reference",
      _ref: customerId,
    },
    items: items.map((item) => ({
      _key: item._id,
      product: {
        _type: "reference",
        _ref: item._id,
      },
      quantity: item.cartQuantity,
      price: item.price,
    })),
    totalAmount,
    paymentMethod,
    status: "pending",
    orderDate: new Date().toISOString(),
  });

  // // Update customer's orders array
  // await client
  //   .patch(customerId)
  //   .setIfMissing({ orders: [] })
  //   .append("orders", [
  //     {
  //       _key: order._id,
  //       _ref: order._id,
  //       _type: "reference",
  //     },
  //   ])
  //   .commit();

  return order;
}
