
import React, { useEffect, useState,useContext } from 'react'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/Auth/Login';
// import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
const App = () =>{

const [user,setUser] = useState(null)

const authData = useContext(AuthContext)

useEffect (()=>{
if(authData){
  const loggedInUser = localStorage.getItem('loggedInUser')
  if (loggedInUser) {
    setUser(loggedInUser.role)
  }

}
},[authData]);


const handleLogin =(email,password)=>{
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
   localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }else if (authData && authData.employees.find((e)=>email == e.email && password == e.password)){
    setUser('employee')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))

  }
  else{
    alert("Invalid Credentials")
  }
}


  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()

  // },)



  return(
<div>
{
  !user ? <Login  handleLogin={handleLogin}   />: ''
}
{
  user == 'admin' ? <AdminDashboard/> :''
}
  {
         user == 'employee' ? <EmployeeDashboard/> :''
  }
3p


</div>
  )
}

export default App
