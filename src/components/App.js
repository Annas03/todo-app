import React,{useState} from 'react'
import Header from './header/header'
import TaskList from './taskList/TaskList'
import Task from './task/Task'


const App = () => {
  const [task, Updatetask] = useState([])

  return (
    <div className="w-11/12 max-w-xs mx-auto mt-8 sm:max-w-xs md:max-w-xs">
        <Header/>
        <TaskList tasklist ={task} SetTask = {Updatetask}/>
    </div>
  )
}
export default App