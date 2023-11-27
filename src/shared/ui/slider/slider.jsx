import { useState } from 'react'

import { cn } from '@/shared/lib/utils'
import SliderCard from '@/shared/ui/slider/slider-card'
import { AspectRatio } from '@/shared/ui/aspect-ratio'

export default function Slider({ className, data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderData, setSliderData] = useState(data[0])

  const selectSlide = (index) => {
    setCurrentIndex(index)
    setSliderData(data[index])
  }

  return (
    <div className={cn('relative w-11/12 md:w-4/5 lg:w-3/5 flex gap-4 flex-col justify-center p-4', className)}>
      <SliderCard data={sliderData || data[0]}/>

      <div className='dark:bg-zinc-700/50 rounded-xl w-max p-2 m-auto overflow-hidden flex gap-2'>
        {data?.map((item, index) => (
          <div key={index} 
              onClick={() => selectSlide(index)}
              className={`${currentIndex === index ? 'grayscale-0' : 'grayscale'} w-32 transition-all ease-in-out duration-300 hover:grayscale-0`}>
            <AspectRatio ratio={ 16/9 }>
              <img src={item.backdrop} className='border-4 border-red-500 rounded-md cursor-pointer'/>
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
}
