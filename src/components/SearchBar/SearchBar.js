import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex w-3/5 mx-auto text-xs py-1'>
    <input type='text' className='w-full text-gray-400 bg-forms py-0.5 pl-1.5 rounded-md' placeholder='Create a new todo..'></input>
    </div>
  )
}
export default SearchBar

