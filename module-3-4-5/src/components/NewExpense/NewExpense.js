import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  const saveDataHHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(data);
  };
  return (
    <div>
      <ExpenseForm onSaveData={saveDataHHandler} />
    </div>
  );
};

export default NewExpense;
