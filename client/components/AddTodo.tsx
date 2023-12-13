/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks'
import { postTodosThenFetch } from '../slices/todos'

interface AddTodoProps {
  onEnterPressed: () => void
}

function AddTodo({ onEnterPressed }: AddTodoProps) {
  const dispatch = useAppDispatch()

  const [todosList, setTodosList] = useState({
    todo: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodosList({
      ...todosList,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    dispatch(postTodosThenFetch(todosList))
    onEnterPressed()
  }

  return (
    <>
      <div className="has-text-centered">
        <h1 className="is-size-1 has-text-weight-bold has-text-danger">
          TODOS
        </h1>
      </div>

      <div className="container has-text-centered">
        <div className="column is-half is-offset-one-quarter">
          <div className="control">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label" htmlFor="todo-input">
                  What do you need to do?
                </label>
              </div>
              <input
                className="input"
                type="text"
                id="todo-input"
                name="todo"
                placeholder="Add your task"
                value={todosList.todo}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo