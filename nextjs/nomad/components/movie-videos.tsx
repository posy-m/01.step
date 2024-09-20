import { API_URL } from '../app/(home)/page';

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000))
  throw new Error('something broke...')
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json()
}


// 여기선 videos에 관한 UI만 가질거다.
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id)
  return <h6>{JSON.stringify(videos)}</h6>
}
