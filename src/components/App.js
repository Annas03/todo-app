import React from 'react'
import Header from './header/header'
import SearchBar from './SearchBar/SearchBar'
import TaskList from './taskList/taskList'


const App = () => {
  return (
    <div className="w-11/12 max-w-xs mx-auto mt-8 sm:max-w-xs md:max-w-xs">
        <Header/>
        <SearchBar/>
        <TaskList/>
    </div>
  )
}
export default App