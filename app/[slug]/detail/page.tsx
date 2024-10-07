"use client";
import React, { useState } from "react";
import {
  Breadcumb,
  ButtonGroups,
  DescriptionProductDetail,
  GalleryProduct,
  Review,
  SellingCard,
} from "../../../src/components";
import { chooseFilterById } from "../../../src/utility/filter/chooseFilterGalleryCard";

const data = [
  {
    id: 1,
    title: "Polo with Contrast Trims",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
  },
  {
    id: 2,
    title: "Polo with Contrast Trims",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    id: 3,
    title: "Polo with Contrast Trims",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    id: 4,
    title: "Polo with Contrast Trims",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
];

const dataButtonGroups = [
  { name: "Product Details", path: "product_detail", active: false },
  { name: "Rating & Reviews", path: "rating_reviews", active: true },
  { name: "FAQs", path: "faqs", active: false },
];

const dataReviews = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function page() {
  const [imageView, setImageView] = useState(1);
  const dataGallery = chooseFilterById(data as any[], imageView);
  const onClickImageView = (id: number) => setImageView(id);
  const [pathActive, setPathActive] = useState("rating_reviews");
  const onClickBtnGroup = (nav: string) => setPathActive(nav);
  const dataBtnGroup =
    dataButtonGroups &&
    dataButtonGroups.map((x) => {
      x.active = x.path === pathActive ? true : false;
      return x;
    });

  return (
    <div className="space-y-28 px-8 py-4 lg:px-24">
      <div className="space-y-6">
        <Breadcumb />
        <div className="grid-cols-2 gap-6 lg:grid">
          <GalleryProduct data={dataGallery} onClickImageView={onClickImageView} />
          <DescriptionProductDetail />
        </div>
      </div>
      <div>
        <ButtonGroups navigations={dataBtnGroup} buttonPathActive={onClickBtnGroup} />
        <Review data={dataReviews} />
      </div>
      <SellingCard
        data={data}
        title={"You might also like"}
        buttonName={""}
        buttonClick={() => {}}
        buttonShow={false}
      />
    </div>
  );
}
