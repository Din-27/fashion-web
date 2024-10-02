import React from "react";

export default function index(props: any) {
  return (
    <div className="border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <ul className="-mb-px flex w-full grid-cols-3 gap-0 overflow-x-auto border-b text-base lg:grid lg:text-2xl">
        {props.navigations.map((x, y) => (
          <li onClick={() => props.buttonPathActive(x.path)} key={y} className="me-2">
            <button
              className={`${x.active ? "border-b-2 text-black" : "text-gray-400"} inline-block w-full rounded-t-lg border-black p-4`}
            >
              {x.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
