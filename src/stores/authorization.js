import { create } from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"

const baseURL = import.meta.env.REACT_APP_AUTHORIZATION_URL

// const signUpUser = (user) => {
//   axios.post(baseURL, {
//     email: user.email,
//     password: user.password,
//     password_confirmation: user.confirmPassword,
//     username: user.username,
//     image: user.image
//   })
//   .then(response => response.data)
//   .catch(error => error)
// }

// const logInUser = (user) => {

// }

export const useAuthenticateStore = create(
  persist(
    (set) => ({
      userInfo: {},
      error: {},
      loading: false,
      signUp: async (userInfo) => {
        const requestBody = {
          email: userInfo.email,
          username: userInfo.username,
          password: userInfo.password,
          password_confirmation: userInfo.confirmPassword
        }

        await axios.post(`http://localhost:3000/auth`, requestBody)
          .then(response => {
            set({ userInfo: response })
            set({ loading: true })
          })
          .catch(error => {
            set({ userInfo: error.errors })
          })
          .finally(() => {
            set({ loading: false })
          })
      }
    }),
    { name: "userInfo" }
  )
)
