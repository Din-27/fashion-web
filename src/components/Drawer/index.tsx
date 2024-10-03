import React from "react";
import Cross from "../../assets/cross.svg";
import FilterWeb from "../Filter/FilterWeb";

export default function index({ context, transform, closeView }) {
  return (
    <div
      id="drawer-swipe"
      className={`${transform ? "fixed" : "hidden"} bottom-0 left-0 right-0 z-40 flex min-h-screen w-full transform-none items-end overflow-y-auto border-gray-200 bg-gray-500/25`}
      aria-labelledby="drawer-swipe-label"
    >
      <div className="w-full rounded-t-3xl bg-white">
        <div className="flex justify-between px-8 py-4">
          <h5 className="text-2xl font-bold">Filter</h5>
          <button onClick={closeView}>
            <img src={Cross.src} alt="" />
          </button>
        </div>
        <FilterWeb className="w-full bg-white px-8" context={context} />
      </div>
    </div>
  );
}
