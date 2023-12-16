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
      <div className="px-4 py-2 flex justify-center">
        <h1 className=" flex items-center text-gray-800 font-bold text-2xl uppercase">
          T0-DO LIST
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className='"w-full max-w-sm mx-auto px-4 py-2'
      >
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="todo-input"
            name="todo"
            placeholder="Add your task"
            value={todosList.todo}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  )
}

export default AddTodo
