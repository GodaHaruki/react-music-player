import { useState } from "react";
import { Music } from "../components/MusicCard";
import { MusicDB } from "./db";

export interface UseMusicMethods {
  name: string
  soundUrl: string
  imgUrl: string
  artist?: string
  free: () => void
}

export const useMusic = (music: Music): UseMusicMethods => {
  const {sound, img} = new MusicDB()

  const [soundUrl, setSoundUrl] = useState<string>("")

  const [imgUrl, setImgUrl] = useState<string>("")

  sound.get(music.name).then(s => setSoundUrl(URL.createObjectURL(s)))

  img.get(music.name).then(i => setImgUrl(URL.createObjectURL(i)))

  const free = () => {
    soundUrl ? 
    URL.revokeObjectURL(soundUrl)
    : null
    imgUrl ?
    URL.revokeObjectURL(imgUrl)
    : null

    setSoundUrl("")
    setImgUrl("")
  }

  return {
    name: music.name,
    artist: music.artist,
    soundUrl, imgUrl, free 
  }
}

export const getSoundUrl = async (music: Music) => {
  const {sound} = new MusicDB()
  const s = await sound.get(music.name)

  const url = URL.createObjectURL(s)
  const free = () => {
    URL.revokeObjectURL(url)
  }

  return {
    url, free
  }
}