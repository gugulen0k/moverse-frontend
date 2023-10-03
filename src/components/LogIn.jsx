import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { logInSchema } from "../schemas/logIn"

export default function LogIn() {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(logInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

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

            <Button type="submit" className="w-full mt-4">
              Log In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
