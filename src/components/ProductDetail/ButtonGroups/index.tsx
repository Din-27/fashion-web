import React from 'react'

export default function index() {
    return (
        <div
            className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex overflow-x-auto -mb-px">
                <li className="me-2">
                    <a href="#"
                        className="inline-block p-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Product
                        Details</a>
                </li>
                <li className="me-2">
                    <a href="#"
                        className="inline-block p-4 text-black border-b-2 border-black rounded-t-lg active"
                        aria-current="page">Rating & Reviews</a>
                </li>
                <li className="me-2">
                    <a href="#"
                        className="inline-block p-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">FAQs</a>
                </li>
            </ul>
        </div>
    )
}
