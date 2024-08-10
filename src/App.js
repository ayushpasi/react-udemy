import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "car insu.",
      amount: 2000,
      date: new Date(2024, 7, 6),
    },
    {
      id: "e1",
      title: "car insu.",
      amount: 2000,
      date: new Date(2024, 7, 6),
    },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
    </div>
  );
}

export default App;
