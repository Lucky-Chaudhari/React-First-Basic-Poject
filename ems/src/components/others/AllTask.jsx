import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)
  return (


<div className='bg-[#1c1c1c] p-5 mt-5 rounded  '>

<div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded' >

<h2 className='text-lg font-medium 1/5  '>Employee Name</h2>
 <h3 className='text-lg font-medium 1/5 '>New Task</h3>
<h5 className='text-lg font-medium 1/5 '>Active Task</h5>
<h5 className='text-lg font-medium 1/5 '>Completed Task</h5>
<h5 className='text-lg font-medium 1/5 '>Failed Task</h5>


</div>

<div className=''>
{authData.employees.map(function(elem){
return <div className=' border-2 border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded' >
     <h2 className='text-lg font-medium 1/5  '>{elem.firstName}</h2>
      <h3 className='text-lg font-medium 1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
     <h5 className='text-lg font-medium 1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
    <h5 className='text-lg font-medium 1/5 text-white'>{elem.taskNumbers.completed}</h5>
    <h5 className='text-lg font-medium 1/5 text-red-600'>{elem.taskNumbers.failed}</h5>



</div>
})}
</div>

</div>
  )
}


export default AllTask
