import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../redux/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state)=> state.cart )

  const handleRemove = (id)=> {
    dispatch(removeToCart(id))
  } 

  return (
    <div className='cart_container'>
        {cartItems.map((item)=> (
          <div key={item.id} className='cartCard'>
             <img src= {item.image} alt="cartImage" />
             <h1> {item.title} </h1>
             <h4 className='cart_price'> Price: $ {item.price} </h4>
             <button onClick={()=> handleRemove(item.id) } className='cart_btn'>Remove</button>
          </div>
        ) )}
    </div>
  )
}

export default Cart