import React from "react";
import OrderConfirm from "@/components/order-confirm/OrderConfirm";

export const metadata = {
  title: "Order Confirm",
};

const Page = ({ params }: { params: { order_id: string } }) => {
  return (
    <OrderConfirm params={params}/>
  );
};

export default Page;
