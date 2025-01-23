import React from 'react'
import banner1 from '../../Static/mahindra.png'
import banner2 from '../../Static/banner2.png'
import banner3 from '../../Static/banner3.png'
import customer from '../../Static/customer-removebg-preview.png'
import handshake from '../../Static/handshake.png'
import unique from '../../Static/blubunique.png'
import kia from '../../Static/kia-homeabout.jpg'
import { NavLink } from 'react-router-dom'
import tmos from '../../Static/HT.webp'
import ecomic from '../../Static/ecomic.webp'
const Home = () => {
    return (
        <div className='w-100'>
            <div className=''>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src={banner1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={banner2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={banner3} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='pt-5 pb-5 bg-body-secondary'>
                <div className='mx-auto'>
                    <h5 className='text-danger fs-5 m-1'>100+ CARS TYPES & BRANDS</h5>
                    <p className='fs-1 mt-1 '>Cars Rental<b>Advantage</b></p>

                    <div className='d-flex justify-content-around '>
                        <div className=' w-25 pt-5 bg-light'>
                            <img src={customer} className='' height={100} />
                            <div className='pt-4 pb-4'>
                                <h5 className='pt-3'>100% Customer Satisfaction</h5>
                                <p>Dedicated team of experts</p>
                            </div>
                        </div>
                        <div className=' w-25 pt-5 bg-light'>
                            <img src={handshake} className='mb-3' height={70} />
                            <div className='pt-4 pb-4 ps-1 pe-1'>
                                <h5 className='mt-3'>Transparent Dealing</h5>
                                <p>Hassle-free paperwork and peace of mind</p>
                            </div>
                        </div>
                        <div className=' w-25 p-5 bg-light'>
                            <img src={unique} className='' height={100} />
                            <div className='pt-4 pb-4'>
                                <h5>Unique Selection</h5>
                                <p>Explore a wide range of loved cars</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-secondary p-5 d-flex'>
                <div className='w-50'>
                    <img src={kia} className='w-100' />
                </div>
                <div className='w-50 text-light text-start ps-5 pe-5'>
                    <h2 className='fs-1 pt-3 pb-3'>ABOUT US</h2>
                    <p className='fs-5'>We are a car rental service in Tilak Nagar, Delhi with a focus on transparency and impeccable client service in mind since the very beginning…</p>
                    <ul className='ps-3'>
                        <li className='pb-2'><b>5000+ Happy Clients Since 2008</b></li>
                        <li className='pb-2'><b>Premium less driven cars</b></li>
                        <li><b>25+ Best Quality Awards</b></li>
                    </ul>
                    <NavLink to={'/about'}><button className='btn btn-danger mt-4 mb-3 ms-2 p-3'>KNOW MORE</button></NavLink>
                </div>
            </div>
            <div className='container-fluid bg-dark-subtle pt-5'>
                <h2 className='mt-5'>What Clients Say<span className='text-danger'> About Us</span></h2>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className='mb-4'></button>
                    </div>
                    <div class="carousel-inner pt-5 pb-5 mx-auto w-75 ">
                        <div class="carousel-item active mx-auto mb-5 mt-5">
                            <p className='fs-4 mb-5 '><span className='text-danger fs-2'>"</span>Good collection, less driven cars on best price deals available Highly recommended place for luxury cars purchase<span className='text-danger fs-2'>"</span></p>
                        </div>
                        <div class="carousel-item">
                            <p className='fs-4 mb-5 '><span className='text-danger fs-2'>"</span>Awesome collection.। Have rent audi Q5 from here... Highly Recommended<span className='text-danger fs-2'>"</span></p>
                        </div>
                        <div class="carousel-item">
                            <p className='fs-4 mb-5'> <span className='text-danger fs-2'>"</span>They are just amazing they know how to deliver happiness trust worthyI bought mercedes s class from them completely hassle free transfer and reliable productKeep growing like this malik brothers..<span className='text-danger fs-2'>"</span></p>
                        </div>
                        <div class="carousel-item">
                            <p className='fs-4 mb-5'> <span className='text-danger fs-2'>"</span>Car Rental one of the best and trusted  place in delhi  to rent your car Excellent treatment transparency  i strongly recommend.<span className='text-danger fs-2'>"</span></p>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span> */}
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span> */}
                    </button>
                </div>
            </div>
            {/* <div className='p-5 w-75 mx-auto'>
                <h3 className='fs-1'>As Seen On</h3>
                <div>
                    <img src={tmos} className='w-25'/>
                    <img src={ecomic} className='w-25'/>
                    <img src=''/>
                    <img src=''/>
                </div>
            </div> */}
        </div>
    )
}

export default Home