import React from "react";

export default function ButtonFilter({ clickFilter, title, view }) {
  return (
    <h2 id="accordion-collapse-heading-1" className="border-b pb-2">
      <button
        onClick={clickFilter}
        type="button"
        className="flex w-full items-center justify-between gap-3 font-medium text-gray-500 rtl:text-right"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>{title}</span>
        {view ? (
          <svg
            data-accordion-icon=""
            className="h-3 w-3 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            ></path>
          </svg>
        ) : (
          <svg
            data-accordion-icon
            className="h-3 w-3 shrink-0 rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        )}
      </button>
    </h2>
  );
}
