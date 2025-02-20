import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export const metadata = {
  title: "Signin",
};

export default function Page() {
  return (
    <div className="flex justify-center items-center p-3 pt-28 pb-20">
      <div className="w-full xs:py-20 py-10 flex md:gap-10 gap-5">
        <div className="md:w-1/2 w-full md:block hidden rounded-md overflow-hidden">
          <Image
            src="/auth/auth.jpg"
            alt="Sign Up Page Image"
            width={805}
            height={781}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="md:w-1/2 w-full m-auto xs:px-20 px-2">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
