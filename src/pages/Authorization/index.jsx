import { Link } from 'react-router-dom'
import { ImArrowLeft2 as ArrowLeftIcon } from 'react-icons/im'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/shared/ui/tabs'
import { Button } from '@/shared/ui/button'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

export default function Authorization() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-4/5 flex justify-center items-start">
        <Button className="absolute top-3 left-3"
                variant="ghost"
                size="icon">
          <Link to='/'>
            <ArrowLeftIcon className="text-2xl"/>
          </Link>
        </Button>

        <div className="">
          <Tabs defaultValue="logIn" className="w-[30rem]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="logIn">Log In</TabsTrigger>
              <TabsTrigger value="signUp">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="logIn">
              <LogIn/>
            </TabsContent>

            <TabsContent value="signUp">
              <SignUp/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
