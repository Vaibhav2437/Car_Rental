import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { BrowserRouter, PrefetchPageLinks, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Home from './component/Pages/Home.jsx';
import About from './component/Pages/About.jsx';
import Cars from './component/Pages/Cars.jsx';
import Users from './component/Pages/Users.jsx';
import Services from './component/Pages/Services.jsx';
import Admin from './component/Pages/Admin.jsx';
import Userdetails from './component/Pages/Userdetails.jsx';
import Footer from './component/Pages/Footer.jsx';
import Updateusers from './component/Pages/Updateusers.jsx';
import Deleteuser from './component/Pages/Deleteuser.jsx';
import { Helmet } from 'react-helmet';
import SedanCars from './component/Pages/SedanCars.jsx';
import Premium from './component/Pages/Premium.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cars' element={<Cars/>}>
            <Route path='/cars/premium' element={<Premium/>}></Route>
            <Route path='/cars/sedancars' element={<SedanCars/>}></Route>
          </Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/userdetails' element={<Userdetails />}></Route>
          <Route path='/users/update/:userID' element={<Updateusers />}></Route>
          <Route path='/users/delete/:userID' element={<Deleteuser />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
