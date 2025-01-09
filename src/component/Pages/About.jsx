import React from 'react'
import './About.css'
import lambo from '../../Static/lam.webp'
const About = () => {
  return (
    <div className=''>
      <div class="container pt-5 pb-5  ">
        <div class="row">
          <div class="col w-50">
            <img src={lambo} alt='car' className='img' />
          </div>
          <div class="col-5 border border-warning ">
            <h5 className='text-danger'>About Us</h5>
            <h3>Why choose us?</h3>
            <ul className='text-start fs-5'>
              <li className='list'>book directly through a supplier, and not through a broker.</li>
              <li className='list'>vehicle make and model guaranteed, not “similar” to those selected.</li>
              <li className='list'>hotel and airport delivery/collection.</li>
              <li className='list'>flexible terms and payment options for long term rental.</li>
              <li className='list'>commission free rental.</li>
              <li className='list'> 24/7 telephone contact.</li>
            </ul>
            <p className='lh-base abc fs-6'>We offer a varied fleet of cars, ranging from the compact Toyota Yaris to 7-seaters, and SUVs. All our vehicles have air conditioning,  power steering, electric windows. All our vehicles are bought and maintained at official dealerships only. Automatic transmission cars are available in every booking class.</p>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row pb-5">
          <div class="col border border-warning me-4  p-3">
            <h2 className='text-danger'>Vision</h2>
            <p className='abc'>Our mission is to simply be the best in every aspect of our business. We will achieve this by delivering an exceptional customer experience, creating a supportive and fulfilling workplace, and actively contributing to our community. We take pride in offering high-quality vehicles that have been thoroughly inspected and serviced by our certified technicians. Our inventory includes popular brands such as Mercedes-Benz, Audi, BMW, and more. Each vehicle comes with a detailed history report, so you can feel confident in your purchase.</p>
          </div>
          <div class="col border border-warning p-3">
            <h2 className='text-danger'>Mission</h2>
            <p className='abc'>We believe work should be productive, worthwhile, and fun. If we enjoy what we do, we will perform better, and customers will take notice. We will strive to be the best place in town to work and the best place in town to do</p>
          </div>
        </div>
      </div>
      </div>
      )
}

      export default About