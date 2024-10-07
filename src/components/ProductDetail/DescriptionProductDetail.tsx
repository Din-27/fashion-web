import React from "react";
import InputQuantity from "../Input/InputQuantity";

export default function DescriptionProductDetail() {
  return (
    <div className="my-4 space-y-2 lg:space-y-4 lg:space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold lg:text-4xl">One Life Graphic T-shirt</h3>
        <div className="rating flex items-center space-x-2">
          <div className="flex items-center">
            <svg
              className="ms-1 h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="ms-1 h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="ms-1 h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="ms-1 h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="ms-1 h-4 w-4 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <p className="font-semibold">4.5/5</p>
        </div>
      </div>
      <div className="space-y-4 border-b pb-4">
        <h2 className="flex items-center space-x-4 text-2xl font-semibold">
          <span>$240</span>
          <span className="text-gray-300 line-through">$260</span>
          <span className="rounded-full bg-red-100 px-4 py-1 text-base text-sm text-red-600">
            -20%
          </span>
        </h2>
        <div className="dec">
          <p className="text-sm opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptatem temporibus
            Lorem ipsum dolor sit amet.....
          </p>
        </div>
      </div>
      <div className="space-y-4 border-b pb-4">
        <h4>Select Colors</h4>
        <div className="flex flex-wrap gap-4">
          <div className="rounded-full bg-[#4F4631] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-check text-[#4F4631]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
          <div className="rounded-full bg-[#314F4A] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-check text-[#314F4A]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
          <div className="rounded-full bg-[#31344F] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-check text-[#31344F]"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
        </div>
      </div>
      <div className="space-y-4 border-b pb-4">
        <h4>Choose Size</h4>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white">
            Small
          </button>
          <button className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white">
            Medium
          </button>
          <button className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white">
            Large
          </button>
          <button className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white">
            X-Large
          </button>
        </div>
      </div>
      <div className="flex space-x-4 pt-4 lg:pt-0">
        <InputQuantity className="flex items-center rounded-full border border-gray-200 bg-gray-200 py-1 lg:py-2" />
        <button className="w-full rounded-full bg-black text-white lg:py-2">Add to Cart</button>
      </div>
    </div>
  );
}
