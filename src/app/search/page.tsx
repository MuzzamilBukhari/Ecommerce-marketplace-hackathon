import { Suspense } from "react";
import SearchParams from "@/components/search/SearchParams";
import { Link } from "lucide-react";
import { MdChevronRight } from "react-icons/md";
import Loader from "@/components/ui/Loader";
const SearchPage = () => {
  return (
    <div className="pt-40 bg-[#fafafa] text-black">
      {/* Search header */}
      <div className=" w-full flex flex-col sm:flex-row gap-6 sm:gap-0 justify-start sm:justify-between items-center mb-20 px-12 bg-[#fafafa]">
        <h1 className="text-3xl font-bold">Shop</h1>
        <div className="flex justify-center items-center gap-4 font-semibold">
          <h3>
            <Link href={"/"} className="text-myBlk">
              Home
            </Link>
          </h3>
          <MdChevronRight className="text-myHeading w-8 h-8" />
          <h3 className="text-myGry ">
            <Link href={"/shop"}>Shop</Link>
          </h3>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <SearchParams />
      </Suspense>
    </div>
  );
};

export default SearchPage;
