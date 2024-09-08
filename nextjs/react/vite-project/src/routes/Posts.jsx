
import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostList';

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModalHandler() {
  //   setModalIsVisible(true)
  // }
  // function hideModalHandler() {
  //   setModalIsVisible(false)
  // }

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  )
}

export default Posts

export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json()
  return resData.posts;
}
