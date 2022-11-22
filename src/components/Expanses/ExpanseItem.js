import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ExpanseDate from "./ExpanseDate";
import "./ExpanseItem.css";
const ExpanseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };
  
  return (
    <div className="expanse-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expanse-item__price">Rs. {props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </div>
  );
};

export default ExpanseItem;
