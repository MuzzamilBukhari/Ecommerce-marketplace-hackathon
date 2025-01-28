"use client";
import { Cart } from "@/components";
import { Button } from "@/components/ui/Button";
import Line from "@/components/ui/Line";
import PageHeader from "@/components/ui/PageHeader";
import { useCart } from "@/context/cartContext";
import { CartItem } from "@/types/cartType";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const router = useRouter();
  const { cartItems } = useCart();
  const handleBtn = () => {
    router.push("/shop");
  };
  return (
    <section className="flex justify-center items-center flex-col pt-40  text-black bg-white ">
      <div className="w-full mx-auto">
        {/* Cart header */}
        <PageHeader
          first=""
          second="Cart"
          tagline=""
          pageName="Cart"
          pageUrl="/cart"
        />

        {cartItems.length > 0 ? (
          <Cart />
        ) : (
          <div className="flex justify-center items-center flex-col mt-20  text-black bg-white ">
            <div className="mb-12 text-3xl font-bold">Your Cart is Empty</div>
            <div className="mt-10 ">
              <Button type="button" onClick={handleBtn} className="px-6 py-3">
                Go to Shop
              </Button>
            </div>
          </div>
        )}
      </div>
      <Line />
    </section>
  );
};

export default CartPage;
