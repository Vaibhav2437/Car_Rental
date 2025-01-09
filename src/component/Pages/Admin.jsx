import React, { useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [user,setUser] =useState({
    name :'',
    password : '',
  })
  const navigate = useNavigate()
  const adminlogin =()=>{
    if(user.name === 'ADMIN' && user.password === 'Admin@123'){
      alert('Admin Login Successfully')
      navigate('/userdetails')
    }else{
      alert('Wrong Username & password')
      setUser('')
      
    }
  }
  return (
    <div className='w-100 pt-5 pb-5 height bg-dark-subtle'>
      <div className='mx-auto'>
      <h1 className='mt-5 mb-5 pt-4'>Admin Login </h1>
        <div className='w-50 mx-auto'> 
          <input type='text' className='form-control' placeholder='Enter User name' value={user.name} 
          onChange={(e)=>setUser((users)=>({...users,name: e.target.value}))}
          />
        </div>
        <div className='w-50 mx-auto mt-3'>
          <input type='password' className='form-control' placeholder='Enter Password' value={user.password} onChange={(e)=>setUser((pass)=>({...pass,password: e.target.value}))}/>
        </div> 
      </div>
      <button className='btn btn-success mt-5' onClick={adminlogin}>Login</button>
      
    </div>
  )
}

export default Admin