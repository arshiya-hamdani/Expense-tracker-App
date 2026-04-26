import React, { useState, useRef } from "react"
function Expenseform({ onAddExpense }) {
  const [title, Settitle] = useState("")
  const [amt, Setamt] = useState("")
  const titleref = useRef("")
  const handlesubmit = (e) => {
    e.preventDefault()
    if (!title || !amt) {
      alert("please fill out fields")
      return
    }
    const newexpense = {
      id: Date.now(),
      title,
      amt: parseFloat(amt)

    }
    onAddExpense(newexpense)
    Settitle("")
    Setamt("")
    titleref.current.focus();


  }
  return (
    <form className="form-container" onSubmit={handlesubmit}>
      <input type='text' placeholder='📝Expense Title' value={title} onChange={(e) => Settitle(e.target.value)}
        ref={titleref} />
      <input type='number' placeholder='💵Expense Amount' value={amt} onChange={(e) => Setamt(e.target.value)} />
      <button type='submit'>➕Add </button>
    </form>
  )
}
export default Expenseform


