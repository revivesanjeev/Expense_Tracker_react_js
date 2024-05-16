
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFlter'
import Card from "../UI/Card";



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />

      {/* //selecting the year from date and converting it to the string if equal then it will only pass to the expense */}
      {props.expenses
        .filter((expense) => {
          return expense.date.getFullYear().toString() === filteredYear;
        })

        .map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.price}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;