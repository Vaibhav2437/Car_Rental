import React from 'react'
import sedan from '../../Static/dizire.webp'
import heatbach from '../../Static/kiasonetavif.avif'
import toyota from '../../Static/Defender.jpg'
import { NavLink } from 'react-router-dom'
const Services = () => {

  return (
      <div className='  bg-dark-subtle pt-4 pb-5'>
        <h1 className=''>Services</h1>
        <div className='container-fluid d-flex justify-content-around mt-3 mb-3 row'>
          <div class="card p-1 col-3" style={{width: "18rem;"}}>
            <img src={sedan} class="card-img-top" alt="..." height={220}/>
            <div class="card-body">
              <h5 class="card-title mb-3">SEDAN</h5>
              <p class="card-text lh-lg">Explore the open road with our flexible car rental services, providing you with the perfect vehicle for your journey, whether it's a quick city run or a long road trip.</p>
             <h4 className='mt-4'>₹6,637 per day</h4>
              <NavLink  to={'/users'} class="btn btn-primary">Book Now</NavLink> 
            </div>
          </div>

          <div class="card p-1 col-3 " style={{ width: " 18rem;" }}>
            <img src={toyota} class="card-img-top" alt="..." height={220}/>
            <div class="card-body">
              <h5 class="card-title mb-3">SUV</h5>
              <p class="card-text lh-base"> Choose from our diverse fleet, enjoy convenient pick-up and drop-off locations, and experience the freedom of driving at your own pace, all at competitive rates to make your travel seamless</p>
              <h4 className='mt-4'>₹7,727 per day</h4>
              <NavLink to={'/users'} class="btn btn-primary">Book Now</NavLink> 
            </div>
          </div>

          <div class="card col-3 p-1" style={{ width: "18rem;" }}>
            <img src={heatbach} class="card-img-top" alt="..." height={220} />
            <div class="card-body">
              <h5 class="card-title mb-3">HATCHBACK</h5>
              <p class="card-text">Car rental agencies primarily serve people who require a temporary vehicle,those who do not own their own car, travelers who are out of town, or owners of damaged or destroyed vehicles who are awaiting repair or insurance compensation.</p>
              <h4>₹4,458 per day</h4>
              <NavLink  to={'/users'} class="btn btn-primary">Book Now</NavLink> 
            </div>
          </div>
        </div>
      </div>

  )
}

export default Services