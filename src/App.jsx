import { useState, useEffect } from "react";
import "./App.css";
import Expenseform from "./components/Expenseform";
import Expenselist from "./components/Expenselist";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  const [showForm, setShowForm] = useState(false);

  // Add Expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setShowForm(false);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    const updated = expenses.filter((item) => item.id !== id);
    setExpenses(updated);
  };

  // Total
  const total = expenses.reduce((sum, item) => sum + item.amt, 0);

  return (
    <div className="app-container">

      {/* Header */}
      <div className="header">
        <div>
          <h1>Expenses</h1>
          <p>Browse and manage all transactions</p>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Expense
        </button>
      </div>

      {/* Total Card */}
      <div className="total-card">
        <p>Total Expense</p>
        <h2>₹ {total.toFixed(2)}</h2>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="popup">
          <div className="popup-content">

            <div className="popup-header">
              <h2>Add New Expense</h2>

              <button
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>

            <Expenseform onAddExpense={addExpense} />
          </div>
        </div>
      )}
      {/* Expense List */}
      <Expenselist
        expenses={expenses}
        onDelete={deleteExpense}
      />
    </div>
  );
}
export default App;
