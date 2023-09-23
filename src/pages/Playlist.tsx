import { Playlist as PlaylistProps, PlaylistCard } from "../components/PlaylistCard";

export const Playlist: React.FC<{playlists: PlaylistProps[]}>
= ({playlists}) => {
  return (
    <>
    {
      playlists
      .map(p => 
        <PlaylistCard playlist={p} />
        )
    }
    </>
  )
}