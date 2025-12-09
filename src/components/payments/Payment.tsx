"use client";

import { convertCurrencyToSubcurrency } from "@/myFunctions/convertCurrencyToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Line from "../ui/Line";
import PaymentForm from "./PaymentForm";
import { useCart } from "@/context/cartContext";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Payment = () => {
  const { cartTotal } = useCart();
  return (
    <div className="mt-32 px-8 py-4">
      <div>
        <h1 className="text-myHeading font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-16">
          Enter Card Details
        </h1>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertCurrencyToSubcurrency(cartTotal, 100),
            currency: "usd",
          }}
        >
          <PaymentForm amount={cartTotal} />
        </Elements>
      </div>
      <Line />
    </div>
  );
};

export default Payment;
