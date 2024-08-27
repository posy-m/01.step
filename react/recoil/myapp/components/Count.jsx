import { useRecoilState } from 'recoil'
import { countState, paginationState } from './recoil/CountAtom'

const Count = () => {
  //useRecoilState : value, setState가 둘다 필요한 경우
  // 반환값 : 배열
  const [count, setCount] = useRecoilState(countState)
  const [pagination, setpagination] = useRecoilState(paginationState)

  const increment = () => {
    setCount({ ...count, num: count.num + 1 })
  }
  const dercrement = () => {
    setCount({ ...count, num: count.num - 1 })
  }

  const pageIncrement = () => {
    setpagination()
  }

  return (
    <>
      count: {count.num}
      <button onClick={increment}>증가</button>
      <button onClick={dercrement}>감소</button>
      페이지: {pagination}
      <button onClick={pageIncrement}>페이지 증가</button>
    </>
  )
}

export default Count