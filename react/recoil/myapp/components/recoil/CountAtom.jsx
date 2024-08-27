import { atom, selector } from 'recoil';

export const countState = atom(
  {
    key: "count",
    default: {
      num: 0,
      name: "pageCount"
    }
  }
)

export const boardState = atom(
  {
    key: "board",
    default: {
      num: 0,
      name: "pageCount"
    }
  }
)

export const paginationState = selector({
  key: "pagination",
  get: ({ get }) => {
    const { num } = get(countState);
    return `gage${num} 번째야`
  },
  set: ({ set, get }, newState) => {
    const { num, name } = get(countState);
    set(countState, { num: num + 1, name })
  }
})