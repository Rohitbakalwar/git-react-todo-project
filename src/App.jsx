import React, { useState } from 'react'
import TodoForm from './components/TodoForm';

const App = () => {

  const [task, settask] = useState("");
  const [todos, settodos] = useState([]);

  const addTodo = () =>{
    if(!task.trim())
      return;

    settodos([...todos,task]);
    settask("");
  }
  return (

    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-2xl shadow-lg w-100'>
        <h1 className='text-3xl font-bold text-center mb-5'>
          Todo App
        </h1>
        <TodoForm 
        task={task}
        setTask={settask}
        addTodo={addTodo}
        />
      </div>
    </div>
  )
}

export default App
