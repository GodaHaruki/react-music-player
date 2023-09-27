import { Music, MusicCard } from "../components/MusicCard"
import { Grid } from "../design/Grid"

export const Musics: React.FC<{musics: Music[]}>
= ({musics}) => {
  return (
    <Grid>
      <div className="col-span-9">
        All music
      </div>
      <div className="col-span-3">
        <input type="file" className="" />
      </div>
    <div className="col-span-full">
    {
    musics.map(m => 
    <MusicCard music={m} />
    )
    }
    </div>
    </Grid>
  )
}