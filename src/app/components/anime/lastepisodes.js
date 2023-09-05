
import Image from "next/image"
import getLastEpisodes from "@/app/datafetch/getlastepisodes"
import Loading from "@/app/loading"

export default async function LastEpisodes() {
  const data = await getLastEpisodes()

  if (data == null) {
    return <Loading />
  }

  return (
    <section className="mx-auto max-w-1xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-xl mb-2">Nuevos Episodios</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          data.episodes.map((anime) => (
            <a key={anime.id} href={anime.id} className="group shadow bg-orange-100 borde rounded-lg">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={`data:image/png;base64,${anime.image}`}
                  alt={anime.title}
                  width={60}
                  height={70}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="ml-1 text-sm overflow-hidden truncate text-center">{anime.title}</h3>
              <p className=" text-lg font-medium text-center">{anime.episode}</p>
            </a>
          ))
        }
      </div>
    </section>
  )
}