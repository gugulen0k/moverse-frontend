import {useTheme} from "@/components/theme-provider.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

import {BsMoonFill, BsSunFill} from "react-icons/bs";

import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"

export default function Authorization() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="flex h-screen justify-center items-center">
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
    </>
  )
}
