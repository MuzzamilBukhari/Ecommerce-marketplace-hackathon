import { discountedPrice } from "@/myFunctions/discountedPrice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  name,
  slug,
  category,
  imgUrl,
  price,
  discountPercent,
}: {
  name: string;
  slug: string;
  category: string;
  imgUrl: string;
  price: number;
  discountPercent: number;
}) => {
  return (
    <Link
      href={`/shop/${category}/${slug}`}
      className="text-black hover:scale-105 duration-200 shadow-myGry/40 shadow-md rounded-xl"
    >
      <div className=" flex justify-center items-center flex-col py-6 px-2 sm:p-5">
        <div className="w-[200px] h-[200px] overflow-hidden object-center object-cover">
          <Image
            className="object-contain object-center rounded "
            alt="product"
            src={imgUrl}
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-3 mt-3 font-semibold">
          <h3 className="max-w-[200px] text-center">{name}</h3>
          <h4 className="text-myGry">{category.toUpperCase()}</h4>
          <div className="flex gap-2">
            {discountPercent ? (
              <>
                {" "}
                <span className="text-myGry line-through">{price}</span>
                <span className="text-myHeading">
                  {discountedPrice(price, discountPercent)}
                </span>
              </>
            ) : (
              <span className="text-myHeading">{price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
