import React from "react";
import Card from "./Card";

export default function index({ title, data }: { title: string; data: any[] }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 px-8 py-14 lg:space-y-4 lg:px-24">
      <h2 className="text-left text-2xl font-bold lg:text-5xl">{title}</h2>
      <div className="mx-auto flex max-w-full gap-x-6 overflow-x-auto py-4 lg:py-3">
        {data.map((x, y) => (
          <Card key={y} />
        ))}
      </div>
    </div>
  );
}
