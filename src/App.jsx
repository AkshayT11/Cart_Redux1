import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './Ccomponent/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
       <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
