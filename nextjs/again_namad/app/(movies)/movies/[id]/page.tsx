import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

// 여기에선 fetching 을 하지 않기 때문에 Loading.tsx에서 일어나지 않는다.

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}