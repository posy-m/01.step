import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts, { loader as postsLaoder } from './routes/Posts.jsx'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', element: <Posts />,
        loader: postsLaoder,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          // 동적 라우팅 설정
          { path: ':postId', element: <PostDetails />, loader: postDetailsLoader }
        ],
      },
    ]
  },
]);

//render : react-dom이 제공
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
