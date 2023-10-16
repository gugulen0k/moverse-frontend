import { useTheme } from "@/shared/ui/theme-provider"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/tabs"
import { Button } from "@/shared/ui/button"

import {BsMoonFill, BsSunFill} from "react-icons/bs"
import { ImArrowLeft2 as ArrowLeftIcon } from "react-icons/im"

import LogIn from "./LogIn"
import SignUp from "./SignUp"
import { Link } from "react-router-dom"

export default function Authorization() {
  const { theme, setTheme } = useTheme()

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

          <Button className="absolute top-3 right-3"
                  variant="ghost"
                  aria-label="Toggle Theme"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <BsSunFill className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <BsMoonFill className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </div>
  )
}
