import React from "react";

export default function Divider({ captions }) {
  return (
    <span className="flex items-center">
      <span className="h-px flex-1 bg-gray-200"></span>
      <span className="shrink-0 px-6">{captions}</span>
      <span className="h-px flex-1 bg-gray-200"></span>
    </span>
  );
}
