"use client"
import React from 'react'
import Card from './Card'
import useMediaQuery from '../../utility/sizeMedia/mediaQuery';

export default function index(props: ProductDetailTypes.SellingCard<any[]>) {
    const isMobileView = useMediaQuery("(min-width: 768px)")
    const data = isMobileView ? props.data.slice(0, 4) : props.data
    
    return (
        <div className="flex flex-col justify-center min-h-full items-center lg:space-y-4 space-y-8 py-4 px-8 lg:px-0">
            <h2 className="text-center lg:text-5xl text-4xl font-bold mb-4">{props.title}</h2>
            <div className="lg:grid grid-cols-4 flex overflow-x-auto w-full lg:gap-24 gap-x-6 lg:py-3 py-4 px-8 lg:px-20">
                {data && data.map((x, y: number) => (
                    <Card key={y} index={y} item={x} />
                ))}
            </div>
            <button className="lg:block hidden border rounded-full py-2 px-14 font-semibold">{props.buttonName}</button>
        </div>
    )
}
