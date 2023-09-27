import { Music, MusicCard } from "../components/MusicCard"
import { Grid } from "../design/Grid"
import { MusicDB } from "../hooks/db"


export const Musics: React.FC<{musics: Music[], setMusics: React.Dispatch<React.SetStateAction<Music[]>>}>
= ({musics, setMusics}) => {

const handleFileInput = (fl: FileList) => {
  const db = new MusicDB()

  const files = [...new Array(fl.length)].map((_, i) => fl.item(i))

  files.forEach(f => db.putMusic(f, f.name))

  db.music.toArray().then(m => setMusics(m))
}

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