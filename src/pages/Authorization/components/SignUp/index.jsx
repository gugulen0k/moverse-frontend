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
import {ImFacebook, ImGoogle} from 'react-icons/im'
import { BiLoaderAlt as LoaderIcon } from 'react-icons/bi'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { signUpSchema } from '../../lib/schemas/signUp'
import { useSignUp } from '../../lib/hooks/useSignUp'

export default function SignUp() {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  })

  const { mutate, isLoading } = useSignUp()
  const onSubmit = (user) => { mutate(user) }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email and password below to create your new account
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <ImFacebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
          <Button variant="outline">
            <ImGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Form {...form}>
          <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control}
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
            <FormField control={form.control}
                       name="username"
                       render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input id="username" 
                           type="text" 
                           placeholder="supadupaname"
                           {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control}
                       name="password"
                       render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input id="password" 
                           type="password" 
                           {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control}
                       name="confirmPassword"
                       render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input id="confirmPassword" 
                           type="password" 
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
