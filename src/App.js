import logo from "./logo.svg";
import "./App.css";
import ExpanseItem from "./components/Expanses/ExpanseItem";
import Expanses from "./components/Expanses/Expanses";
import React, { useState } from "react";
import NewExpanses from "./components/NewExpanses/NewExpanses";

const expanse = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 7989.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 24.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Deva's C",
    amount: 200,
    date: new Date(2022, 10, 14),
  },
];

function App() {
  const [expense, setExpense] = useState(expanse);
  const addExpanseHandler = (expanseData) => {
    setExpense( [ expanseData, ...expense])
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets Get Started!"),
  //   React.createElement(Expanses, { items: expanse })
  // );
  
  return (
    <React.Fragment>
      <NewExpanses onAddExpanse={addExpanseHandler} />
      <Expanses items={expense} />
    </React.Fragment>
  );
}

export default App;
