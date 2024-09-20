import { Suspense } from 'react'
import { API_URL } from '../../../(home)/page'
import MovieInfo from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'


// async function getMovie(id: string) {
//   console.log(`Fetching movies: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000))
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json()
// }

// async function getVideos(id: string) {
//   console.log(`Fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000))
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json()
// }


export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  // console.log(props);
  // 병렬적으로 처리함. wow....미쳤다..
  //  Promise.all 두가지 요청을 한번에 시작할 수 있지만 promise가 다 끝날때까지 UI가 보이지 않는다는 단점이 있다.
  // 그렇게 되면 유저가 항상 모든 상태를 봐야한다.
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // return <h1>{movie.title}</h1>

  //Suspense : 로딩상태를 분리할 수 있도록 한다.
  return <div>
    <h3>Movie detail page</h3>
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    <Suspense fallback={<h1>Loading movie videos</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
}