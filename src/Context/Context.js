import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import {reducer} from "./Reduces";
import { productReducer } from './Reduces';
export const Cart = createContext();

function Context({ children }) {
    const array = [0,3,5,6,7];
    const Products = [...Array(300)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        // inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        inStock: array[Math.floor(Math.random()*array.length)],
        fastDelivery: faker.datatype.boolean(),
        ratings: Math.floor(Math.random()*5)+1,
    }));

    const [state,dispatch] = useReducer(reducer,{
        products:Products,
        cart:[]
    });

    const [productState,productDispatch] = useReducer(productReducer,{
            byRating:0,
            byStock:false,
            byFastDelivery:false,
            searchQuery:""
    })
  
    return (
        <Cart.Provider value={{state,dispatch,productState,productDispatch}} > {/* Pass Products as value to the provider */}
            {children}
        </Cart.Provider>
    );
}

export default Context;

export const CartState = () =>{
    return useContext(Cart);
}