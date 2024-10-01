import React from 'react'
import { chooseFilterById } from '../../../utility/filter/chooseFilterGalleryCard'

export default function GalleryProductDetail(props: ProductDetailTypes.GalleryCard<any[]>) {
    const state = { id: 1 }
    return chooseFilterById(props, state.id) && chooseFilterById(props, state.id).map((x) =>
        <div className="lg:grid grid-cols-4 flex flex-col-reverse gap-4">
            <div className="lg:grid flex gap-4">
                <div>
                    <img className="max-w-full h-full rounded-lg"
                        src={x.image || "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"} alt="" />
                </div>
                <div>
                    <img className="max-w-full h-full rounded-lg"
                        src={x.image || "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"} alt="" />
                </div>
                <div>
                    <img className="max-w-full h-full rounded-lg"
                        src={x.image || "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"} alt="" />
                </div>
            </div>
            <div className="flex items-center border rounded-lg col-span-3">
                <img className="max-w-full"
                    src={x.image || "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"} alt="" />
            </div>
        </div>
    )
}
