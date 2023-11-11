import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import { addToCart } from '../redux/CartSlice';

const Home = () => {

    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProduct = async () => {
            const data = await fetch("https://fakestoreapi.com/products")
            const response = await data.json();
            setProducts(response)
            console.log(response);
        }
         fetchProduct()
    },[] );

    const handleAdd = (product)=> {
        dispatch(addToCart(product))
    }

  return (
    <div className='home_Container'>
        {products.map((item,index)=> (
            <div className='card'  key={item.id}>
                <img src= {item.image} alt="prod_image" />
                <h1>Title: {item.title} </h1>
                <p>{item.description} </p>
                <div className='price_btn'>
                <h4 className='price'>$ {item.price} </h4>
                <button
                 onClick={()=> handleAdd(item)}
                 className='btn'>Add Cart</button>
                </div>
               
            </div>
        ) )}
    </div>
  )
}

export default Home