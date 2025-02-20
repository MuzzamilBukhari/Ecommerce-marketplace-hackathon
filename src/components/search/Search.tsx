"use client";
import React, { Suspense } from "react";
import SearchParams from "./SearchParams";

const Search = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParams />
      </Suspense>
    </div>
  );
};

export default Search;
