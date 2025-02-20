import { Cart } from "@/components";
import Line from "@/components/ui/Line";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Cart",
};

const CartPage = () => {
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

        <Cart />
      </div>
      <Line />
    </section>
  );
};

export default CartPage;
