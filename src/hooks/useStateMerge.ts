import { useState, useCallback } from 'react'

type Dispatch<T> = (value: T) => void

// Dispatch<T | any> 后期去除 any
function useStateMerge<T = any>(defaultValue: T): [T, Dispatch<T | any>] {
  const [state, set] = useState<T>(defaultValue)
  const setState = useCallback(
    (patch) => {
      let newState
      if (state === Object(state)) {
        newState = { ...state, ...patch }
      } else {
        newState = patch
      }
      set(newState)
    },
    [set, state]
  )

  return [state, setState]
}

export default useStateMerge
