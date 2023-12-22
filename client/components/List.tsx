import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, deleteTodoThenFetch } from '../slices/todos'
import UpdateTodo from './UpdateTodo'

function List() {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos)
  const [editingId, setEditingId] = useState<number | null>(null)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodoThenFetch(id))
  }
  const handleEditClick = (id:number) => {
    console.log("this is editingId:", editingId);
    
    setEditingId(id)
  }

  const handleUpdate = () => {
    setEditingId(null)
  }

  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos.map((todo) => (
        <li className="py-4" key={todo.id}>
          <div className="flex items-center">
            <input name="todo1" type="checkbox"></input>

            <div>
              {editingId ? (
                <UpdateTodo
                  className={`ml-3 block text-gray-900 text-xl font-medium ${
                    editingId === todo.id? 'bg-slate-400 border-blue-400' : ''
                  }`}
                  todoId={todo.id}
                  todoData={todo.todo}
                  onUpdate={handleUpdate}
                />
              ) : (
                <div className="z-0 ml-3 block text-gray-900 text-xl font-medium">
                  {todo.todo}
                </div>
              )}
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

            <button
              onClick={() => handleEditClick(todo.id)}
              type="button"
              className="text-white bg-teal-400 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
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
          </div>
        </li>
      ))}
    </ul>
  )
}

export default List
