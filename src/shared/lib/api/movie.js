import axios from "axios"

class MovieServices {
  baseURL   = `${import.meta.env.VITE_BASE_URL}/the_movie_db/movie`
  baseAxios = axios.create({ withCredentials: true })

  async popular() {
    return this.baseAxios.get(`${this.baseURL}/popular`)
  }

  async topRated() {
    return this.baseAxios.get(`${this.baseURL}/top_rated`)
  }

  async upcoming() {
    return this.baseAxios.get(`${this.baseURL}/upcoming`)
  }

  async nowPlaying() {
    console.log("fetching")
    return this.baseAxios.get(`${this.baseURL}/now_playing`)
  }
}

export default new MovieServices()
