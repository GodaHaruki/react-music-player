import { MusicDB } from "../hooks/db"
import { useMusic } from "../hooks/music"

export interface Music {
  name: string  
  artist?: string
}

export const MusicCard: React.FC<{music: Music}>
= ({music}) => {

  const {name, soundUrl, imgUrl} = useMusic(music)

  return (
    <div className="flex">
      <img className="
      w-1/6 aspect-square
      rounded-lg
      "
      src={imgUrl} />

      <div className="ml-3">
        <div className="col-span-10 text-lg">
        {name}
        </div>

        <div className="col-span-10">
        artist
        </div>
      </div>
    </div>
  )
}

export const MusicCardBig: React.FC<{music: Music}>
= ({music}) => {
  const {name, soundUrl, imgUrl} = useMusic(music)
  
  return (
    <div className="relative w-full">
      <img className="
      w-full aspect-square
      rounded-lg
      "
      src={imgUrl} />

      <div className="absolute bottom-0 left-0 m-2">
        <div className="bg-black rounded-md p-1">
          {music.name}
        </div>
        <div className="bg-black rounded-md p-1 mt-2">
          {music.artist}
        </div>
      </div>
    </div>
  )
}