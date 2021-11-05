import { createContext, useEffect, useState } from "react"
import { api } from "../https/getData"
import Artists from "./musicContainer/Artists"
import Search from "./musicContainer/Search"
import Songs from "./musicContainer/Songs"

export const GlobalContext = createContext()

function MusicApp() {
  const [query, setQuery] = useState("")
  const [artists, setArtists] = useState([])
  const [songs, setSongs] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    if (query) {
      const timeout = setTimeout(() => {
        api
          .get(
            `/v1/search?q=${query}&type=track%2Cartist&market=vn&limit=10&offset=0`
          )
          .then((response) => {
            if (response.data.artists.items.length !== 0) {
              setArtists(response.data.artists.items)
              setError(false)
            } else {
              setError(true)
              setArtists([])
              setSongs([])
            }
          })
      }, 500)

      return () => clearTimeout(timeout)
    } else {
      setError(false)
      setArtists([])
      setSongs([])
    }
  }, [query])

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        artists,
        setArtists,
        songs,
        setSongs,
        error,
      }}
    >
      <Search />
      <div className="wrap-components">
        <Artists />
        <Songs />
      </div>
    </GlobalContext.Provider>
  )
}

export default MusicApp
