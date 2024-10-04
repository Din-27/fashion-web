import React from "react";

export default function ListFilter({ view, data }) {
  return (
    <div
      id="accordion-collapse-body-1"
      aria-labelledby="accordion-collapse-heading-1"
      className={`my-4 ${!view && "hidden"} space-y-2 border-b-2 pb-2`}
    >
      {data.map((x, y) => (
        <div key={y} className="flex items-center justify-between">
          <label
            htmlFor={x.label}
            className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            {x.label}
          </label>
          <input
            id={x.label}
            type="checkbox"
            defaultValue=""
            defaultChecked={x.check}
            className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
        </div>
      ))}
    </div>
  );
}
