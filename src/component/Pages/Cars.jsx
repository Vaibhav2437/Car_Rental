import bmwx5 from '../../Static/bmw.avif'
import audiq7 from '../../Static/AudiQ7.jpg'
import kiacar from '../../Static/kia-new-carnival-left-front-three-quarter0.webp'
import toyota from '../../Static/toyota.avif'
import defender from '../../Static/Defender.jpg'
import gwagon from '../../Static/G-wagon.jpg'
import harrier from '../../Static/harrier.jpg'
import thar from '../../Static/thar.webp'
import creata from '../../Static/creta.webp'
import nexon from '../../Static/nexon.webp'
import dizire from '../../Static/dizire.webp'
import sonet from '../../Static/kiasonetavif.avif'
import gloster from '../../Static/Gloster.jpg'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Cars = () => {
    
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleSearchClick = () => {
    // Perform navigation based on selected option
    navigate(`/search/${selectedOption}`); 
  };

  return (
    <div className='bg-dark-subtle pt-4 pb-5'>
      <h1 className='pt-3 pb-3'>Select Category</h1>
      <div className='w-50 d-flex justify-content-between mx-auto pt-3 pb-5'>
        <select className='form-select w-50 me-5 p-2'  value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select Categories</option>
            <option value='premium'>Premium</option>
            <option value="HatchbackCars">Hatchback Cars</option>
            <option value="SuvCars">Suv Cars</option>
            <option value="sedancars">Sedan Cars</option>
        </select>
        <button className='form-control w-50 p-2 btn btn-danger' onClick={handleSearchClick}>Search</button>
      </div>
      <h2 className=''>Avaliable Cars</h2>
       <div className='d-flex justify-content-evenly mt-3 mb-3'>
        <div className="card" style={{ width: ' 18rem' }}>
          <img src={audiq7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Audi Q7</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={defender} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Defender</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: '18rem' }}>
          <img src={kiacar} className="card-img-top" alt="..." height={190} />
          <div className="card-body">
            <h5 className="card-title">Kia Carnival</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={thar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Thar</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-evenly mt-5 mb-5 '>
        <div className="card" style={{ width: ' 18rem' }}>
          <img src={harrier} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tata Harrier</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={toyota} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Toyota</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={gwagon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">G Wagon</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={creata} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Creta</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-evenly mt-3 mb-3'>
        <div className="card" style={{ width: ' 18rem' }}>
          <img src={nexon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title pt-3">Tata Nexon</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={dizire} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Swift Dizire</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={sonet} className="card-img-top" alt="..." height={180} />
          <div className="card-body">
            <h5 className="card-title">Kia Sonet</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>

        <div className="card" style={{ width: ' 18rem' }}>
          <img src={gloster} className="card-img-top" alt="..." height={180}/>
          <div className="card-body">
            <h5 className="card-title">MG Gloster</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink href="#" className="btn btn-primary">Rent Now</NavLink>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Cars