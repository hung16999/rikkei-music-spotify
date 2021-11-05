import { useContext, useState } from "react"
import ReactAudioPlayer from "react-audio-player"
import { GlobalContext } from "../MusicApp"

function Songs() {
  const { songs } = useContext(GlobalContext)
  const [currentSong, setCurrentSong] = useState(null)

  function handleNextSong(oldSong) {
    const index = songs.findIndex((song) => song.preview_url === oldSong)
    if (index >= 0) {
      if (index === songs.length - 1) {
        setCurrentSong(songs[0].preview_url)
      } else {
        const nextSong = songs[index + 1]
        setCurrentSong(nextSong.preview_url)
      }
    }
  }

  return (
    <div className="songs-list">
      {songs.map((song) => (
        <div
          key={song.id}
          className="song-item"
          onClick={() => setCurrentSong(song.preview_url)}
        >
          {song.album.images ? (
            <img src={song.album.images[0].url} alt="" />
          ) : (
            <img
              src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
              alt=""
            />
          )}

          {currentSong === song.preview_url ? (
            <ReactAudioPlayer
              src={currentSong}
              autoPlay
              controls
              onEnded={() => handleNextSong(song.preview_url)}
            />
          ) : (
            <p>{song.name}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Songs
