import React, { useEffect, useState } from 'react'
import Header from "../Layout/Header";
import { CartState } from '../Context/Context';
function Cart() {
  const {state:{cart},dispatch} = CartState();
  const [total,setTotal] = useState(0);
  
  useEffect(()=>{
    setTotal(cart.reduce((prev,curr)=>{
     return  prev + Number(curr.price) * curr.qty;

    },0))
  },[cart])
  return (
    <div>
      <Header></Header>
      <div className='d-flex'>
      <div style={{width:"78%"}}>
      <ul class="list-group mt-5" style={{width:"100%"}}>
  {
    cart.map((prod,i)=>{
      return(
        <li class="list-group-item">
         <div className="row">
         <div className="col-3">
            <img src={prod.image} alt="" className='img-fluid'/>
          </div>
          <div className="col-3">
            <span>{prod.name}</span>
          </div>

          <div className="col-1">
            <span>${prod.price}</span>
          </div>

          <div className="col-2 text-center ">
            {
              [...Array(5)].map((e,i)=>{
                return (
                  <span>
                    {
              prod.ratings > i ? (<i className='fa-solid fa-star'></i>) : (<i className='fa-regular fa-star'></i>)
            }
                  </span>
                )
              })
            }
          </div>

          <div className="col-2">
            <select className='w-100' value={prod.qty} onChange={(e)=>{
              dispatch({
                type:"CHANGE_CART_QTY",
                payload:{
                  id:prod.id,
                  qty:e.target.value
                }

              })
            }}>
              {
                [...Array(prod.inStock).keys()].map(x=>{
                  return (<option key={x}>{x+1}</option>)
                })
              }
            </select>
          </div>

          <i className='fa-solid fa-trash col-1 text-center ' onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}></i>
         </div>
        </li>
      )
    })
  }
  
      </ul>
    </div>

    <div style={{width:"22%"}} className='px-4 pt-4 product-summary' >
    <h4>Subtotal ({cart.length}) item</h4>
    <h6>Total: ${total}</h6>
    <button className='btn btn-primary w-100' disabled = {cart.length === 0} >
      proceed to checkout
    </button>
    </div>
      </div>
    </div>
  )
}

export default Cart
