import React from "react";

function ExpanseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div id="date">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
    </div>
  );
}

export default ExpanseDate;
