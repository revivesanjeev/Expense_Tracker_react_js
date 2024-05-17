
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFlter'
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

 const filteredExpenses = props.expenses.filter((expense) => {
   return expense.date.getFullYear().toString() === filteredYear;
 });



  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />

      {/* //selecting the year from date and converting it to the string if equal then it will only pass to the expense */}
      <ExpensesChart filteredExpensesForChart={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;