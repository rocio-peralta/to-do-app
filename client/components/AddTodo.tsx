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
    setTodosList({ todo: '' })
  }

  return (
    <>
      <div className="bg-slate-600">
        <h1 className="text-red-600">TODOS</h1>
      </div>

      <div className="">
        <div className="">
          <div className="">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="" htmlFor="todo-input">
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
