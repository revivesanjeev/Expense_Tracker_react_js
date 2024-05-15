import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>15 August 2023</div>
      <div>
        <h2 className="expense-item expense-item__description">Book</h2>
        <div className="expense-item__price expense-item__description">$10</div>
        <div className="expense-item__location"> Delhi</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
