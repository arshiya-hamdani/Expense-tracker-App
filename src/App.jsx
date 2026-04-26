import { useState, useEffect } from 'react'
import './App.css'
import Expenseform from './components/Expenseform'
import Expenselist from './components/Expenselist'

function App() {
  const [expenses, setExpenses] = useState([])
  const addexpenses = (expense) => {
    setExpenses((prev) => [...prev, expense])
  }
  const delexpense = (id) => {
    const updated = expenses.filter((item) => item.id !== id);
    setExpenses(updated);
  }
  const total = expenses.reduce((sum, item) => sum + item.amt, 0);
  
  return (
    <div className="app-container">
      <h1>💰Expense tracker </h1>
      <Expenseform onAddExpense={addexpenses} />
      <h3 className='total-expense'>Total Expense:  ₹{total}</h3>
      <Expenselist expenses={expenses} onDelete={delexpense} />

    </div>
  )
}
export default App