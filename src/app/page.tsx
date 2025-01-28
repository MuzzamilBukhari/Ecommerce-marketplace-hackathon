"use client";

import {
  ContainerFluid,
  HeroSection,
  HeroSection2,
  HomeBestSeller,
  FeaturedPosts,
  EditorsPick,
} from "@/components/";
import { useCategories } from "@/context/categoryContext";
import { useProducts } from "@/context/productsContext";
import { stringToSlug } from "@/myFunctions/stringToSlug";
import { Product } from "@/types/productType";
import { client } from "@/sanity/lib/client";

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export default function Home() {
  const { products, setProducts } = useProducts();
  const { setCategories } = useCategories();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    (async function () {
      try {
        let query = await client.fetch(
          `*[_type == "products"]{_id, _createdAt, name, description, category, price, discountPercent, 'image':image.asset->url, sizes, bestSelling}`
        );

        const productsArr: Product[] = query.map((product: any) => {
          product.slug = stringToSlug(product.name);
          return product;
        });
        console.log(productsArr);

        setProducts(productsArr);
        query = await client.fetch(
          `*[_type == 'category']{_id, name, 'image':image.asset->url, productsCount}`
        );
        console.log(query);
        setCategories(query);
      } catch (error) {
        throw new Error("Error in fetch");
      }
    })();
  }, [setProducts, setCategories]);
  if (!isClient) {
    return <Loader />;
  }
  return (
    <div className="bg-white">
      <HeroSection />
      <EditorsPick />
      {products ? <HomeBestSeller products={products} /> : <Loader />}
      <HeroSection2 />
      <ContainerFluid />
      <FeaturedPosts />
    </div>
  );
}
