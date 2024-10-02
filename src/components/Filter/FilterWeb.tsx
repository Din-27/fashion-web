import React from "react";

export default function FilterWeb() {
  return (
    <div className="w-1/6 rounded-lg border p-4">
      <h2>Filter</h2>
      <div className="my-4 space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default checkbox
          </label>
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
        </div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Checked state
          </label>
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
        </div>
      </div>
    </div>
  );
}
