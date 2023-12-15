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
      <header>
        <div className="bg-slate-800 max-w-md mx-auto shadow-lg rounded-lg overflow-hidden mt-16">
          <AddTodo onEnterPressed={handleEnterPressed} />
          {isListVisible && <List />}
        </div>
      </header>
    </>
  )
}

export default App
