import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
