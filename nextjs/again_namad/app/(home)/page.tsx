import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css'


export const metadata = {
  title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // return fetch(URL).then(response => response.json())
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {/* {JSON.stringify(movies)} */}
      {/* {movies.map(movie => <li key={movie.id}><Link href={`movies/${movie.id}`}>{movie.title}</Link></li>)} */}
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
      ))}
    </div>)
} 