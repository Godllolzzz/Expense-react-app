import React from "react";
import ExpanseForm from "./ExpanseForm";
// import "./NewExpanse.css";

const NewExpanses = (props) => {
  const saveExpanseDataHandler = (enteredExpanseData) => {
    const expanseData = {
      id: 'e'+ Math.random().toString(),
      ...enteredExpanseData,
      
    };
    props.onAddExpanse(expanseData);
  };
  return (
    <div className="new-expanse">
      <ExpanseForm onSaveExpanseData={saveExpanseDataHandler} />
    </div>
  );
};

export default NewExpanses;
