import React, { useEffect, useState } from "react";
import Header from "../header/Header";

import Form from "../form/Form";
import Card from "../cards/Card";

function Earnings({ pasdClick }) {
    if(!localStorage.getItem('order')){
        localStorage.setItem('order',JSON.stringify([]));
    }
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')));
  useEffect(() => {
    localStorage.setItem('order',JSON.stringify(order));
  }, [order]);
  const handleStatePush = (param) => {
    setOrder([...order, param]);
  };
  const deleteCard = (index) => {
    order.splice(index, 1);
    setOrder([...order]);
  };
  return (
    <div>
      <Header myClick={pasdClick} numEarn={order.length}/>
      <Form store={handleStatePush} />
      <div className="container">
        {order.map((singOrder, index) => (
          <Card key={index} {...singOrder} id={index} delBtn={deleteCard} />
        ))}
      </div>
    </div>
  );
}

export default Earnings;
