import React from 'react'

export default function index(props: BrowseCategoryTypes.GalleryCard<any>) {
    return (
        <div
            className="flex flex-col justify-center lg:min-h-full min-h-screen items-center space-y-8 py-4 px-8 lg:px-0 lg:mx-24 ">
            <div className="bg-[#F0F0F0] rounded-xl p-6 w-full">
                <h2 className="lg:text-5xl text-4xl font-bold text-center lg:mb-14 lg:mt-8 mb-6 mt-4">BROWSE BY DRESS STYLE</h2>
                <div className="grid lg:grid-cols-5 gap-4 grid-cols-1">
                    <div className="relative lg:h-[250px] h-full lg:col-span-2 rounded-lg bg-white flex">
                        <h4 className="absolute ml-4 text-2xl lg:text-4xl font-bold mt-8">T-shirt</h4>
                        <img className="ml-auto" src="./assets/shirt.png" alt="" />
                    </div>
                    <div className="relative lg:h-[250px] h-full lg:col-span-3 rounded-lg bg-white flex">
                        <h4 className="absolute ml-4 text-2xl lg:text-4xl font-bold mt-8">T-shirt</h4>
                        <img className="ml-auto" src="./assets/shirt.png" alt="" />
                    </div>
                    <div className="relative lg:h-[250px] h-full lg:col-span-3 rounded-lg bg-white flex">
                        <h4 className="absolute ml-4 text-2xl lg:text-4xl font-bold mt-8">T-shirt</h4>
                        <img className="ml-auto" src="./assets/shirt.png" alt="" />
                    </div>
                    <div className="relative lg:h-[250px] h-full lg:col-span-2 rounded-lg bg-white flex">
                        <h4 className="absolute ml-4 text-2xl lg:text-4xl font-bold mt-8">T-shirt</h4>
                        <img className="ml-auto" src="./assets/shirt.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
