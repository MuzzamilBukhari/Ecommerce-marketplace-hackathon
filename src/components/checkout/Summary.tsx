import { useCart } from "@/context/cartContext";
import { CartItem } from "@/types/cartType";
import React from "react";
import CartCard from "../cart/CartCard";

const Summary = () => {
    const { cartItems, cartTotal } = useCart();
  return (
    <div className="">
      <div>
        {cartItems.map((item: CartItem) => (
          <CartCard key={item._id} item={item} isCheckout={true} />
        ))}
      </div>
      <div>
        {cartItems && (
          <div className="text-[#111111]">
            <h4 className="text-2xl font-medium">Summary</h4>
            <div className="mt-3 text-[15px]">
              <div className="flex justify-between">
                Subtotal <span className="font-medium">${cartTotal}</span>
              </div>
              <div className="flex justify-between gap-2">
                Estimated Delivery & Handling{" "}
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between my-2 py-3 border-y border-[#E5E5E5]">
                <span>Total</span>{" "}
                <span className="font-medium">${cartTotal}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
