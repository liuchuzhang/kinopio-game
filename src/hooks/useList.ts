import useStateMerge from './useStateMerge'

interface ReturnValue<T> {
  list: T[]
  hasLoadMore: boolean
  loading: boolean
  loadMore: () => void
}

const limit: number = 20

const getList = (list: any[], size: number) => list.filter((_, index) => index < size)

export default function useList<T = any>(list: T[]): ReturnValue<T> {
  const [state, setState] = useStateMerge<{
    page: number
    hasLoadMore: boolean
    loading: boolean
    list: T[]
  }>({
    hasLoadMore: true,
    list: getList(list, limit),
    loading: false,
    page: 1
  })

  const loadMore = () => {
    if (!state.hasLoadMore) return

    setState({ loading: true })
    const size = (state.page + 1) * limit

    setTimeout(() => {
      setState({
        list: getList(list, size),
        page: state.page + 1,
        hasLoadMore: size < list.length,
        loading: false
      })
    }, 200)
  }

  return {
    ...state,
    loadMore
  }
}
