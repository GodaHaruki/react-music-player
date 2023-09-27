import { Music } from "./MusicCard";

export interface Album {
  name: string,
  musics: Music[],
}

export const AlbumCard: React.FC<{album: Album}>
= ({album}) => {
  return (
    <>
    albumcard
    </>
  )
}