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
    <div className="relative">
      <img className="
      w-1/6 aspect-square
      rounded-lg
      "
      src={imgUrl} />

      <div className="absolute m-2">
        <div className="bg-black rounded-md">
          {music.name}
        </div>
        <div className="bg-black rounded-md">
          {music.artist}
        </div>
      </div>
    </div>
  )
}