import Dexie from "dexie";
import { Album } from "../components/AlbumCard";
import { Music } from "../components/MusicCard";

export class MusicDB extends Dexie {
  music!: Dexie.Table<Music, string>
  playlist!: Dexie.Table<Album, string>
  sound!: Dexie.Table<Blob, string>
  img!: Dexie.Table<Blob, string>

  constructor(){
    super("musics")

    this.version(1).stores({
      music: 'name,data',
      playlist: 'name,data',
      sound: 'name,blob',
      img: 'name,blob',
    });
  }

  putMusic(music: Music, sound: Blob, img: Blob){
    this.music.put(music, music.name)
    this.sound.put(sound, music.name)
    this.img.put(img, music.name)
  }

  putMusics(musics: Music[], sounds: Blob[], imgs: Blob[]){
    const keys = musics.map(m => m.name)

    this.music.bulkPut(musics, keys)
    this.sound.bulkPut(sounds, keys)
    this.img.bulkPut(imgs, keys)
  }

  
}