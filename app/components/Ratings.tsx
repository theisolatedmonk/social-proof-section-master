import React from 'react'
import Image from 'next/image'
import startIcon from '@/public/images/icon-star.svg'
type RatingsType = {
    review: string
    className: string
}

export default function Ratings(props: RatingsType) {
    return (
        <div className={`flex flex-col justify-center items-center gap-2 p-4 sm:w-full bg-LightGrayishMagenta rounded-md sm:flex-row ${props.className}`}>
            <div className="flex gap-2  text-VeryDarkMagenta">
                <Image src={startIcon} alt={'Star'} />
                <Image src={startIcon} alt={'Star'} />
                <Image src={startIcon} alt={'Star'} />
                <Image src={startIcon} alt={'Star'} />
                <Image src={startIcon} alt={'Star'} />
            </div>
            <p className="font-bold text-sm ">{props.review}</p>
        </div>
    )
}