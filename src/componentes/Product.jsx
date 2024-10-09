import React from "react";

export const Product = ({name,price}) => {
    return(
        <div>
            <h1>Nombre: {name}</h1>
            <h2>Precio: {price}</h2>

        </div>
    )
}