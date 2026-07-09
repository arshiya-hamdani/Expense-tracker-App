import React, { useState } from "react";
import Expenseitem from "./Expenseitem";

function Expenselist({ expenses, onDelete }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredExpenses = expenses.filter((item) => {
    const matchesSearch =
      item.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="🔍 Search by description..." value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Health">Health</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
        </select>

      </div>

      <div className="expense-list">

        {filteredExpenses.length === 0 ? (
          <div className="empty">
            No Expenses Found
          </div>
        ) : (
          filteredExpenses.map((item) => (
            <Expenseitem key={item.id} item={item} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
}
export default Expenselist;
