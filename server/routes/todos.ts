import express = require('express')
const router = express.Router()

import db = require('../db/db')

router.get('/', (req, res) => {
  db.getTodos()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/', (req, res) => {
  const { todo } = req.body

  db.addTodos({ todo })
    .then(() => {
      // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch((err: Error) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
 
  db.deleteTodos(Number(id))
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err: Error) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})


export default router