"use client";
import React from "react";
import { Breadcumb, FilterWeb } from "../../src/components";

export default function page() {
  return (
    <div className="space-y-28 px-8 py-4 lg:px-24">
      <div className="space-y-6">
        <Breadcumb />
        <div className='flex'>
          <FilterWeb />
        </div>
      </div>
    </div>
  );
}
