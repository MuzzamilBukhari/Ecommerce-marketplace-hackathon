import React from "react";
import Wishlist from "@/components/wishlist/WishlistSection";
import Line from "@/components/ui/Line";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Wishlist",
};

const WishlistPage = () => {
  
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
       <Wishlist />
      </div>
      <Line />
    </section>
  );
};

export default WishlistPage;
