import React, { useState } from "react";

const Order = () => {
    const [orders,setOrders]= useState(0);
    const orderOne = ()=>{
    setOrders(orders + 1);
    };
    return(
        <li>
          Pizzas: {orders}{" "}
          <button className="btn btn-primary"onClick={orderOne}>
            Add
          </button>
        </li>
    );
}



export default Order;