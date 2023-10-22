import { MdMovieFilter as MovieIcon } from 'react-icons/md'

const SuspenseLoader = () => {
  return (
    <div className='grid place-items-center transition-all ease-in-out w-full h-screen'>
      <MovieIcon size={100} className='animate-bounce'/>
    </div>
  )
}

export { SuspenseLoader }
