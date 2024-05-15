import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title);

    const buttonClickHandler=(event)=>{
       setTitle("New Title");
      console.log("Button clicked");
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
