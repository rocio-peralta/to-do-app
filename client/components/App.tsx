import { useState } from 'react'
import AddTodo from './AddTodo'
import List from './List'
import { fetchTodos } from '../slices/todos'
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit'
import { Todo } from '../../models/todos'
import { useAppDispatch } from '../hooks'

function App() {
  const dispatch = useAppDispatch()
  const [isListVisible, setListVisible] = useState(false)
  
  function handleEnterPressed() {
    setListVisible(true)
  }
  const handleFetchTodos = () => {
    dispatch(fetchTodos())
    setListVisible(true)
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <AddTodo onEnterPressed={handleEnterPressed} />
        {isListVisible && <List />}
      </div>
      <button
        onClick={() => handleFetchTodos()}
        type="button"
        className="text-white bg-red-400 hover:bg-red-500  font-medium rounded-lg text-sm mr-2 px-5 py-2.5 text-center inline-flex items-center ml-auto"
      >
        <svg
          className="w-[18px] h-[18px] text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
          />
        </svg>
      </button>
    </>
  )
}

export default App
function dispatch(
  arg0: AsyncThunkAction<
    Todo[],
    void,
    {
      state?: unknown
      dispatch?: Dispatch<AnyAction> | undefined
      extra?: unknown
      rejectValue?: unknown
      serializedErrorType?: unknown
      pendingMeta?: unknown
      fulfilledMeta?: unknown
      rejectedMeta?: unknown
    }
  >,
) {
  throw new Error('Function not implemented.')
}
