import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import userServices from '@/shared/lib/api/user'
import { USER_LOGIN } from '@/shared/lib/constants'
import { useToast } from '@/shared/ui/toaster/use-toast'
import { useUserStore } from '@/shared/lib/stores/user'

export const useLogIn = () => {
  const { toast } = useToast()
  const setUserInfo = useUserStore(state => state.setUserInfo)
  const navigate = useNavigate()
  
  return useMutation({
    mutationKey: [ USER_LOGIN ],
    mutationFn: (credentials) => { 
      return userServices.logIn(credentials)
    },
    onSuccess: (data) => {
      setUserInfo(data.data.data)

      navigate('/')
    },
    onError: (error) => {
      const errors = error.response.data.errors
      const errorMsg = errors.length <= 1 ? errors[0] : errors.map((error) => `- ${error}`).join('\n')

      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMsg || 'Something went wrong!'
      })
    }
  })
}
