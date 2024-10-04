import React from "react";

export default function OrderSummary() {
  return (
    <div className="border rounded-xl p-4">
      <h4>Order Summary</h4>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>$565</p>
      </div>
    </div>
  );
}
