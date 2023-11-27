import { useMutation, useQueryClient } from '@tanstack/react-query'

import userServices from '@/shared/lib/api/user'
import { useUserStore } from '@/shared/lib/stores/user'
<<<<<<< Updated upstream
import { USER_LOGIN, USER_SIGNUP } from '@/shared/lib/constants'
import { useToast } from '@/shared/ui/toaster/use-toast'
=======
import { USER, LOGIN, SIGNUP } from '@/shared/lib/constants'
>>>>>>> Stashed changes

export const useLogOut = () => {
  const { toast } = useToast()
  const clearUserInfo = useUserStore(state => state.clearUserInfo)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      return userServices.logOut()
    },
    onSuccess: () => {
      clearUserInfo()

      queryClient.invalidateQueries({ queryKey: [USER, LOGIN] })
      queryClient.invalidateQueries({ queryKey: [USER, SIGNUP] })
    },
    onError: (error) => {
      const errors = error.response.data.errors
      const errorMsg = errors.length <= 1 ? errors[0] : errors.map((error) => `- ${error}`).join('\n')

      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMsg || 'Failed to log out!'
      })
    }
  })
}
