import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos, deleteTodoThenFetch } from '../slices/todos'

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
                  <input id="todo1" name="todo1" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"></input>
                <div className='ml-3 block text-gray-900 text-lg font-medium'>
                {todo.todo}
                </div>
                <button
                  className="h-4 w-4 text-teal-800 focus:ring-teal-500 border-gray-300 rounded"
                  onClick={() => handleDeleteTodo(todo.id)}
                  >x</button>
              </div>
            </li>
          ))}
    </ul>
  )
}

export default List