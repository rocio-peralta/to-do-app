import { useState } from 'react'
import { updateTodosThenFetch } from '../slices/todos'
import { TodoDraft } from '../../models/todos'
import { useAppDispatch } from '../hooks'

type UpdateProps = {
  todoId: number
  todoData: string
}

function UpdateTodo({ todoId, todoData}: UpdateProps) {
  const dispatch = useAppDispatch()
  const [selectedTask, setSelectTask] = useState(false)
  const [updatedTask, setUpdatedTask] = useState({
    todo: todoData,
  } as TodoDraft)

  function handleClick() {
    setSelectTask((prev) => !prev)
  }

  const handleSubmit = (id: number, task: { todo: string }) => {
    dispatch(updateTodosThenFetch({ id, task: { todo: task.todo } }))
  
  }

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="text-white bg-gray-400 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
      >
        <svg
          className="w-[19px] h-[19px] text--800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 21 21"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3"
            d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
          />
        </svg>
      </button>
      {selectedTask && (
        <form
          onSubmit={() => handleSubmit(todoId, updatedTask)}
          className="flex items-start"
        >
          <input
            className="ml-3 block text-gray-900 text-xl font-medium"
            type="text"
            id="todo-input"
            name="todo"
            placeholder=""
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, todo: e.target.value })
            }
            value={updatedTask.todo}
          />
        </form>
      )}
    </>
  )
}

export default UpdateTodo
