import { Music } from "./MusicCard"

export interface Playlist {
  name: string,
  musics: Music[]

  imgUrl?: string
}

export const PlaylistCard: React.FC<{playlist: Playlist}>
= ({playlist}) => {
  return (
    <>
    playlistcard
    </>
  )
}