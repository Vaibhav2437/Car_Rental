import React from 'react'
import Logo from '../../Static/logo.svg'
const Footer = () => {
    return (
        <div className='container-fluid w-100 bg-black text-light p-4 mx-auto'>
            <div className="mt-5 mx-auto d-flex justify-content-evenly">
                <div className="row row-cols-4">
                    <div className="col">
                        <img src={Logo} alt='' />
                        <h4>Opning Hours :</h4>
                        <h4>MON-SUN : 10AM - 8PM</h4>
                    </div>
                    <div className="col">
                        <div>
                            <h3 className='text-danger fs-4'>Call us on(1)</h3>
                            <h3 className='fs-3'>+91 9999999 681</h3>
                        </div>
                        <div className='fs-6'>
                            <h3 className='mt-5 fs-4'>USEFUL LINKS</h3>
                            <ul className='list-group list-group-flush ms-5 text-start'>
                                <li className='ms-5 p-2'>Pre-Owned BMW Cars</li>
                                <li className='ms-5 p-2'>re-Owned Audi Cars</li>
                                <li className='ms-5 p-2'>Luxury Cars Collection</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <h3 className='text-danger fs-4'>Call us on(2)</h3>
                            <h3 className='fs-3'>+91 999999 2532</h3>
                        </div>
                        <div className='text-start ms-3'>
                            <h3 className='mt-5 ms-5 fs-4'>OUR INFO</h3>
                            <ul className='list-group list-group-flush ms-5 text-start'>
                                <li className='ms-4 p-2'>About Us</li>
                                <li className='ms-4 p-2'>Cars</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156091!2d73.78056543154418!3d18.52459859950238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735666235239!5m2!1sen!2sin" width="300" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
            <hr />
            <div className='d-flex align-items-center'>
                <p className='mt-2'>&copy; 2024 FusionCars.com all rights reserved.<span className='ms-5'>Powered By Digital Birbal</span></p>
            </div>
        </div>


    )
}

export default Footer