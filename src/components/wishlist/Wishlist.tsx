import React from "react";
import { useWishlist } from "@/context/wishlistContext";
import { Product } from "@/types/productType";
import WishlistCard from "./WishlistCard";
const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlist.map((product: Product) => (
        <WishlistCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Wishlist;
