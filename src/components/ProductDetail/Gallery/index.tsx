"use client";
import React, { useState } from "react";
import { chooseFilterById } from "../../../utility/filter/chooseFilterGalleryCard";

export default function GalleryProductDetail(props: ProductDetailTypes.GalleryCard<any[]>) {
  const [imageView, setImageView] = useState(1);
  const { dataExtra, dataMain } = chooseFilterById(props, imageView);
  const onClickImageView = (id: number) => setImageView(id);

  return (
    <div className="flex grid-cols-4 flex-col-reverse gap-4 lg:grid">
      <div className="flex gap-4 lg:grid">
        {dataExtra.map((x, y) => (
          <div key={y} onClick={() => onClickImageView(x.id)}>
            <img
              className="h-full max-w-full rounded-lg"
              src={x?.image || "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="col-span-3 flex items-center mx-auto rounded-lg border px-4">
        <img
          className="h-[300px] max-w-full"
          src={
            dataMain[0]?.image ||
            "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
}
