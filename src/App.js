import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Breakfast",
    amount: "90",
    date: new Date(2022, 0, 30),
  },
  {
    id: "e2",
    title: "Lunch",
    amount: "110",
    date: new Date(2022, 1, 30),
  },
  {
    id: "e3",
    title: "Dinner",
    amount: "130",
    date: new Date(2022, 2, 30),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
