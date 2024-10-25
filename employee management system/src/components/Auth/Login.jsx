import React, { useState } from 'react'

const Login= ()=> {



  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submitHandler=(e)=>{
     e.preventDefault()

     setEmail(" ");

     setPassword("");

  }
  return (
    <div className='flex  h-screen w-screen justify-center items-center flex-col'>

  <div className='border-2 border-emerald-600 p-20 rounded-xl'>


  <form onSubmit={(e)=>{
    submitHandler(e)}
    }
    className=' flex flex-col justify-center items-center'>
    <input required  className ="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>{
     setEmail(e.target.value)
    }} />
    <input  className =" outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3" type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>{
     setPassword(e.target.value)
    }} />

   <button t  className =" outline-none bg-emerald-600  border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-5"> Log in </button>
  </form>

  </div>

    </div>
  )
}

export default Login
