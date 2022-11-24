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
    amount: 798.49,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 124.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Movies",
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
      <h1>EXPENSE RECORD</h1>
      <NewExpanses onAddExpanse={addExpanseHandler} />
      <Expanses items={expense} />
    </React.Fragment>
  );
}

export default App;
