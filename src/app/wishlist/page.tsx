"use client";

import React from "react";
import { useWishlist } from "@/context/wishlistContext";
import Link from "next/link";
import Image from "next/image";
import Wishlist from "@/components/wishlist/Wishlist";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Line from "@/components/ui/Line";
import PageHeader from "@/components/ui/PageHeader";

const WishlistPage = () => {
  const router = useRouter();
  const { wishlist } = useWishlist();

  const handleBtn = () => {
    router.push("/shop");
  };
  return (
    <section className="pt-32">
      <div className="container mx-auto px-8">
        <PageHeader
          first=""
          second="Wishlist"
          tagline=""
          pageName="Wishlist"
          pageUrl="/wishlist"
        />
        {wishlist.length > 0 ? (
          <Wishlist />
        ) : (
          <>
            <p className="text-center text-myGry mt-12">
              Your wishlist is empty.
            </p>
            <div className="mt-10 w-[200px] mx-auto">
              <Button type="button" onClick={handleBtn} className="px-6 py-3">
                Go to Shop
              </Button>
            </div>
          </>
        )}
      </div>
      <Line />
    </section>
  );
};

export default WishlistPage;
