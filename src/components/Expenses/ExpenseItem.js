import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  let { date, amount } = props.expense;
  const [title, setTitle] = useState(props.expense.title);
  const clickHandler = () => {
    setTitle("updated");
    console.log("clicked ");
  };
  // const year = date.toLocaleString("en-US", { year: "numeric" });
  // const month = date.toLocaleString("en-US", { month: "long" });
  // const day = date.toLocaleString("en-US", { day: "numeric" });
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>update title</button>
    </Card>
  );
};

export default ExpenseItem;
