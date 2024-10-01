import React from 'react'

export default function DescriptionProductDetail() {
    return (
        <div className="space-y-2 lg:space-y-4 my-4">
            <h3 className="lg:text-4xl text-2xl font-bold">One Life Graphic T-shirt</h3>
            <div className="rating flex items-center space-x-2">
                <div className="flex items-center">
                    <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 ms-1 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>
                <p className="font-semibold">4.5/5</p>
            </div>
            <div className="border-b pb-4 space-y-4">
                <h2 className="font-semibold text-2xl flex space-x-4 items-center">
                    <span>$240</span>
                    <span className="text-gray-300 line-through">$260</span>
                    <span className="text-base py-1 px-4 bg-red-100 text-red-600 rounded-full text-sm">-20%</span>
                </h2>
                <div className="dec">
                    <p className="text-sm opacity-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                        voluptatem temporibus Lorem ipsum dolor sit amet.....</p>
                </div>
            </div>
            <div className="border-b pb-4 space-y-4">
                <h4>Select Colors</h4>
                <div className="flex flex-wrap gap-4">
                    <div className="bg-[#4F4631] p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-check text-[#4F4631]">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </div>
                    <div className="bg-[#314F4A] p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-check text-[#314F4A]">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </div>
                    <div className="bg-[#31344F] p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-check text-[#31344F]">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="border-b pb-4 space-y-4">
                <h4>Choose Size</h4>
                <div className="flex flex-wrap gap-4">
                    <button
                        className="bg-gray-200 py-2 px-4 text-sm font-medium hover:text-white hover:bg-black rounded-full">
                        Small
                    </button>
                    <button
                        className="bg-gray-200 py-2 px-4 text-sm font-medium hover:text-white hover:bg-black rounded-full">
                        Medium
                    </button>
                    <button
                        className="bg-gray-200 py-2 px-4 text-sm font-medium hover:text-white hover:bg-black rounded-full">
                        Large
                    </button>
                    <button
                        className="bg-gray-200 py-2 px-4 text-sm font-medium hover:text-white hover:bg-black rounded-full">
                        X-Large
                    </button>
                </div>
            </div>
            <div className="flex space-x-4">
                <div>
                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>
                    <div className="flex items-center rounded-full bg-gray-200 border border-gray-200">
                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                            &minus;
                        </button>
                        <input type="number" id="Quantity" value="1"
                            className="h-10 w-16 bg-gray-200 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                        <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                            &plus;
                        </button>
                    </div>
                </div>
                <button className="bg-black rounded-full text-white w-full">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
