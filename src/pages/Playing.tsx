import { Music, MusicCardBig } from "../components/MusicCard";

export const Playing: React.FC<{playing: Music|undefined}>
= ({playing}) => {
  const music: Music = playing ? playing : {
    name: "not selected",
    url: "",
    artist: "none",
  }
  return (
    <>
    <MusicCardBig music={music} />
    </>
  )
}