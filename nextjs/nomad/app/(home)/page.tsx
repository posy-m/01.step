// "use client"

import Link from 'next/link';

// import { useEffect, useState } from 'react';
// import Navigation from '../../components/navigation';

export const metadata = {
  title: 'Home',
  // description: 'The best movies on the best framework',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
  // console.log("im fetching");
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // return fetch(URL).then(response => response.json())
  const response = await fetch(API_URL);
  const json = await response.json();
  return json
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>
    {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
  </div>
}