import { AddCircleOutline, Remove } from '@mui/icons-material'
import React from 'react'
import './cart.css'


const Cart = () => {
  return (
    <div style={{ backgroundImage: `url(../../images/add.png))`  }}>

    <header>

    <div className='continue-shopping'>

     <img src='./images/arrow.png' height={70} width={70} alt="arrow"/>
     <h2>continue shopping</h2>

    </div>


    <div className='cart-icon'>
    <img src='./images/cart.png' alt="cart"/>
    <p>5</p>
    </div>
    
    </header>

    <section className='main-cart-section'>

    <h1>shopping cart</h1>

    <p className='total-items'>you have<span className='total-items-count'> 
     7 </span>items in your card</p>

     <div className='cart-items'>

     <div className='cart-items-container'>

     <div className='item-info'>

     <div className='product-img'>

     <img src='./images/shopme.png' height={100} width={130} alt='cart'/>
     
     </div>

     <div className='title'>

     <h2>men black t shirt</h2>
     <h4>black color</h4>
     
     </div>

     <div className='add-minus-quantity'>
     <AddCircleOutline/>
    

     <input type="text" placeholder='2'/>
     <Remove/>
     </div>


     
     </div>
     </div>
     
     </div>
    
    </section>
    </div>
  )
}

export default Cart