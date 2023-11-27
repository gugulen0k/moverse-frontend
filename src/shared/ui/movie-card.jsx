export default function MovieCard ({ movieData }) {
  const {
    title,
    release_date,
    rating
  } = movieData

  return (
    <div>
      <h1>{ title }</h1>
      <span>{ release_date }</span>
      <span>{ rating }</span>
    </div>
  )
}
