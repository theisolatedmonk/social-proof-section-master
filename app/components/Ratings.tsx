import React from 'react'
import Image from 'next/image'
import startIcon from '@/public/images/icon-star.svg'
type RatingsType = {
    review: string
}

export default function Ratings(props: RatingsType) {
    return (
        <div className='flex flex-col justify-center items-center gap-2 p-2 bg-LightGrayishMagenta rounded-md w-full'>
            <div className="flex gap-2 p-2 text-VeryDarkMagenta">
                <Image src={startIcon} alt={''} />
                <Image src={startIcon} alt={''} />
                <Image src={startIcon} alt={''} />
                <Image src={startIcon} alt={''} />
                <Image src={startIcon} alt={''} />
            </div>
            <p className="font-bold text-sm ">{props.review}</p>
        </div>
    )
}