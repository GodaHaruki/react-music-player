import { Music, MusicCard } from "../components/MusicCard"

export const Que: React.FC<{
  play: () => any,
  play_with: (m: Music) => any,
  pause: () => any,

  isPlay: boolean,
  playing: Music,
  history: Music[],
  musics: Music[],
}>
= (que) => {
  return (
    <>
    {
      que.history
      .reverse()
      .map(m => 
        <button onClick={() => que.play_with(m)}>
          <MusicCard music={m} />
        </button>
        )
    }
    <MusicCard music={que.playing} />
    </>
  )
}