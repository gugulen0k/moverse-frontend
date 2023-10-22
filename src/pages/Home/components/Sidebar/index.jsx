import { MdMovieFilter as LogoIcon } from 'react-icons/md'
import {
  TbDeviceTv as TVShowsIcon,
  TbMovie as MoviesIcon,
  TbSunFilled as SunIcon,
  TbMoonFilled as MoonIcon,
  TbMasksTheater as MasksIcon,
  TbCarouselVertical as SeriesIcon,
  TbFriends as FriendsIcon,
  TbHeart as HeartIcon,
  TbCards as CollectionsIcon,
  TbUser as UserIcon,
  TbHome as HomeIcon,
  TbLogout as LogOutIcon,
  TbLifebuoy as SupportIcon
} from 'react-icons/tb'
import { Link } from 'react-router-dom'

import { useTheme } from '@/shared/ui/theme-provider'
import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
   DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup 
} from '@/shared/ui/dropdown-menu'
import { cn } from '@/shared/lib/utils'
import { isObjectEmpty } from '@/shared/lib/utils'
import { useUserStore } from '@/shared/lib/stores/user'
import { capitalize } from '@/shared/lib/utils'
import { useLogOut } from './lib/hooks/useLogOut'

export default function Sidebar({ className }) {
  const { theme, setTheme } = useTheme()
  const userInfo = useUserStore(state => state.userInfo)
  const { mutate } = useLogOut()

  const logOut = () => { mutate() }
  
  return (
    <div className={cn('flex flex-col gap-1 border-r', className) }>
      <div className='w-full h-full p-4 grid-sidebar'>
        <Button asChild variant='ghost' size='lg'>
          <Link to='/' className='mb-4 flex gap-2 text-start text-xl font-extrabold uppercase'>
            <LogoIcon size={30} />
            Moverse
          </Link>
        </Button>

        <div className='border-t-2 w-full py-2 flex flex-col gap-2'>
          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <HomeIcon size={20}/> Home
          </Button>
          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <MoviesIcon size={20}/> Movies
          </Button>
          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <TVShowsIcon size={20}/> TV Shows
          </Button>
          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <SeriesIcon size={20}/> Series
          </Button>
          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <MasksIcon size={20}/> Actors
          </Button>

          <Separator className='h-[2px]'/>

          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <CollectionsIcon size={20}/> Collections
          </Button>
          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <HeartIcon size={20}/> Favorite
          </Button>
          <Button variant='ghost'
                  size='lg'
                  className='p-4 text-base font-semibold w-full flex justify-start gap-2'>
            <FriendsIcon size={20}/> Friends
          </Button>
        </div>

        <div className='w-full flex justify-between'>
          {
            isObjectEmpty(userInfo) ?
              <Button asChild variant='outline'>
                <Link to='/authorization'>
                  Log In
                </Link>
              </Button>
            :
              <DropdownMenu>
                <DropdownMenuTrigger className='outline-none'>
                  <Avatar>
                    <AvatarImage src={ userInfo.image } alt='usericon'/>
                    <AvatarFallback>
                      <UserIcon size={25}/>
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{ capitalize(userInfo.username) }</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <UserIcon className='mr-2' />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <SupportIcon className='mr-2' />
                      Support
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={ logOut }>
                    <LogOutIcon className='mr-2' />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
          }

          <Button className=""
                  variant="ghost"
                  aria-label="Toggle Theme"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </div>
  )
}
