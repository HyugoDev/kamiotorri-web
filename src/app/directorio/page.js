

import getDirectory from "../datafetch/getdirectory"
import Image from "next/image"

// import { DataDirectory } from "../../../public/directory.js"

export default async function Directorio() {

  const DataDirectory = await getDirectory()



  return (
    <section className="mx-auto max-w-1xl px-4 py-16 sm:px-6 ">
      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {
          DataDirectory.directory.map((anime) => (
            <article key={anime.id} className="w-80 h-96 text-start overflow-hidden rounded-xl relative transform 
            hover:-translate-y-2 transition ease-in-out duration-700 shadow-lg hover:flex
            hover:shadow-2xl hover:h-auto bg-gradient-to-t from-black via-gray-900 to-transparent">
              <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
              <div className="relative cursor-pointer group z-10 m-3 h-max  ">
                {/* <div class="h-32"></div> */}
                <div className="space-y-6">
                  <div className="flex flex-col space-y-2 m-2 mt-36">

                    <h3 className="text-2xl font-bold ">{anime.title}</h3>

                    {/* generos */}
                    <div className="text-xs text-gray-400 grid grid-cols-1 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {
                        anime.genres.map((generos) => (
                          <span key={generos}>
                            {generos}
                          </span>

                        ))
                      }
                    </div>

                  </div>

                  {/* Info */}
                  <div className="flex flex-row justify-around datos">
                    <div className="flex flex-col datos_col">
                      <div className="text-sm text-gray-400">Popularity:</div>
                      <div className="popularity">{anime.score}/10</div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="text-sm text-gray-400">Tipo:</div>
                      <div className="release">{anime.type}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col overview">
                    <div className="text-xs text-gray-400 mb-2">Description:</div>
                    <p className=" text-xs overflow-y-hidden text-overflow: ellipsis; ">
                      {anime.description}
                    </p>
                  </div>
                </div>
                {/* <div data-countdown="2021-09-15" class="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white">00 Days 00:00:00</div> */}

              </div>
              <Image
                src={anime.poster}
                alt={anime.title}
                fill
                className="absolute inset-0  w-full  object-cover"
              />
            </article>
          ))
        }
      </div>
    </section>
  )
}