import { Music } from "./MusicCard";

export interface Album {
  name: string,
  musics: Music[],

  imgUrl?: string
}

export const AlbumCard: React.FC<{album: Album}>
= ({album}) => {
  return (
    <>
    albumcard
    </>
  )
}