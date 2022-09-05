import React from 'react'
import Header from './header/header'
import TaskList from './taskList/TaskList'


const App = () => {
  const tasks = []
  return (
    <div className="w-11/12 max-w-xs mx-auto mt-8 sm:max-w-xs md:max-w-xs">
        <Header/>
        <TaskList tasklist ={tasks}/>
    </div>
  )
}
export default App