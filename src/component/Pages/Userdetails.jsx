import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Userdetails = () => {
    const [user,setUser] = useState([])
    const navigate =useNavigate()
    const getData = async() =>{
        const response = await axios.get('http://localhost:8000/users')
        const result = response.data
        setUser(result)
    }
    useEffect(()=>{
        getData()
    },[])

    const handellogout=()=>{
        navigate('/admin')
    }
  return (
    <div className='mt-5 mb-5'>
        <h1>User Details</h1>
        <table className='table mb-5 mt-5'>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Full Name</th>
                    <th>DOB</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>gender</th>
                    <th>Address</th>
                    <th>State</th>
                    <th>city</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((users,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{users.fname} {users.lname}</td>
                                <td>{users.dob}</td>
                                <td>{users.contact}</td>
                                <td>{users.email}</td>
                                <td>{users.password}</td>
                                <td>{users.gender}</td>
                                <td>{users.state}</td>
                                <td>{users.city}</td>
                                <td>{users.address}</td>
                                <td>
                                    <NavLink to={`/users/update/${users.id}`}><button className='btn btn-danger me-2'>Edit</button></NavLink>
                                    <NavLink to={`/users/delete/${users.id}`}><button className='btn btn-success'>Delete</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
        <button className='btn btn-danger mb-5' onClick={handellogout}>Logout</button>
        <div>
            
        </div>
    </div>
  )
}

export default Userdetails