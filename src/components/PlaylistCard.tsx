import { Music } from "./MusicCard"

export interface Playlist {
  name: string,
  musics: Music[]
}

export const PlaylistCard: React.FC<{playlist: Playlist}>
= ({playlist}) => {
  return (
    <>
    playlistcard
    </>
  )
}