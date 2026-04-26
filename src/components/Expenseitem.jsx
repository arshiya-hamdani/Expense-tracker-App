import React from "react";
function Expenseitem({ item, onDelete }) {
    return (

        <div className="expense-item">
            <span>{item.title}</span>
            <span>₹{item.amt}</span>
            <button className="delete-btn" onClick={() => onDelete(item.id)}>X</button>
        </div>
    )
}
export default Expenseitem