import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
      <NewExpense />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
