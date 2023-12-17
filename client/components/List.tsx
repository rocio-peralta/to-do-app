import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, deleteTodoThenFetch } from '../slices/todos'
import UpdateTodo from './UpdateTodo'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodoThenFetch(id))
  }

  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos.map((todo) => (
        <li className="py-4" key={todo.id}>
          <div className="flex items-center">
            <input id="todo1" name="todo1" type="checkbox"></input>
            <div className="ml-3 block text-gray-900 text-xl font-medium">
              {todo.todo}
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
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

            <UpdateTodo
              todoId={todo.id}
              todoData={todo.todo}
              onUpdate={function (): void {
                throw new Error('Function not implemented.')
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
