"use client";
import React from "react";
import { data } from "../src/data/products";
import { BrowseCategoryGallery, CarouselReviews, SellingCard } from "../src/components";
import { HandleViewAllPage } from "../src/utility/ViewAllHandler";

const dataCarouselReview = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function Page() {
  const {
    product: productArrival,
    buttonName: buttonNameArrival,
    onClickViewAll: onClickViewAllArrival,
  } = HandleViewAllPage(data);
  const {
    product: productTopSelling,
    buttonName: buttonNameTopSelling,
    onClickViewAll: onClickViewAllTopSelling,
  } = HandleViewAllPage(data);

  return (
    <div className="my-4 space-y-8">
      <div className="px-8 lg:px-24">
        <SellingCard
          data={productArrival}
          title={"NEW ARRIVALS"}
          buttonName={buttonNameArrival}
          buttonClick={onClickViewAllArrival}
          buttonShow
        />
        <SellingCard
          data={productTopSelling}
          title={"TOP SELLING"}
          buttonName={buttonNameTopSelling}
          buttonClick={onClickViewAllTopSelling}
          buttonShow
        />
      </div>
      <BrowseCategoryGallery data={undefined} />
      <CarouselReviews title={"OUR CUSTOMER HAPPY"} data={dataCarouselReview} />
    </div>
  );
}
