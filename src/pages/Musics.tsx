import { Music, MusicCard } from "../components/MusicCard"
import { Grid } from "../design/Grid"

const handleFileInput = (fl: FileList) => {}

export const Musics: React.FC<{musics: Music[]}>
= ({musics}) => {
  return (
    <Grid>
      <div className="col-span-9">
        All music
      </div>
      <div className="col-span-3">
        <input type="file" className="" onChange={(evt) => handleFileInput(evt.target.files)}/>
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