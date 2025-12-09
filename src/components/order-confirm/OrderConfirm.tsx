"use client";

import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import { FaCheckCircle, FaClipboard } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Line from "@/components/ui/Line";

const OrderConfirm = ({params} : {params: {order_id: string}}) => {
    const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(params.order_id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBtn = () => {
    router.push("/shop");
  };
  return (
    <section>
      <div className="text-center h-screen flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-myHeading">
            Thank you for your Order
          </h1>
        </div>

        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-myGry font-semibold">
          Your Order ID is{" "}
          <span
            onClick={handleCopy}
            className="font-semibold text-lg sm:text-xl text-myGry cursor-pointer flex items-center gap-2 pt-2 "
          >
            {params.order_id}
            <FaClipboard
              className={`text-gray-500 ${
                copied ? "text-green-500" : "text-gray-500"
              }`}
              title={copied ? "Copied!" : "Copy to clipboard"}
            />
          </span>
        </span>
        {copied && (
          <div className="text-green-500 mt-2 text-xl font-semibold">
            Order ID copied to clipboard!
          </div>
        )}
        <div className="mt-16 ">
          <Button type="button" onClick={handleBtn} className="px-6 py-3">
            Go to Shop
          </Button>
        </div>
      </div>
      <Line />
    </section>
  )
}

export default OrderConfirm