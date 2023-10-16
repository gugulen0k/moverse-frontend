import axios from "axios"

class UserServices {
  baseURL   = import.meta.env.VITE_AUTHORIZATION_URL
  baseAxios = axios.create({ withCredentials: true })

  async signUp(credentials) {
    return this.baseAxios.post(this.baseURL, credentials)
  }

  async logIn(credentials) {
    return this.baseAxios.post(`${this.baseURL}/sign_in`, credentials)
  }
}

export default new UserServices()
