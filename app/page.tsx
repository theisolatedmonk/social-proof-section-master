import Image from 'next/image'
import Ratings from './components/Ratings'
import ReviewCard from './components/ReviewCard'
import bgTopMobile from '@/public/images/bg-pattern-top-mobile.svg'
import bgTopDesktop from '@/public/images/bg-pattern-top-desktop.svg'
import bgButtomMobile from '@/public/images/bg-pattern-bottom-mobile.svg'
import bgButtomDesktop from '@/public/images/bg-pattern-bottom-desktop.svg'

export default function Home() {

  const reviews = [{
    rating: 5,
    reviewCategory: 'Reviews',
    className: 'sm:mr-36'
  },
  {
    rating: 3,
    reviewCategory: 'Report Guru',
    className: 'sm:mr-24 sm:ml-12'
  },
  {
    rating: 4,
    reviewCategory: 'BestTech',
    className: 'sm:mr-12 sm:ml-24'
  }
  ]

  return (
    <div className="text-xl font-League_Spartan flex flex-col sm:justify-center items-center p-5 py-20  gap-8 sm:p-20 relative">

      <Image src={bgTopMobile} alt={''} width={100} height={100} className='absolute top-0 left-0 z-20  w-full sm:hidden' />
      <Image src={bgButtomMobile} alt={''} width={100} height={100} className='absolute bottom-0 left-0 z-20  w-full sm:hidden ' />
      <Image src={bgTopDesktop} alt={''} width={100} height={100} className='absolute top-0 left-0 z-20  w-[35%] h-[40%]  sm:flex hidden' />
      <Image src={bgButtomDesktop} alt={''} width={100} height={100} className='absolute bottom-0 right-0 z-20  w-[90%] sm:flex hidden h-[80%] ' />
      <div className="flex flex-col sm:flex-row sm:justify-between gap-8 w-full sm:items-center " >
        <div className="flex flex-col gap-8 mt-10">
          <div className="text-center text-4xl font-bold text-VeryDarkMagenta px-16 sm:pr-32 sm:px-0 p sm:text-start">10,000+ of our users love our products.</div>
          <p className="text-center text-DarkGrayishMagenta sm:text-start sm:pr-3 text-lg sm:px-0">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>

        </div>
        <div className="flex flex-col gap-4 w-full mr-28">

          <Ratings review={'Rated 5 Stars in Reviews'} className={'sm:mr-36'} />
          <Ratings review={'Rated 5 Stars in Report Guru'} className={'sm:mr-24 sm:ml-12'} />
          <Ratings review={'Rated 5 Stars in BestTech'} className={'sm:mr-12 sm:ml-24'} />
        </div>
      </div>

      <ReviewCard />
    </div>
  )
}
1