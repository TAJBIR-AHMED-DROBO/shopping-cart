import React, { useState } from "react";
import Rename from "./Rename";
import { CartState } from "../Context/Context";
function Filter() {
  const {
    productState: { byStock, byFastDelivery, sort, byRating,searchQuery },
    productDispatch,
  } = CartState();

  console.log(byStock,byFastDelivery,sort,byRating,searchQuery);
  
  return (
    <div>
      <div className="filter col-lg-4 col-6 ">
        <div className="filter-body">
          <h3 className=" text-center ">Filter Products</h3>
          <form>
            <p>
              <input
                type="radio"
                className="pt-2"
                name="cending"
                id="acending"
                onClick={()=>{productDispatch({type:"SORT_BY_PRICE",payload:"lowToHigh"})}}
                checked={sort === "lowToHigh" ? true :false}
              />
              <label htmlFor="acending">Ascending</label>
            </p>
            <p>
              <input
                type="radio"
                className="pt-2"
                name="cending"
                id="decending"
                onClick={()=>{productDispatch({type:"SORT_BY_PRICE",payload:"highToLow"})}}
                checked={sort === "highToLow" ? true :false}
              />
              <label htmlFor="decending">Descending</label>
            </p>

            <p>
              <input type="checkbox" className="pt-2" name="ending" id="1" onChange={()=>{productDispatch({type:"FILTER_BY_STOCK"})}} checked={byStock}/>
              <label htmlFor="1">Include out of stock</label>
            </p>
            <p>
              <input type="checkbox" className="pt-2" name="ending" id="1g" onChange={()=>{productDispatch({type:"FILTER_BY_DELIVERY"})}} checked={byFastDelivery}/>
              <label htmlFor="1g">Fast Delivey Only</label>
            </p>
            <Rename rating={byRating} setRating={productDispatch}></Rename>
           
          </form>
          <button className="mt-4" onClick={()=>{productDispatch({type:"CLEAR_FILTER"})}}>Clear Filter</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
