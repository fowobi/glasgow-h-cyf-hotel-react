import React from "react";
import Order from "./Order";
import React,{useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={'Pizzas'} />
        <Order orderType={'Salads'} />
        <Order orderType={'Chocolate Cake'} />
      </ul>
    </div>
  )
}

export default Restaurant
