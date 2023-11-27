import { AspectRatio } from '@/shared/ui/aspect-ratio'
import { cn } from '../../lib/utils'

export default function SliderCard({ className, data={} }) {
  const {
    title,
    overview,
    release_date,
    rating,
    backdrop
  } = data

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-md">
      <AspectRatio ratio={16 / 9}>
        <img className="object-cover w-full h-full" src={backdrop} alt={title} />
      </AspectRatio>
    </div>
  )
}
