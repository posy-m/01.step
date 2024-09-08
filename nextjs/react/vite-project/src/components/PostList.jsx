
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

import Post from './Post'
import classes from './PostsList.module.css'



function PostsList() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false)

  //이렇게 작성하면 무한루프 발생 => 다른 훅을 만든다.
  // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
  //   setPosts(data.posts)
  // })

  // 여기서 왜 함수를 실행해햐할까?
  // 이코드는 컴포넌트 함수가 실행될때마다 매번실행되지 않는다.
  // 무한루프를 막아줌
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true)
  //     setPosts(resData.posts)
  //     setIsFetching(false)
  //   }
  //   fetchPosts();
  // }, [])

  // function addPostHandler(postData) {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   // [postData, ...posts] => 순서를 이렇게 둔 이유는 마지막에 쓴 글이 최신으로 올 수 있도록 하기 위해
  //   // setPosts([postData, ...posts]);
  //   setPosts((existingPosts) => [postData, ...existingPosts])
  // }

  // let modaContent;

  // if (modaContent) {
  //   modaContent = <Modal onClose={hideModalHandler}>
  //     <NewPost
  //       onBodyChange={bodyChangeHandler}
  //       onAuthorChange={authorChangeHandler} />
  //   </Modal>
  // }

  return (
    <>
      {/* {modalIsVisible ? (<Modal onClose={hideModalHandler}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler} />
      </Modal>) : false} */}


      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author={enteredAuthor} body={enteredBody} /> */}
          {/* <Post author="후후" body="두번째다" /> */}
          {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
        </ul>
      )}
      {posts.length === 0 &&
        (<div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>)}
      {/* {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>)} */}
    </>
  )
}

export default PostsList