import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.price;
  });

  const maxValue = Math.max(...expensesOnlyArray);

  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "March", expenseValue: 0 },
    { expenseMonth: "April", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "June", expenseValue: 0 },
    { expenseMonth: "July", expenseValue: 0 },
    { expenseMonth: "AUg", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  for (let i = 0; i < props.chartExpenses.length; i++) {
    chartData[props.chartExpenses[i].date.getMonth()].expenseValue +=
      props.chartExpenses[i].price;
  }

  return (
    <div className="chart">
      {chartData.map((monthData) => {
        return (
          <ChartBar
            key={monthData.expenseMonth}
            label={monthData.expenseMonth}
            value={monthData.expenseValue}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
