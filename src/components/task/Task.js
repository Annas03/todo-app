import React, { useState, useEffect } from 'react'
import check from '../task/Checkarrow.svg'

const Task = ({topic, list, updateTask}) => {
   
  const [isCompleted, SetIsCompleted] = useState(false)

  function CompleteTask(){
    isCompleted ? SetIsCompleted(false) : SetIsCompleted(true)
  }
  useEffect(() => {
    updateTask(list.map((t) => t.value === topic ? {value: topic, completed:isCompleted}: t))}, [isCompleted])

  return (
    <div className='flex w-11/12 mx-auto border-b border-gray-700 my-1 py-0.5'>
        {isCompleted && 
        <div>
          <button className='fixed flex self-center w-3 h-3 rounded-xl border border-purple-500 bg-blue-500' onClick={CompleteTask}>
            <img className='w-2 h-2 pt-0.5 pl-0.5' src={check}></img>
          </button>
          <p className='line-through break-all text-xs pl-4 text-gray-400'>{topic}</p>
        </div>
        }
        {!isCompleted && 
        <div>
          <button className='fixed flex self-center w-3 h-3 rounded-xl border border-purple-500' onClick={CompleteTask}>
          <img className='hidden w-2 h-2 pt-0.5 pl-0.5' src={check}></img>
        </button>
        <p className='break-all text-xs pl-4 text-gray-400'>{topic}</p>
        </div>}
    </div>
  )
}

export default Task