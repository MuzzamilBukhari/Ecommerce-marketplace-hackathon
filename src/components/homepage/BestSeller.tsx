import React from "react";
import Image from "next/image";
import ProductCard from "../product-list-page/ProductCard";
import { Product } from "@/types/productType";
const BestSeller = ({ products }: { products: Product[] }) => {
  const filteredProducts = products.filter((product) => product.bestSelling);
  return (
    <section className="mt-20 ">
      <div className="container px-0 sm:px-5 py-20 mx-auto ">
        <div className="items-center text-center text-black space-y-2 px-4">
          <h3 className="text-2xl font-semibold text-myGry">
            Featured Products
          </h3>
          <h1 className="text-3xl font-bold text-myHeading">
            BEST SELLING PRODUCTS
          </h1>
          <h6 className="text-myBlk">
            Problems trying to resolve the conflict between
          </h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-4 px-4 sm:px-0 ">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              slug={product.slug}
              imgUrl={product.image}
              category={product.category}
              price={product.price}
              discountPercent={product.discountPercent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
