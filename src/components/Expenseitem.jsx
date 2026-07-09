import React from "react";

function Expenseitem({ item, onDelete }) {
  const icons = {
    Food: "🍔",
    Shopping: "🛍️",
    Transport: "🚗",
    Bills: "⚡",
    Health: "💚",
    Entertainment: "🎬",
    Education: "📚",
  };

  return (
    <div className="expense-item">
      <div className="expense-left">
        <div className="icon-box">
          {icons[item.category] || "💰"}
        </div>

        <div className="expense-details">
          <span className="category-badge">
            {item.category}
          </span>

          <p>
            <strong>Payment:</strong> {item.payment}
          </p>

          {item.description && (
            <p>
              <strong>Description:</strong> {item.description}
            </p>
          )}

          {item.notes && (
            <p>
              <strong>Notes:</strong> {item.notes}
            </p>
          )}
        </div>
      </div>

      <div className="expense-right">
        <div className="date-time">
          <p>{item.date}</p>
          {item.time && <span>{item.time}</span>}
        </div>

        <h2 className="amount">
          ₹ {item.amt}
        </h2>

        <button
          className="delete-btn"
          onClick={() => onDelete(item.id)}>Delete
        </button>
      </div>
    </div>
  );
}
export default Expenseitem;
