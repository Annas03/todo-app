import React,{useState} from 'react'
import Task from "../task/Task.js"

const TaskList = ({tasklist, SetTasklist}) => {
  const [inputText, UpdateText] = useState('')

  function handleInput(e){
    UpdateText(e.target.value)
  }
  function UpdateTaskList(){
    if(inputText !== ''){
      SetTasklist([...tasklist, {value: inputText, completed:false}])
      UpdateText('')
    }
  }
  function IsClearCompleteClicked(){
    SetTasklist(tasklist.filter((item) => !item.completed))
  }

  return (
    <div>
      <div className='flex w-44 max-w-xs sm:w-3/5 mx-auto text-xs py-1'>
        <input type='text' className='task w-full text-gray-400 bg-forms py-0.5 pl-1.5 rounded-l-md' placeholder='Create a new todo..' value={inputText} onChange={handleInput}></input>
        <button className='text-gray-500 bg-forms rounded-r-md pr-1 pb-0.5' onClick={UpdateTaskList}>save</button>
      </div>

      <div className='mt-2 w-44 max-w-xs sm:w-3/5 pt-0.5 mx-auto bg-forms text-gray-500'>  
        {tasklist.length ? tasklist.map((t) => <Task key={t.value} topic={t.value} list={tasklist} updateTask = {SetTasklist}/>) : <h4 className='text-xs text-center'>Add task!</h4>}
        <div className='text-gray-500 text-xs flex justify-between mx-1'>
          <p><span>{tasklist.length}</span> items</p>
          <button onClick={IsClearCompleteClicked}>Clear Complete</button>
        </div>
      </div>
    </div>
  )
}

export default TaskList
