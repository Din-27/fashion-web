"use client";
import React, { useState } from "react";
import { data } from "../src/data/products";
import useMediaQuery from "../src/utility/sizeMedia/mediaQuery";
import { BrowseCategoryGallery, CarouselReviews, SellingCard } from "../src/components";

const UtilityPageArrival = () => {
  const [viewAll, setViewAll] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const product = isMobileView ? data : viewAll ? data : data.slice(0, 4);
  const buttonName = !viewAll ? "View All" : "Less Product";
  const onClickViewAll = () => setViewAll((prev) => (prev ? false : true));

  return { product, buttonName, onClickViewAll };
};

const UtilityPageTopSelling = () => {
  const [viewAll, setViewAll] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const product = isMobileView ? data : viewAll ? data : data.slice(0, 4);
  const buttonName = !viewAll ? "View All" : "Less Product";
  const onClickViewAll = () => setViewAll((prev) => (prev ? false : true));

  return { product, buttonName, onClickViewAll };
};

export default function Page() {
  const {
    product: productArrival,
    buttonName: buttonNameArrival,
    onClickViewAll: onClickViewAllArrival,
  } = UtilityPageArrival();
  const {
    product: productTopSelling,
    buttonName: buttonNameTopSelling,
    onClickViewAll: onClickViewAllTopSelling,
  } = UtilityPageTopSelling();

  return (
    <div className="my-4 space-y-8">
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
      <BrowseCategoryGallery data={undefined} />
      <CarouselReviews title={"OUR CUSTOMER HAPPY"} data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} />
    </div>
  );
}
