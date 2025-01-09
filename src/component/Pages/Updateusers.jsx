import axios from 'axios';
import React, { useEffect } from 'react'
import wallpaper from '../../Static/wallpaper.jpg'
import { useForm } from 'react-hook-form';
import {useNavigate, useParams } from 'react-router-dom';

const Updateusers = () => {
    const {userID} = useParams()
    const navigate = useNavigate();
    const {register,handleSubmit ,setValue, formState :{errors}} = useForm()
    

    const getData = async()=>{
        const result = await axios.get(`http://localhost:8000/users/${userID}`)
        setValue('fname',result.data.fname)
        setValue('lname',result.data.lname)
        setValue('contact',result.data.contact)
        setValue('password',result.data.password)
        setValue('address',result.data.address)
        setValue('gender',result.data.gender)
        setValue('state',result.data.state)
        setValue('city',result.data.city)
        setValue('dob',result.data.dob)
        setValue('pincode',result.data.pincode)
        setValue('email',result.data.email)
        // console.log(setValue('faname',result.data.fname));
    }

    useEffect(()=>{
        getData();
    },[])

    const UpdateData =(data)=>{
        axios.put(`http://localhost:8000/users/${userID}`,data)
        alert('Data Updated')
        navigate('/userdetails')
    }
    return (
        <div>
            <section className="h-100 bg-dark-subtle">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col ">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block h-50">
                                        <img src={wallpaper} className="img-fluid image rounded-2 imga" alt='car image' height={600}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <form onSubmit={handleSubmit(UpdateData)}>
                                                <h3 className="mb-5 text-uppercase">User Sign Up</h3>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('fname', {
                                                                required: 'First Name is Required',
                                                                pattern: {
                                                                    value: /^[A-Za-z\s]+$/,
                                                                    message: 'Only Letters are Allowed'
                                                                }
                                                            }
                                                            )} />
                                                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                            {
                                                                errors.fname && <p className='text-danger'>{errors.fname.message}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('lname', {
                                                                required: 'Last Name is Required',
                                                                pattern: {
                                                                    value: /^[A-Za-z\s]+$/,
                                                                    message: 'Only Letters are Allowed'
                                                                }
                                                            })} />
                                                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                            {
                                                                errors.lname && <p className='text-danger'>{errors.lname.message}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <input type="tel" id="form3Example1m1" className="form-control form-control-lg"  {...register('contact',
                                                                {
                                                                    required: 'Contact is Required',
                                                                    pattern: {
                                                                        value: /^\d+$/,
                                                                        message: 'Only Letters are Allowed'
                                                                    }
                                                                }
                                                            )} />
                                                            <label className="form-label" htmlFor="form3Example1m1">Contact</label>
                                                            {
                                                                errors.contact && <p className='text-danger'>{errors.contact.message}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div data-mdb-input-init className="form-outline">
                                                            <input type="password" id="form3Example1n1" className="form-control form-control-lg" {...register('password',
                                                                {
                                                                    required: 'Password is Required',
                                                                    pattern: {
                                                                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                                                        message: 'Password must be at least 8 characters, include one uppercase letter, and one special character'
                                                                    }
                                                                })} />
                                                            <label className="form-label" htmlFor="form3Example1n1">Password</label>
                                                            {
                                                                errors.password && <p className='text-danger'>{errors.password.message}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('address', {
                                                        required: "Address is Required"
                                                    })} />
                                                    <label className="form-label" htmlFor="form3Example8">Address</label>
                                                    {
                                                        errors.address && <p className='text-danger'>{errors.address.message}</p>
                                                    }
                                                </div>

                                                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                                    <h6 className="mb-0 me-4">Gender: </h6>

                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                            value="female" {...register('gender')} />
                                                        <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                                    </div>

                                                    <div className="form-check form-check-inline mb-0 me-4">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                            value="male" {...register('gender')} />
                                                        <label className="form-check-label" htmlFor="maleGender">Male</label>
                                                    </div>

                                                    <div className="form-check form-check-inline mb-0">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                            value="other" {...register('gender')} />
                                                        <label className="form-check-label" htmlFor="otherGender">Other</label>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">

                                                        <select data-mdb-select-init className='form-control' {...register('state',
                                                            {
                                                                required: 'State is Required',
                                                            }
                                                        )}>
                                                            <option value="" required>State</option>
                                                            <option value="Maharashtra">Maharashtra</option>
                                                            <option value="Goa">Goa</option>
                                                            <option value="Rajsthan">Rajsthan</option>
                                                        </select>
                                                        {
                                                            errors.state && <p className='text-danger'>{errors.state.message}</p>
                                                        }
                                                    </div>
                                                    <div className="col-md-6 mb-4">

                                                        <select data-mdb-select-init className='form-control' {...register('city',
                                                            {
                                                                required: 'City is Required',
                                                            }
                                                        )}>
                                                            <option value="">City</option>
                                                            <option value="Pune">Pune</option>
                                                            <option value="Goa">Goa</option>
                                                            <option value="Jaipur">Jaipur</option>
                                                        </select>
                                                        {
                                                            errors.city && <p className='text-danger'>{errors.city.message}</p>
                                                        }

                                                    </div>
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="date" id="form3Example9" className="form-control form-control-lg"  {...register('dob',
                                                        {
                                                            required: 'DOB is Required',
                                                        }
                                                    )} />
                                                    <label className="form-label" htmlFor="form3Example9" >DOB</label>
                                                    {
                                                        errors.dob && <p className='text-danger'>{errors.dob.message}</p>
                                                    }
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="text" id="form3Example90" className="form-control form-control-lg" {...register('pincode',
                                                        {
                                                            required: 'Pincode is Required',
                                                        }
                                                    )} />
                                                    <label className="form-label" htmlFor="form3Example90">Pincode</label>
                                                    {
                                                        errors.pincode && <p className='text-danger'>{errors.pincode.message}</p>
                                                    }
                                                </div>
                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <input type="text" id="form3Example97" className="form-control form-control-lg" {...register('email',
                                                        {
                                                            required: 'Email is Required',
                                                            pattern: {
                                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                message: 'Email (required, proper format)',
                                                            }
                                                        }
                                                    )} />
                                                    <label className="form-label" htmlFor="form3Example97">Email ID</label>
                                                    {
                                                        errors.email && <p className='text-danger'>{errors.email.message}</p>
                                                    }
                                                </div>

                                                <div className="d-flex justify-content-end pt-3">
                                                    <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Updateusers;