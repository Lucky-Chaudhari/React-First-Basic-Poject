import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ()  => {
  return (
    <div className='p-20 bg-[#1c1c1c] w-screen h-screen'>
        <Header/>
        <TaskNumber/>
        <TaskList/>

    </div>
  )
}

export default EmployeeDashboard
