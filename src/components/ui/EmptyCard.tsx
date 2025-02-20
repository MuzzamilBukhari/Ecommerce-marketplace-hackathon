"use client"
import React from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

const EmptyCard = ({title} : {title: string}) => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/shop");
  };
  return (
    <div className="flex justify-center items-center flex-col mt-20  text-black bg-white ">
      <div className="mb-12 text-3xl font-bold">Your {title} is Empty</div>
      <div className="mt-10 ">
        <Button type="button" onClick={handleBtn} className="px-6 py-3">
          Go to Shop
        </Button>
      </div>
    </div>
  );
};

export default EmptyCard;
