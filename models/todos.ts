import * as z from 'zod'

//frontend
export const TodoDraftSchema = z.object({
  todo: z.string(),
})

//backend
export const TodoSchema = TodoDraftSchema.extend({
  id: z.number(),
  todo:z.string()
})
