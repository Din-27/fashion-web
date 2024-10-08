import React from "react";

export default function InputQuantity({ className }: { className?: string }) {
  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        {" "}
        Quantity{" "}
      </label>
      <div className={className}>
        <button
          type="button"
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          &minus;
        </button>
        <input
          type="number"
          id="Quantity"
          defaultValue="1"
          className="h-10 w-16 border-transparent bg-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
    </div>
  );
}
