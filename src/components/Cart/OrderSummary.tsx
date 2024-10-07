import React from "react";
import LabelDiscount from "../../assets/label.svg";
import ArrowRightWhite from "../../assets/arrow-right-white.svg";

export default function OrderSummary() {
  return (
    <div className="rounded-xl border p-4">
      <h4>Order Summary</h4>
      <div className="space-y-4 border-b py-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$565</p>
        </div>
        <div className="flex justify-between">
          <p>Discount (-20%)</p>
          <p>-$113</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>$15</p>
        </div>
      </div>
      <div className="space-y-6 py-4">
        <div className="flex justify-between">
          <p>Total</p>
          <p>$467</p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center ps-3.5">
            <img src={LabelDiscount.src} alt="" />
          </div>
          <div className="flex gap-x-4">
            <input
              type="text"
              id="input-group-1"
              className="block w-full flex-1 rounded-full border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="name@flowbite.com"
            />
            <button className="rounded-full bg-black px-6 py-1 text-white">
              Apply
            </button>
          </div>
        </div>
        <button className="mx-auto flex w-full items-center justify-center gap-x-4 rounded-full bg-black px-6 py-4">
          <span className="text-lg text-white">Go to Checkout</span>
          <img className="w-5 text-white" src={ArrowRightWhite.src} alt="" />
        </button>
      </div>
    </div>
  );
}
