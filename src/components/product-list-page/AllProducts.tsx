"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { client } from "@/sanity/lib/client";
import { useProducts } from "@/context/productsContext";

const AllProducts = () => {
  const { products } = useProducts();

  return (
    <div className="flex justify-center items-center gap-4 flex-wrap py-12 bg-white">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          slug={product.slug}
          category={product.category}
          imgUrl={product.image}
          price={product.price}
          discountPercent={product.discountPercent}
        />
      ))}
    </div>
  );
};

export default AllProducts;
