import React,{useState} from 'react'
import Header from './header/header'
import TaskList from './taskList/TaskList'


const App = () => {
  const [task, Updatetask] = useState([])

  return (
    <div className="w-11/12 max-w-xs mx-auto mt-8 sm:max-w-xs md:max-w-xs">
        <Header/>
        <TaskList tasklist ={task} SetTasklist = {Updatetask}/>
    </div>
  )
}
export default App