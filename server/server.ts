import express from 'express'
import * as path from 'node:path'

import todos from './routes/todos'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/todos', todos)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
  })
}

export default server