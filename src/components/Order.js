import React, { useState } from "react";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="buttonList">
      {orderType}: {orders}
      <button id="addButton" className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
      
    </li>
  );
};

export default Order;
