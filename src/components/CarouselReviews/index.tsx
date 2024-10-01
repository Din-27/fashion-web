import React from 'react'
import Card from './Card'

export default function index({ title, data }: { title: string, data: any[] }) {
    return (
        <div className="flex flex-col justify-center items-center lg:space-y-4 space-y-2 py-14 lg:px-24 px-8">
            <h2 className="text-left lg:text-5xl text-2xl font-bold ">{title}</h2>
            <div className="flex overflow-x-auto gap-x-6 lg:py-3 py-4 mx-auto max-w-full">
                {data.map(x => <Card />)}
            </div>
        </div>
    )
}
