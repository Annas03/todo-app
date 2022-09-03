import React from 'react'
import Task from "../task/Task.js"

const taskList = () => {
  const tasks = ["Create Portfolio", "offer 5 times Namaz", "Help others"]

  return (
    <div className='mt-2 w-3/5 pt-0.5 mx-auto bg-forms text-gray-500'>
      <Task topic='Create Portfolio'/>
      <Task topic='offer 5 time Namaz'/>
      <Task topic='Help Others'/>
      <div className='text-gray-500 text-xs flex justify-between mx-1'>
        <p>5 Items</p>
        <button>Clear Complete</button>
      </div>
    </div>
  )
}
export default taskList
