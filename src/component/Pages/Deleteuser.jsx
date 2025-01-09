import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Deleteuser = () => {

    const {userID} = useParams()
    const navigate = useNavigate()
    const [user,setUser] = useState([])
    const getData = async()=>{
        const response = await axios.get(`http://localhost:8000/users/${userID}`);
        const  result = response.data
        setUser(result)
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteData =()=>{
        axios.delete(`http://localhost:8000/users/${userID}`)
        alert('Data Deleted !!')
        navigate('/userdetails')
    }
  return (
    <div className='bg-light'>
        <h2>Delete User</h2>
        <div>
            <h2>User Name - {user.fname} {user.lname}</h2>
        </div>
        <div>
            <h2>User Email - {user.email}</h2>
        </div>
        <div>
            <h2>User Contact - {user.contact}</h2>
        </div>
        <div>
            <button className='btn btn-warning' onClick={deleteData}>Yes</button>
            <NavLink to='/userdetails'><button className='btn btn-success'>NO</button></NavLink>
        </div>
    </div>
  )
}

export default Deleteuser;