"use client";
import React from "react";
import ButtonFilter from "./ButtonFilter";
import ListFilter from "./ListFilter";

const dataFilter = [
  { label: "Default checked", check: true },
  { label: "False checked", check: false },
  { label: "False checked", check: false },
];

export default function FilterWeb({ context }) {
  const { view: viewFilter, clickButton: clickFilter } = context();
  const { view: viewPrice, clickButton: clickPrice } = context();
  const { view: viewColor, clickButton: clickColor } = context();
  return (
    <div className="w-1/6 space-y-6 rounded-lg border p-4">
      <div id="accordion-collapse" data-accordion="collapse">
        <ButtonFilter clickFilter={clickFilter} view={viewFilter} title={"Filter"} />
        <ListFilter view={viewFilter} data={dataFilter} />
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <ButtonFilter clickFilter={clickPrice} view={viewPrice} title={"Price"} />

        <ListFilter view={viewPrice} data={dataFilter} />
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <ButtonFilter clickFilter={clickColor} view={viewColor} title={"Color"} />
        <ListFilter view={viewColor} data={dataFilter} />
      </div>
    </div>
  );
}
