import React from "react";
import Card from "./Card";

export default function index(props: ProductDetailTypes.SellingCard<any[]>) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center space-y-8 px-8 py-4 lg:space-y-4 lg:px-0">
      <h2 className="mb-4 text-center text-4xl font-bold lg:text-5xl">{props.title}</h2>
      <div className="flex w-full grid-cols-4 gap-x-6 overflow-x-auto px-8 py-4 lg:grid lg:gap-24 lg:px-20 lg:py-3">
        {props.data && props.data.map((x, y: number) => <Card key={y} index={y} item={x} />)}
      </div>
      <button
        onClick={props.buttonClick}
        className="hidden rounded-full border px-14 py-2 font-semibold lg:block"
      >
        {props.buttonName}
      </button>
    </div>
  );
}
