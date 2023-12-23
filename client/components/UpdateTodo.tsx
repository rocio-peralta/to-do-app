import { useState } from 'react'
import { updateTodosThenFetch } from '../slices/todos'
import { TodoDraftSchema } from '../../models/todos'
import { useAppDispatch } from '../hooks'

type UpdateProps = {
  todoId: number
  todoData: string
  onUpdate: () => void
  className?: string
}

function UpdateTodo({ todoId, todoData, onUpdate }: UpdateProps) {
  const dispatch = useAppDispatch()

  const [updatedTask, setUpdatedTask] = useState({
    todo: todoData,
  } as TodoDraft)

  const handleSubmit = (
    event: React.FormEvent,
    id: number,
    task: { todo: string },
  ) => {
    event.preventDefault()
    dispatch(updateTodosThenFetch({ id, task: { todo: task.todo } }))
    onUpdate()
  }

  return (
    <>
      <form
        onSubmit={(event) => handleSubmit(event, todoId, updatedTask)}
        className="flex items-end"
      >
        <input
          className="ml-3 block text-gray-900 text-xl font-medium  border-slate-400 border-2 rounded-lg ml-2  py-2 items-center ml-auto"
          type="text"
          name="todo"
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, todo: e.target.value })
          }
          value={updatedTask.todo}
        />
      </form>
    </>
  )
}

export default UpdateTodo
