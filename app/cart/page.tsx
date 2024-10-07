import React from "react";
import { OrderList, OrderSummary } from "../../src/components";

export default function page() {
  return (
    <div className="my-4 px-8 lg:px-24">
      <h2 className="my-4 text-3xl font-bold">YOUR CART</h2>
      <div className="grid grid-cols-3 items-start gap-8">
        <div className="col-span-2">
          <OrderList dataOrder={[1, 2]} />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
