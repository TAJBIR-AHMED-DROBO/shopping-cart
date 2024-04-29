import React from "react";
import Header from "../Layout/Header";
import { CartState } from "../Context/Context";
import Filter from "../Component/Filter";
import SingleProduct from "../Component/SingleProduct";
import "../Component/component.css"
function Home() {
  const {
    state: { products} ,productState:{byStock, byFastDelivery, sort, byRating,searchQuery} ,
  } = CartState();
  
  const transformProducts = () =>{
    let sorted = products;
    if(sort){
       sorted.sort((a,b)=>{
       return  sort ===  "lowToHigh" ?  a.price-b.price :  b.price-a.price;
      })
    }

    if(!byStock){
      sorted = sorted.filter((prod) => prod.inStock)
    }

    if(byFastDelivery){
      sorted = sorted.filter((prod)=> prod.fastDelivery)
    }

    if(byRating){
      sorted = sorted.filter((prod)=> prod.ratings >= byRating)
    }

    if(searchQuery){
      sorted = sorted.filter((prod)=> prod.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    return sorted;
  }

  return (
    <div className="home">
      <Header form={true}></Header>

      <div className="row">
     <div className="filter">
     <Filter />
     </div>
      <div className="productContainer col-lg-8 col-md-6 ps-3" >
       <div className="row">
       {transformProducts().map((prod) => {
          return (
            <div key={prod.id}  className="col-lg-4 col-md-6 mb-4">
              <SingleProduct  prod = {prod}/>
            </div>
          );
        })}
       </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
