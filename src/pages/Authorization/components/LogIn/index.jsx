import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { BiLoaderAlt as LoaderIcon } from 'react-icons/bi'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { logInSchema } from '../../lib/schemas/logIn'
import { useLogIn } from '../../lib/hooks/useLogIn'

export default function LogIn() {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(logInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { mutate, isLoading } = useLogIn()
  const onSubmit = (data) => { mutate(data) }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>
          Log in into existing account using email
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
            <FormField control={ form.control }
                       name="email"
                       render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input id="email" 
                           type="email" 
                           placeholder="user@example.com"
                           {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={ form.control }
                       name="password"
                       render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input id="password" 
                           type="password" 
                           placeholder="••••••••"
                           {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={ isLoading } className='w-full mt-4 flex gap-2'>
              <LoaderIcon className={`${ isLoading ? 'block animate-spin' : 'hidden' }`} />
              Create account
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
