import React from "react";
import TShirt from "../../assets/shirt.png";

export default function index(props: BrowseCategoryTypes.GalleryCard<any>) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 px-8 py-4 lg:mx-24 lg:min-h-full lg:px-0">
      <div className="w-full rounded-xl bg-[#F0F0F0] p-6">
        <h2 className="mb-6 mt-4 text-center text-4xl font-bold lg:mb-14 lg:mt-8 lg:text-5xl">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="relative flex h-full rounded-lg bg-white lg:col-span-2 lg:h-[250px]">
            <h4 className="absolute ml-4 mt-8 text-2xl font-bold lg:text-4xl">T-shirt</h4>
            <img className="ml-auto" src={TShirt.src} alt="" />
          </div>
          <div className="relative flex h-full rounded-lg bg-white lg:col-span-3 lg:h-[250px]">
            <h4 className="absolute ml-4 mt-8 text-2xl font-bold lg:text-4xl">T-shirt</h4>
            <img className="ml-auto" src={TShirt.src} alt="" />
          </div>
          <div className="relative flex h-full rounded-lg bg-white lg:col-span-3 lg:h-[250px]">
            <h4 className="absolute ml-4 mt-8 text-2xl font-bold lg:text-4xl">T-shirt</h4>
            <img className="ml-auto" src={TShirt.src} alt="" />
          </div>
          <div className="relative flex h-full rounded-lg bg-white lg:col-span-2 lg:h-[250px]">
            <h4 className="absolute ml-4 mt-8 text-2xl font-bold lg:text-4xl">T-shirt</h4>
            <img className="ml-auto" src={TShirt.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
