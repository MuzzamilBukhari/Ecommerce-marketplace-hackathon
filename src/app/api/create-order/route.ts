import { createClient } from "@sanity/client";
import { NextRequest, NextResponse } from "next/server";

// Create a server-side Sanity client with write token
const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-09",
  token: process.env.SANITY_WRITE_TOKEN!, // Server-side token only
  useCdn: false, // Disable CDN for mutations
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customer, orderData, cartItems } = body;

    // Validate required fields
    if (!customer || !orderData || !cartItems) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create customer document
    const customerDoc = await serverClient.create({
      _type: "customer",
      clerkId: customer.clerkId,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      address: {
        street: customer.address.street,
        apartment: customer.address.apartment,
        city: customer.address.city,
        postalCode: customer.address.postalCode,
      },
    });

    // Create order document
    const order = await serverClient.create({
      _type: "order",
      orderNumber: `SW-${Date.now()}`,
      customer: {
        _type: "reference",
        _ref: customerDoc._id,
      },
      items: orderData.items.map((item: any) => ({
        _key: item._key,
        _type: "object",
        products: {
          _type: "reference",
          _ref: item.products._ref,
        },
        quantity: item.quantity,
        price: item.price,
      })),
      total: orderData.total,
      status: orderData.status || "pending",
      paymentMethod: orderData.paymentMethod,
    });

    // Update inventory for each product
    await Promise.all(
      cartItems.map(async (item: any) => {
        await serverClient
          .patch(item._id)
          .dec({ stock: item.cartQuantity })
          .commit();
      })
    );

    return NextResponse.json(
      {
        success: true,
        orderId: order._id,
        orderNumber: order.orderNumber,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create order",
      },
      { status: 500 }
    );
  }
}
