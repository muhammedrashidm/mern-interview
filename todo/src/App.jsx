import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { selectTodos } from './app/todo/todo-slice'
import { addTodoItem, updateTodoItem } from './app/todo/todo-slice'
import { useDispatch } from 'react-redux'
function App() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [newTask, setNewTask] = useState("");
  return (
    <>
      <div className="max-w-md mx-auto p-4 space-y-4">
        <h1 className="text-3xl font-bold underline">Todo App</h1>
        <div className="flex items-center space-x-2">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            className="border border-gray-300 p-2 flex-1"
            placeholder="Add a new task"
          />
          <button
            onClick={() => {
              if (!newTask) return
              dispatch(addTodoItem({ id: todos.todos.length + 1, title: newTask, completed: false }))
              setNewTask("")
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {
            todos && todos.todos.map(todo => (
              <li className="flex items-center space-x-2" key={todo.id}>
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={todo.completed}
                  onChange={(e) => {
                    dispatch(updateTodoItem({ ...todo, completed: e.target.checked }))
                  }}
                />
                <span
                  className={`${todo.completed ? 'line-through' : ''
                    } block truncate`}
                >
                  {todo.title}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
