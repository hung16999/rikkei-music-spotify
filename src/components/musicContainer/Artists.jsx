import { useContext } from "react"
import { api } from "../../https/getData"
import { GlobalContext } from "../MusicApp"

function Artists() {
  const { artists, setSongs, query, error } = useContext(GlobalContext)

  function getSongs(artistId) {
    api
      .get(`/v1/artists/${artistId}/top-tracks?market=vn`)
      .then((response) => setSongs(response.data.tracks))
  }

  return (
    <div className="artists-list">
      {error ? (
        <h1 className="text-danger">No data for query "{query}"</h1>
      ) : null}
      {artists.map((artist) => (
        <div
          className="artist-item"
          key={artist.id}
          onClick={() => getSongs(artist.id)}
        >
          {artist.images[0] ? (
            <img src={artist.images[0].url} alt="" />
          ) : (
            <img
              src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
              alt=""
            />
          )}
          <b>{artist.name}</b>
          <p>
            genres:{" "}
            {artist.genres.map((gen) => (
              <span key={gen}>{gen}, </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Artists
