import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import userServices from '@/shared/lib/api/user'
import { USER, SIGNUP } from '@/shared/lib/constants'
import { useToast } from '@/shared/ui/toaster/use-toast'
import { useUserStore } from '@/shared/lib/stores/user'

export const useSignUp = () => {
  const { toast } = useToast()
  const setUserInfo = useUserStore(state => state.setUserInfo)
  const navigate = useNavigate()

  return useMutation({
    mutationKey: [USER, SIGNUP],
    mutationFn: ({ email, username, password, confirmPassword }) => {
      return userServices.signUp({
        email: email,
        username: username,
        password: password,
        password_confirmation: confirmPassword
      })
    },
    onSuccess: (data) => {
      setUserInfo(data.data.data)

      toast({
        variant: 'success',
        description: 'Account created successfully!'
      })

      navigate('/')
    },
    onError: (error) => {
      const errors = error.response.data.errors.full_messages
      const errorMsg = errors.length <= 1 ? errors[0] : errors.map((error) => `- ${error}`).join('\n')

      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMsg || 'Failed to create an account!'
      })
    }
  })
}
