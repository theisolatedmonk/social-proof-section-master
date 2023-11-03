import React from 'react'
import Image from 'next/image'
import colton from '@/public/images/image-colton.jpg'
import irene from '@/public/images/image-irene.jpg'
import anne from '@/public/images/image-anne.jpg'
import { it } from 'node:test'

const profileData = [
    {
        name: 'Colton Smith',
        src: colton,
        buyerType: 'Verified  Buyer',
        comment: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
        className: 'sm:mt-2'
    },
    {
        name: 'Irene Roberts',
        src: irene,
        buyerType: 'Verified  Buyer',
        comment: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
        className: 'sm:mt-8'
    },
    {
        name: 'Anne Wallace ',
        src: anne,
        buyerType: 'Verified  Buyer',
        comment: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
        className: 'sm:mt-12'
    }

]


export default function ReviewCard() {
    return (
        <div className='flex flex-col  gap-4 sm:flex-row    sm:h-[400px]  sm:justify-between '>
            {profileData.map((item) => (
                <div className={`flex flex-col bg-VeryDarkMagenta p-8 text-White rounded-md sm:h-[240px] text-sm  ${item.className}`}>

                    <div className="flex items-center gap-8  
                    ">
                        <Image src={item.src} alt={item.name} className=' rounded-full p-2' />
                        <div className="flex flex-col">
                            <p className="">{item.name}</p>
                            <p className="text-SoftPink">{item.buyerType}</p>
                        </div>
                    </div>

                    <p className="">{item.comment}</p>
                </div>
            ))}

        </div>
    )
}