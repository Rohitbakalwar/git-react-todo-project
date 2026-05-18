import React from 'react'


const TodoForm = ({task,setTask,addtodo}) => {
  return (
    <div >
      <input 
        type='text'
        placeholder='Enter task....'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className='border p-2 rounded-lg flex-1 outline-none'
      />
      <button className='bg-blue-500 text-white px-4 py-2 ml-3 rounded-lg hover:bg-blue-600'
      onClick={addtodo}
      >
        Add
      </button>
    </div>
  )
}

export default TodoForm
