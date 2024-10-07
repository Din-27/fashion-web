import React from "react";

export default function GalleryProductDetail(props: any) {
  const { dataExtra, dataMain } = props.data;

  return (
    <div className="flex grid-cols-4 flex-col-reverse gap-4 lg:grid">
      <div className="flex gap-4 lg:grid">
        {dataExtra.map((x, y) => (
          <div
            className={`${x.active && "rounded-lg border-2 border-black"} w-[96px] lg:w-[140px]`}
            key={y}
            onClick={() => props.onClickImageView(x.id)}
          >
            <img
              className="h-full max-w-full rounded-lg"
              src={x?.image || "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="col-span-3 mx-auto flex items-center rounded-lg border px-4">
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
