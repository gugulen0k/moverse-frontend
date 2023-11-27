
import MovieSlider from "./MovieSlider"
import CategoryMovieSlider from "./CategoryMovieSlider"

export default function MainContent() {
  return (
    <div>
      <div className='h-full'>
        <MovieSlider />
        <CategoryMovieSlider />
      </div>
    </div>
  )
}
