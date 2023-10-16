import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useAuthenticateStore = create(
  devtools(
    persist(
      (set) => ({
        userInfo: {},
        setUserInfo: (user) => set({ userInfo: user }),
        clearUserInfo: () => set({ userInfo: {} }, true)
      }),
      { name: "user-info" }
    )
  )
)
