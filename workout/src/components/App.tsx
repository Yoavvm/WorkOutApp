import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'

import { decrement, increment } from '../redux/features/exerciseSlice'


const App = () => {

  const count = useSelector((state: RootState) => state.exercise.value)
  const dispatch = useDispatch()


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App