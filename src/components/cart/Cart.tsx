import { useCart } from "@/context/cartContext";
import { CartItem } from "@/types/cartType";
import Link from "next/link";
import React from "react";
import CartCard from "./CartCard";

const Cart = () => {
  const { cartItems, cartTotal } = useCart();
  return (
    <div className="bg-[#fafafa] py-24 w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-12 lg:gap-36 xl:gap-48">
      {/* cart items */}
      <div className="flex justify-center items-center flex-col gap-6">
        {cartItems.map((item: CartItem) => (
          <CartCard key={item._id} item={item} />
        ))}
      </div>
      {/* summary */}
      {cartItems && (
        <div className="border rounded-lg p-6 shadow-md">
          <h4 className="text-2xl font-medium mb-4">Summary</h4>
          <div className="mt-3 text-sm">
            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span className="font-medium">${cartTotal}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Estimated Delivery & Handling</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between py-4 border-t border-b border-gray-200">
              <span>Total</span>
              <span className="text-lg font-semibold">${cartTotal}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="block w-full mt-5 px-4 py-3 text-center text-white bg-myHeading rounded-lg hover:scale-105 transition-all duration-300"
          >
            Member Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
