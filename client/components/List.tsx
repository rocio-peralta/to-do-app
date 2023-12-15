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
    <div className="container has-text-centered ">
      <div className="columns is-centered">
        <div className="column is-two-fifths notification is-warning">
          {todos.map((todo) => (
            <div className="block" key={todo.id}>
              <p
                className="block"
                style={{ display: 'inline-block', marginRight: '10px' }}
              >
                {todo.todo}
              </p>
              <button
                className="delete is-medium"
                onClick={() => handleDeleteTodo(todo.id)}
                style={{ display: 'inline-block' }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List