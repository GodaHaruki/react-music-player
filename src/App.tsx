import { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Music } from './components/MusicCard';
import { PlayingBar } from './components/PlayingBar';
import { Playlist as PlaylistProps} from './components/PlaylistCard';
import { useQue } from './hooks/que';
import { Musics } from './pages/Musics';
import { Playing } from './pages/Playing';
import { Playlist } from './pages/Playlist';

import './style.css';

export const App: FC<{}> = () => {
  const que = useQue()
  const [musics, setMusics] = useState<Music[]>([])
  const [playlists, setPlaylists] = useState<PlaylistProps[]>([])

  return (
    <BrowserRouter>
      <div className="flex flex-col h-full min-h-screen">
      <div className="flex-1">
        <Routes>
          <Route path="" element={<Musics musics={musics} />} />

          <Route path="playlist" element={<Playlist playlists={playlists} />} />

          <Route path="que"
          element={<></>} />

          <Route path="playing"
          element={
            <Playing {...que} />
          } />
        </Routes>
      </div>
      
      <div>
        <PlayingBar {...que} />
        <Menu />
      </div>
      </div>
    </BrowserRouter>
  );
};
