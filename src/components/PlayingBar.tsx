import { Link } from "react-router-dom"
import { Grid } from "../design/Grid"
import { Play, Stop } from "./Icon"
import { Music, MusicCard } from "./MusicCard"

export const PlayingBar: React.FC<{
  play: () => any,
  pause: () => any,
  isPlay: boolean,
  playing: Music|undefined
}>
= (que) => {
  return (
    <Grid>
      <Link
      to="playing"
      className="col-span-10">
        {
          que.playing ?
          <MusicCard music={que.playing} />
          :
          <MusicCard music={{
            name: "not selected",
            url: ""   
          }} />
        }
      </Link>
      <div className="col-span-2">
        {
          que.isPlay ?
          <button
          className="w-full" 
          onClick={() => que.pause()}>
            <Stop />
          </button>
          :
          <button 
          className="w-full"
          onClick={() => que.play()}>
            <Play />
          </button>
        }
      </div>
    </Grid>
  )
}