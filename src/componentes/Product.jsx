import React from "react";

export const Product = ({name,price}) => {
    return(
        <div>
            <h4>Nombre: {name}</h4>
            <h5>Precio: {price}</h5>

        </div>
    )
}