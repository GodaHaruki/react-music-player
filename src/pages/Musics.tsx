import { Music, MusicCard } from "../components/MusicCard"

export const Musics: React.FC<{musics: Music[]}>
= ({musics}) => {
  return (
    <>
    All Musics
    {
    musics.map(m => 
    <MusicCard music={m} />
    )
    }
    </>
  )
}