import React from "react";
import Order from "./Order";
import { FaUtensils } from "react-icons/fa";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <div className="advertisement">
        <h3>
          Restaurant Orders
          <FaUtensils />
        </h3>
        <ul className="orderList">
          <li>
            <Order orderType="Pizzas" />
          </li>
          <li>
            <Order orderType="Salads" />
          </li>
          <li>
            <Order orderType="Chocolate Cake" />
          </li>
        </ul>
      </div>
      <div className="advertisementLis">
        <h3>Advertisement</h3>
        <p>
          Discover our delicious dishes and enjoy a wonderful dining experience
          at our restaurant!
        </p>
        <a
          className="btn btn-primary"
          href="https://www.google.com/search?sxsrf=APwXEdfDiUAg40MTlqRiG9BUhpyY7g8cUQ:1687893173913&q=food&tbm=isch&sa=X&ved=2ahUKEwiGxrKIlOT_AhUuUEEAHUyiBCwQ0pQJegQIDRAB&biw=1182&bih=611&dpr=1.56"
          target="_blank">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Restaurant;
