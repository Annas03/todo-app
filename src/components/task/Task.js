import React from 'react'
import check from '../task/Checkarrow.svg'

const Task = (prop) => {
  return (
    <div className='flex w-11/12 mx-auto border-b border-gray-700 my-1 py-0.5'>
        <button className='fixed flex self-center w-3 h-3 rounded-xl border border-purple-500'>
          <img className='hidden w-2 h-2 pt-0.5 pl-0.5' src={check}></img>
        </button>
        <p className='break-all text-xs pl-4 text-gray-400'>{prop.topic}</p>
    </div>
  )
}

export default Task