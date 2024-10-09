import React from "react";
import { Product } from "./Product";
export const MarketList = ({products}) => {
    return(
        <div>
            <h1>Lista del super</h1>
                {products.map((item,index) =>{
                   return <Product key = {index} name = {item.name} price={item.price} />
                })}
        </div>
    )
}