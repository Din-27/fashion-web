"use client";
import React from "react";
import ButtonFilter from "./ButtonFilter";
import ListFilter from "./ListFilter";

const dataFilter = [
  { label: "Default checked", check: true },
  { label: "False checked", check: false },
  { label: "False checked", check: false },
];

export default function FilterWeb({ context, className }: { context: any; className?: string }) {
  const { view: viewFilter, clickButton: clickFilter } = context();
  const { view: viewPrice, clickButton: clickPrice } = context();
  const { view: viewColor, clickButton: clickColor } = context();
  const { view: viewSize, clickButton: clickSize } = context();
  return (
    <div className={`h-fit w-[295px] space-y-6 rounded-lg border px-4 py-6 ${className}`}>
      <div>
        <ButtonFilter clickFilter={clickFilter} view={viewFilter} title={"Filter"} />
        <ListFilter view={viewFilter} data={dataFilter} />
      </div>
      <div>
        <ButtonFilter clickFilter={clickPrice} view={viewPrice} title={"Price"} />

        <ListFilter view={viewPrice} data={dataFilter} />
      </div>
      <div>
        <ButtonFilter clickFilter={clickColor} view={viewColor} title={"Color"} />
        <ListFilter view={viewColor} data={dataFilter} />
      </div>
      <div>
        <ButtonFilter clickFilter={clickSize} view={viewSize} title={"Size"} />
        <ListFilter view={viewSize} data={dataFilter} />
      </div>
      <button className="w-full rounded-full border bg-black p-2 px-6 text-white">
        Apply Filter
      </button>
    </div>
  );
}
