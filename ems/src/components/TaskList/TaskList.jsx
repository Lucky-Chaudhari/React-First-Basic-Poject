import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FaildTask from './FaildTask'

const TaskList =({data}) =>{

  return (
    <div  className=' tasklist h-[55%] w-full py-5 overflow-x-auto  mt-10 flex items-center justify-start gap-5 flex-nowrap'>

    {data.tasks.map((elem,idx)=>{
     if(elem.active){
      return<AcceptTask key={idx} data={elem}/ >
     }
     if(elem.newTask){
      return<NewTask key={idx} data={elem}/>
     }
     if(elem.completed){
      return<CompleteTask key={idx} data={elem}/>
     }
     if(elem.failed){
      return<FaildTask key={idx}  data={elem}/>
     }
    })}
    {/* <AcceptTask/>
   <NewTask/>
   <CompleteTask/>
   <FaildTask/> */}
    </div>
  )
}

export default TaskList
