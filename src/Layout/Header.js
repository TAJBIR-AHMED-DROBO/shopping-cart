import React from "react";
import "./Header.css";
import {CartState} from "../Context/Context"
import { Link } from "react-router-dom";
function Header({ form }) {
  const {state:{cart},dispatch,productState:{searchQuery},productDispatch} = CartState();
  console.log(cart)
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>

          {form && <form className="w-50">
            <input type="text" className="w-100" value={searchQuery} onChange={(e)=>{productDispatch({type:"FILTER_BY_SEARCH",payload:e.target.value})}}/>
          </form>}

          <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-cart-shopping mx-2 "></i>
          <span>{cart.length}</span>
          </a>
          <ul className="dropdown-menu mt-3">
            {
              cart.length > 0 ?(
                < >
                {
                  cart.map((prod)=>{
                    return <div className="mb-2" key={prod}>
                      <div className="brokoly" >
                      <img src={prod.image} alt="" className="img-fluid dropdown-img"/>
                      <div>
                        <span>{prod.name}</span><br />
                        <span>${prod.price}</span>
                      </div>
                      <i class="fa-solid fa-trash" style = {{fontSize:"1.2rem"}} onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}></i>
                      </div>
                    </div>
                  })
                  
                }
                <Link to ="/cart"  className=" text-decoration-none text-dark text-center ">
                      <button className="w-100 mt-2 btn btn-primary">Go To Cart</button>
                      </Link>


                </>
              ):(<span>No item is visible</span>)
            }
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
