import { useMovieNowPlaying } from './lib/hooks/useMovieNowPlaying'
import Slider from '@/shared/ui/slider/slider'
import { Skeleton } from '@/shared/ui/skeleton'
import { AspectRatio } from '@/shared/ui/aspect-ratio'

export default function MovieSlider() {
  const { data, isLoading } = useMovieNowPlaying()
  const movies = data?.data?.data

  return (
    <div className='flex justify-center'>
      {
        isLoading ? 
          <div className='transition-all duration-500 relative w-11/12 flex gap-4 flex-col justify-center p-4'>
            <div className='w-full rounded-2xl overflow-hidden shadow-md'>
              <AspectRatio ratio={16 / 9}>
                <Skeleton className='object-cover w-full h-full'/>
              </AspectRatio>
            </div>

            <div className='w-11/12 p-2 m-auto overflow-hidden flex gap-2'>
              <Skeleton className='h-24 w-full rounded-xl'/>
            </div>
          </div>
        :
          <Slider data={ movies }/>
      }
    </div>
  )
}
