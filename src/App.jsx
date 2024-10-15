import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import {Route, Routes} from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Forms from './components/Forms';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ScanProduct from './components/ScanProduct';


function App() {
  const [count, setCount] = useState(0)

  return (

  <Routes>
      {/* <NavBar />
      <Forms /> */}
      <Route path = "/login" element = {<Login />} />
      <Route path = "/" element = {<><NavBar /> <Forms /> </>} />
      <Route path = "/dashboard" element = {<Dashboard />} />
      <Route path = "/dashboard/addproduct" element = {<AddProduct />} />
      <Route path = "/dashboard/scanproduct" element = {<ScanProduct />} />
      
    </Routes>
  
  )
}

export default App
