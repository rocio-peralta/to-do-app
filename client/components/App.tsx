import { useState } from 'react'
import AddTodo from './AddTodo'
import List from './List'
import { fetchTodos } from '../slices/todos'
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
        <button
          onClick={() => handleFetchTodos()}
          type="button"
          className=" flex justify-end mr-5 mb-4 bg-teal-500 hover:bg-teal-600 rounded-lg  px-3 py-2 items-center ml-auto"
        >
          <svg
            className="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default App
