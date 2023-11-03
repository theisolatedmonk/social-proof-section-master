import Image from 'next/image'
import Ratings from './components/Ratings'
import ReviewCard from './components/ReviewCard'

export default function Home() {
  return (
    <div className="text-xl font-League_Spartan flex flex-col justify-center items-center px-5 py-14 gap-4">
      <div className="text-center text-4xl font-bold text-VeryDarkMagenta px-16">10,000+ ofour users love our products.</div>
      <p className="text-center text-DarkGrayishMagenta">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>

      <div className="flex flex-col gap-4 w-full">

        <Ratings review={'Rated 5 Stars in Reviews'} />
        <Ratings review={'Rated 5 Stars in Report Guru'} />
        <Ratings review={'Rated 5 Stars in BestTech'} />
      </div>

      <ReviewCard />
    </div>
  )
}
