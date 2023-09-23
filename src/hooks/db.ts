import Dexie from "dexie";
import { Album } from "../components/AlbumCard";
import { Music } from "../components/MusicCard";

class MusicDB extends Dexie {
  music: Dexie.Table<Music, number>
  playlist: Dexie.Table<Album, number>

  constructor(){
    super("musics")

    this.version(1).stores({
      music: '++id,data',
      playlist: '++id,data'
    });
  }
}

class ResponseDB extends Dexie {
  music: Dexie.Table<Response, string> // url
  image: Dexie.Table<Response, string>
  other: Dexie.Table<Response, string>

  constructor(){
    super("files")

    this.version(1).stores({
      music: '',
      image: '',
      other: '',
    })
  }
}

const useDB = () => {
  const db = new MusicDB()
  return {
    music: db.music, 
    playlist: db.playlist
  }
}

const useRequest = () => {
  const db = new ResponseDB()
  return {
    music: db.music,
    image: db.image,
    other: db.other
  }
}