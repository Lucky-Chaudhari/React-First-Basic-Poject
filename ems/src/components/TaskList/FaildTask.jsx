import React from 'react'

const FaildTask = ({data}) =>{
  return (
  <div>
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>

<div className='flex justify-between items-center'>
<h3 className='bg-blue-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
<h4 className='text-base'>{data.taskDate}</h4>
</div>
<h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
<p className='text-sm mt-2'>{data.taskDescription}</p>
<div className='mt-2'>
<button className='w-full'>Faild Task</button>
</div>
</div>
  </div>
  )
}

export default FaildTask
