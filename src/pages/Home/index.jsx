import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";

export default function Home () {
  return (
    <>
      <p>Home page</p>
      <Button asChild variant='outline' className='text-lg'>
        <Link to='/authorization'>Log In</Link>
      </Button>
    </>
  )
}
