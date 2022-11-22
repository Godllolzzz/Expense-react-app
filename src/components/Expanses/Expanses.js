import React, { useState } from "react";
import ExpanseItem from "./ExpanseItem";
import ExpanseFilter from "./ExpanseFilter";

function Expanses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredexpenses = props.items.filter(
    (data) => data.date.getFullYear() == filteredYear
  );

  let expenseContent = <h2>No Expenses found.</h2>;

  if (filteredexpenses.length > 0) {
    expenseContent = filteredexpenses.map((data) => {
      return (
        <ExpanseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      );
    });
  }
  return (
    <div className="expanses">
      <ExpanseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </div>
  );
}

export default Expanses;
