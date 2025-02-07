import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Navbar, Footer } from "@/components/";
import { ProductsProvider } from "@/context/productsContext";
import { CategoryProvider } from "@/context/categoryContext";
import { CartItemProvier } from "@/context/cartContext";
import { WishlistProvider } from "@/context/wishlistContext";
import { ToastProvider } from "@/components/toast/ToastNotifications";
import { FormProvider } from "@/context/formDataContext";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoeway",
  description: "E-commerce Marketplace",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("SANITY PROJECT ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
      <html lang="en">
        <body className={`${inter.className} bg-white`}>
          <FormProvider>
            <ToastProvider>
              <CartItemProvier>
                <CategoryProvider>
                  <ProductsProvider>
                    <WishlistProvider>


                      {children}

                    </WishlistProvider>
                  </ProductsProvider>
                </CategoryProvider>
              </CartItemProvier>
            </ToastProvider>
          </FormProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
