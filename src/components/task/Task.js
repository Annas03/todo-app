import React from 'react'
import check from '../task/Checkarrow.svg'

const Task = (prop) => {
  return (
    <div className='flex w-11/12 mx-auto border-b border-gray-700 my-1 py-0.5'>
        <button className='flex self-center w-3 h-3 rounded-xl border border-purple-500'>
          <img className='hidden w-2 h-2 pt-0.5 pl-0.5' src={check}></img>
        </button>
        <span className='text-xs pl-2 text-gray-400'>{prop.topic}</span>
    </div>
  )
}

export default Task