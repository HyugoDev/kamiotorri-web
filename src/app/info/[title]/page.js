

import Info from "@/app/components/anime/infoanime/info"
import getEpisodes from "@/app/datafetch/getEpisodes"
import getInfoAnime from "@/app/datafetch/getinfoanime"

export default async function InfoAnime({ params }) {

  const data = await getInfoAnime(params.title)
  const episodios = await getEpisodes(params.title)
  return (
    <Info dataAnime={data} episodes={episodios}>

    </Info>
  )
}