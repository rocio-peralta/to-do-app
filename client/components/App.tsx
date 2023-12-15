import { useState } from 'react'
import AddTodo from './AddTodo'
import List from './List'

function App() {
  const [isListVisible, setListVisible] = useState(false)

  function handleEnterPressed() {
    setListVisible(true)
  }

  return (
    <>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
          <AddTodo onEnterPressed={handleEnterPressed} />
          {isListVisible && <List />}
        </div>
    </>
  )
}

export default App
