import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import userServices from '../services/user'
import { useAuthenticateStore } from '../store/authorization'
import { useToast } from '@/shared/ui/toaster/use-toast'
import { USER_SIGNUP } from '../constants'


export const useSignUp = () => {
  const { toast } = useToast()
  const { setUserInfo } = useAuthenticateStore()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: [USER_SIGNUP],
    mutationFn: ({ email, username, password, confirmPassword }) => {
      return userServices.signUp({
        email: email,
        username: username,
        password: password,
        password_confirmation: confirmPassword
      })
    },
    onSuccess: (data) => {
      setUserInfo(data.data)

      toast({
        variant: 'success',
        description: 'Account created successfully!'
      })

      navigate('/')
    },
    onError: (error) => {
      const errors = error.response.data.errors.full_messages
      const errorMsg = errors.map((error) => `- ${error}`).join('\n')

      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMsg || 'Failed to create an account!'
      })
    }
  })
}
