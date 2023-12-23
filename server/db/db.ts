import connection from './connection'
import { Todo, TodoDraftSchema } from '../../models/todos'

export async function getTodos(db = connection) {
  return (await db('Todos').select()) as Todo[]
}

export function addTodos(task: TodoDraft, db = connection) {
  const { todo } = task
  return db('Todos').insert({ todo })
}

export function deleteTodos(id: number, db = connection) {
  return db('Todos').where({ id: id }).delete()
}

export function updateTodos(id: number, task: TodoDraft, db = connection) {
  const { todo } = task
  return db('Todos').where({ id: id }).update({ todo })
}
