import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import { Contact } from './Components/Contact';
import Product from './Components/Product';
import { Navigation } from './Components/Navigation';
import { AdminLogin } from './Components/AdminLogin';
import  Adminpage  from './Components/Adminpage';

const App = () => {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="admin" element={<AdminLogin/>} />
      <Route path="adminpage" element={<Adminpage/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="product" element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App;
