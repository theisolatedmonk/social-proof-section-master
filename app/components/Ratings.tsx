'use client'

import React from 'react'
import Image from 'next/image'
import startIcon from '@/public/images/icon-star.svg'
type RatingsType = {
    review: string
    className: string
    starNo?: number
}

export default function Ratings(props: RatingsType) {
    const { starNo = 5 } = props

    return (
        <div className={`flex flex-col justify-center items-center gap-2 p-4 sm:w-full bg-LightGrayishMagenta rounded-md sm:flex-row ${props.className}`}>
            <div className="flex gap-2  text-VeryDarkMagenta">

                <Star starNo={starNo} />

            </div>
            <p className="font-bold text-sm ">{props.review}</p>
        </div>
    )
}

function Star({ starNo }: { starNo: number }) {
    return Array(starNo).fill(<Image src={startIcon} alt={'Star'} />)
}


// export default function Ratings(props: RatingsType) {
//     return (
//         <div className={`flex flex-col justify-center items-center gap-2 p-4 sm:w-full bg-LightGrayishMagenta rounded-md sm:flex-row ${props.className}`}>
//             <div className="flex gap-2  text-VeryDarkMagenta">
//                 <Image src={startIcon} alt={'Star'} />
//                 <Image src={startIcon} alt={'Star'} />
//                 <Image src={startIcon} alt={'Star'} />
//                 <Image src={startIcon} alt={'Star'} />
//                 <Image src={startIcon} alt={'Star'} />
//             </div>
//             <p className="font-bold text-sm ">{props.review}</p>
//         </div>
//     )
// }