import React from "react";
import Expenseitem from "./Expenseitem";
function Expenselist({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      <h3>Expense List</h3>

      {expenses.length === 0 && <p>no expenses yet...</p>}
      {expenses.map((item) => (
        <Expenseitem key={item.id} item={item} onDelete={onDelete}></Expenseitem>
      ))}

    </div>
  )
}
export default Expenselist