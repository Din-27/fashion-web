import React from "react";
import {
  Breadcumb,
  ButtonGroups,
  DescriptionProductDetail,
  GalleryProduct,
  Review,
} from "../../../src/components";

const data = [
  { id: 1, image: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" },
  { id: 2, image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
  { id: 3, image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
  { id: 4, image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
];

export default function page() {
  return (
    <div className="space-y-28 px-8 py-4 lg:px-24">
      <div className='space-y-6'>
        <Breadcumb />
        <div className="grid-cols-2 gap-6 lg:grid">
          <GalleryProduct data={data} />
          <DescriptionProductDetail />
        </div>
      </div>
      <div>
        <ButtonGroups />
        <Review />
      </div>
    </div>
  );
}
