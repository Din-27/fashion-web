"use client";
import React, { useState } from "react";
import { Breadcumb, FilterWeb } from "../../src/components";

const FilterViewContext = () => {
  const [view, setView] = useState(true);
  const clickButton = () => setView((prev) => (prev ? false : true));
  return { view, clickButton };
};

export default function page() {
  return (
    <div className="space-y-28 px-8 py-4 lg:px-24 min-h-screen">
      <div className="space-y-6">
        <Breadcumb />
        <div className="flex">
          <FilterWeb context={FilterViewContext} />
        </div>
      </div>
    </div>
  );
}
