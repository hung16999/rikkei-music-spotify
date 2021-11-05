import { Tooltip } from "@mui/material"
import { useContext } from "react"
import { GlobalContext } from "../MusicApp"

function Search() {
  const { query, setQuery } = useContext(GlobalContext)

  function handleChangeQuery(event) {
    setQuery(event.target.value)
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <Tooltip
        title="typing to search artist (ex: tuấn hưng)"
        placement="bottom-end"
        arrow
        open={query === ""}
        className="tool-tip"
      >
        <input type="text" value={query} onChange={handleChangeQuery} />
      </Tooltip>
    </form>
  )
}

export default Search
