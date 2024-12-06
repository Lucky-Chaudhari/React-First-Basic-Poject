import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({data})  => {
  console.log(data)
  return (
    <div className='p-20 bg-[#1c1c1c] w-screen h-screen'>

        <Header data={data}/>
        <TaskNumber data={data}/>
        <TaskList data={data}/>

    </div>
  )
}

export default EmployeeDashboard
