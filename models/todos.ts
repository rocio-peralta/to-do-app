//frontend
export interface TodoDraft {
  todo: string
}

//backend
export interface Todo extends TodoDraft {
  id: number
  todo: string
  completed: boolean
  priority: string
}
