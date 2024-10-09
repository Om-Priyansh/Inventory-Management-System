import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'

import Forms from './components/Forms';
import NavBar from './components/NavBar';
import Login from './components/Login';


function App() {
  const [count, setCount] = useState(0)

  return (

  <Routes>
      {/* <NavBar />
      <Forms /> */}
      <Route path = "/login" element = {<Login />} />
      <Route path = "/" element = {<><NavBar /> <Forms /> </>} />
      
    </Routes>
  
  )
}

export default App
