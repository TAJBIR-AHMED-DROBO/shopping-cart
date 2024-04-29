import React from 'react'
import {CartState} from "../Context/Context";

function SingleProduct({prod}) {
  const {state:{cart},dispatch} = CartState();
  return (
      <div className="card">
        <img src={prod.image} alt="" className='img-fluid'/>
        <div className="card-body p-3">
          <h5>{prod.name}</h5>
          <span>${prod.price}</span> <br />
          <span>{
            prod.fastDelivery ? "Fast Delivery" : "4 days after Delivery"
            }</span><br />
          <span>
          {[...Array(5)].map((e,i)=>{
              
                if(prod.ratings > i){
                    return <i className='fa-solid fa-star'></i>
                }else{
                  return  <i className='fa-regular fa-star'></i> 
                }
              
          })}</span><br />

          {
            cart.some(p=>p.id === prod.id)  ? (<button className='btn btn-danger mt-2'  onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}>Remove From Cart</button>) : ( <button className='btn btn-primary mt-2' disabled = {prod.inStock === 0} onClick={()=>{dispatch({type:"ADD_TO_CART",payload:prod})}}>
            {
              prod.inStock ===0 ? "Out Of Stock":"Add To Cart"
            }
          </button>)
          }
            
         
        </div>
      </div>
  )
}

export default SingleProduct
