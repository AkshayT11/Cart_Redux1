import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // To update the items value or cart value 
  const items = useSelector((state)=> state.cart )


  return (
    <div className='nav-container'>
        <h1>Cart Redux</h1>
        <div>
            <Link className='navLink' to={"/"} >Home</Link> 
            <Link  className='navLink' to={"/cart"} >Cart</Link>
            <span>Items: {items.length} </span> 
        </div>
    </div>
  )
}

export default Navbar