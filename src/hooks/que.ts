import { useEffect, useState } from "react";
import { Music } from "../components/MusicCard";
import { useMusic, UseMusicMethods } from "./music";

const useAudio = (url: string) => {

  const [audio] = useState<HTMLAudioElement>(new Audio(url));
  const [src, setSrc] = useState<string>(url)

  const [, _forceUpdate] = useState<boolean>(false);
  const forceUpdate = () => _forceUpdate(prevState => !prevState);

  useEffect(() => {
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);
    audio.addEventListener("ended", forceUpdate);
    audio.addEventListener("timeupdate", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
      audio.removeEventListener("ended", forceUpdate);
      audio.removeEventListener("timeupdate", forceUpdate);
    };
  }, []);

  const play = () => audio.play();
  const pause = () => audio.pause();
  const jump: (number) => void
  = (value:number) => (audio.currentTime += value);

  const set = (s: string) => {
    setSrc(s)
    forceUpdate()
  }

  return {
    isPlay: !audio.paused,
    time: audio.currentTime,
    play, pause, jump, set, 
  };
};

export const useQue = (defaultMusics: Music[] = [], defaultOption:{} = {}) => {
  const audio = useAudio(undefined)

  const [musics, setMusics] = useState(defaultMusics)
  const [history, setHistory] = useState<Music[]>([])
  const [playing, _setPlaying] = useState<UseMusicMethods | undefined>(undefined)

  const setPlaying = (m: Music) => {
    playing.free()
    const mu = useMusic(m)
    _setPlaying(mu)
    audio.set(mu.soundUrl)
  }

  const [option, setOption] = useState(defaultOption)


  const next = () => {
    setHistory([playing, ...history])
    setPlaying(musics[0])
    setMusics(musics.slice(1))
  }

  const back = () => {
    const m = playing
    setPlaying(history[0])
    setMusics([m, ...musics])
  }
  
  const add = (m: Music) => {
    setMusics([...musics, m])
  }

  const play_with = (m: Music) => {
    setPlaying(m)
    audio.play()
  }

  return {
    isPlay: audio.isPlay,
    time: audio.time,
    play: audio.play,
    pause: audio.pause,
    jump: audio.jump,
    next, back, add, playing, musics, history, play_with
  }
}