import "./ExpenseItem.css";
const months = [
  "January",
  "Februrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function ExpenseItem(props) {
  const month = months[props.date.getMonth()]; // Add 1 to get the correct month
  const year = props.date.getFullYear();
  const day = props.date.getDate().toString().padStart(2, "0"); // Using toString() method

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
