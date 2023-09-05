
import { Suspense } from 'react'
import LastEpisodes from './components/anime/lastepisodes'
import Loading from './loading'




export default async function Home() {




  return (
    <>
      <Suspense fallback={<Loading />}>
        <LastEpisodes />
      </Suspense>



      {/* <div className="w-full h-screen  flex justify-center items-center	">
        <span className="content-center text-7xl">🛠️En Contrución🛠️</span>
      </div> */}
    </>
  )
}
