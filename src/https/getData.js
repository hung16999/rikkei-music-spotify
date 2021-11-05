import axios from "axios"

const token =
  "BQBrOTu9iocl27xXWVAW4_7HHCLT3NAjYVqTwKxJco4fVinpBRPjHMPoAeh_mCCjoIn4peEZ0iP5MIkzQ4EXbG60sm0-3QGQS4fXI8ORWaG99iWP-7X8LykU9d9x5HZRQia9lGMeldispllf23dTxz6C-lmqAQ8wFL_q0ts"

export const api = axios.create({
  baseURL: "https://api.spotify.com",
  headers: { Authorization: `Bearer ${token}` },
})
