import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        userInfo: {},
<<<<<<< Updated upstream
        setUserInfo: (user) => set({ userInfo: user }),
        clearUserInfo: () => set({ userInfo: {} })
=======
        isUserLoggedIn: false,
        setUserInfo: (user) => set({ 
          userInfo: user,
          isUserLoggedIn: true
        }),
        clearUserInfo: () => set({ 
          userInfo: {},
          isUserLoggedIn: false
        })
>>>>>>> Stashed changes
      }),
      { name: "user-info" }
    )
  )
)
