import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        userInfo: {},
        setUserInfo: (user) => set({ userInfo: user }),
        clearUserInfo: () => set({ userInfo: {} })
      }),
      { name: "user-info" }
    )
  )
)
