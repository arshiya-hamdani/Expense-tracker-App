import React, { useState } from "react";

function Expenseform({ onAddExpense, onClose }) {
  const [amt, setAmt] = useState("");
  const [category, setCategory] = useState("");
  const [payment, setPayment] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amt || !category || !payment || !date) {
      alert("Please fill all required fields");
      return;
    }
    const newExpense = {
      id: Date.now(),
      amt: parseFloat(amt),
      category,
      payment,
      description,
      date,
      time,
      notes,
    };

    onAddExpense(newExpense);

    setAmt("");
    setCategory("");
    setPayment("");
    setDescription("");
    setDate("");
    setTime("");
    setNotes("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Add New Expense</h2>
        <p>Record a new transaction</p>
      </div>
      <div className="field">
        <label>Amount</label>
        <input  type="number" placeholder="₹ 0.00" value={amt}  onChange={(e) => setAmt(e.target.value)}
        />
      </div>

      <div className="row">
        <div className="field">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option>Food</option>
            <option>Shopping</option>
            <option>Transport</option>
            <option>Bills</option>
            <option>Health</option>
            <option>Entertainment</option>
            <option>Education</option>
          </select>
        </div>

        <div className="field">
          <label>Payment Method</label>
          <select value={payment} onChange={(e) => setPayment(e.target.value)} >
            <option value="">Select Payment</option>
            <option>Cash</option>
            <option>UPI</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label>Description</label>
        <textarea rows="3"  placeholder="What was this expense for?" value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="row">
        <div className="field">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>

        <div className="field">
          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
      </div>

      <div className="field">
        <label>Notes (Optional)</label>
        <textarea rows="3" placeholder="Additional details..." value={notes}
          onChange={(e) => setNotes(e.target.value)} ></textarea>
      </div>

      <div className="button-group">
        <button type="submit" className="submit-btn">
          ✔️ Add Expense
        </button>
      </div>
    </form>
  );
}
export default Expenseform;
