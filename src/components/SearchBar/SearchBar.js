import React, { useState } from 'react'

const SearchBar = (prop) => {

  const [inputText, UpdateText] = useState('')
  function handleInput(e){
    UpdateText(e.target.value)
  }
  function UpdateList(){
    prop.tasklist.push(inputText)
    UpdateText('')
    console.log(prop.tasklist)
  }

  return (
    <div className='flex w-3/5 mx-auto text-xs py-1'>
    <input type='text' className='task w-full text-gray-400 bg-forms py-0.5 pl-1.5 rounded-l-md' placeholder='Create a new todo..' value={inputText} onChange={handleInput}></input>
    <button className='text-gray-500 bg-forms rounded-r-md pr-1 pb-0.5' onClick={UpdateList}>save</button>
    </div>
  )
}
export default SearchBar

