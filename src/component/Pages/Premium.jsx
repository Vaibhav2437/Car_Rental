import React from 'react'
import { NavLink } from 'react-router-dom';
import rangerover from '../../Static/PremiumCars/RangeRover.jpg'
import bmw740i from '../../Static/PremiumCars/BMW-740i.webp'
import audis7 from '../../Static/PremiumCars/Audi-S7.jpg'
import bmw7 from '../../Static/PremiumCars/bmw7.jpg'
import mcle300 from '../../Static/PremiumCars/Maserati-MC20.webp'
import rangeroversports from '../../Static/PremiumCars/Range-Rover-Sport-SVR-5.webp'
import ferrari from '../../Static/PremiumCars/FerrariPurosangue.webp'
import G800BRABUSCarbonTiffany from '../../Static/PremiumCars/G800BRABUSCarbonTiffany.webp'
import bently from '../../Static/PremiumCars/Bentley-Bentayga-3-scaled.webp'
import urus from '../../Static/PremiumCars/Lamborghini-Urus-1.webp'
import Chevrolet from '../../Static/PremiumCars/Chevrolet-Corvette-Stingray-C8-Z06-Convertible-scaled.jpg'
import Mercedes from '../../Static/PremiumCars/Maserati-MC20-1-of-7.jpg'
const Premium = () => {
    return (
        <div>
            <h1><u>Premium Cars</u></h1>
            <div className='d-flex justify-content-evenly mt-3 mb-3'>
                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={rangerover} class="card-img-top" alt="..."height={200} />
                    <div class="card-body">
                        <h5 class="card-title">Range Rover</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink href="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={audis7} class="card-img-top" alt="..." height={200}/>
                    <div class="card-body">
                        <h5 class="card-title">Audi S7</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={bmw7} class="card-img-top" alt="..." height={200}/>
                    <div class="card-body">
                        <h5 class="card-title">BMW 7</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={bmw740i} class="card-img-top" alt="..." height={200}/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-evenly mt-5 mb-5'>
                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={mcle300} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mercedes-Benz CLE300</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={rangeroversports} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Range Rover Sport SVR</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={ferrari} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Ferrari Purosangue</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#"className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={G800BRABUSCarbonTiffany} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">G800 BRABUS Carbon Tiffany</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-evenly mt-3 mb-3'>
                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={bently} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Bently</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={urus} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title"> Lamborghini Urus</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={Chevrolet} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Chevrolet</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>

                <div class="card" style={{ width: ' 18rem' }}>
                    <img src={Mercedes} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mercedes-Benz CLE300</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-danger">Rent Now</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premium;