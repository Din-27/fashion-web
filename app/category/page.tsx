"use client";
import React, { useState } from "react";
import ArrowLeft from "../../src/assets/arrow-left.svg";
import ArrowRight from "../../src/assets/arrow-right.svg";
import FilterIcon from "../../src/assets/filter-icon.svg";
import { data } from "../../src/data/products";
import Pagination from "../../src/components/Pagination";
import { Breadcumb, FilterWeb, ProductCard } from "../../src/components";

const FilterViewContext = () => {
  const [view, setView] = useState(true);
  const clickButton = () => setView((prev) => (prev ? false : true));
  return { view, clickButton };
};

export default function page() {
  return (
    <div className="min-h-screen px-4 py-4 lg:space-y-28 lg:px-24">
      <div className="space-y-6">
        <Breadcumb />
        <div className="lg:flex lg:gap-x-8">
          <FilterWeb className="hidden lg:block" context={FilterViewContext} />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="mb-2 text-5xl font-bold">Casual</h3>
              <button className="block rounded-full bg-gray-100 px-4 lg:hidden">
                <img src={FilterIcon.src} alt="" />
              </button>
            </div>
            <div className="mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-14">
              {data.map((x, y) => (
                <ProductCard key={y} index={y} item={x} height={"160px"} width={"160px"} />
              ))}
              <div className="col-span-2 mt-8 flex w-full items-center justify-between lg:col-span-3">
                <button className="flex items-center space-x-2 rounded-lg border px-2 py-2 lg:space-x-4 lg:px-4">
                  <img src={ArrowLeft.src} alt="" />
                  <span className="font-semibold lg:text-lg">Previous</span>
                </button>
                <Pagination />
                <button className="flex items-center space-x-2 rounded-lg border px-2 py-2 lg:space-x-4 lg:px-4">
                  <span className="font-semibold lg:text-lg">Next</span>
                  <img src={ArrowRight.src} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
