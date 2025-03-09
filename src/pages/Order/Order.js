import React, { useState } from "react";
import "./order.css";

const Order = () => {
  const [orders, setOrders] = useState([
    { id: 1, category: "", quantity: "", service: "" },
  ]);

  // Handle change in input fields
  const handleChange = (index, field, value) => {
    const updatedOrders = [...orders];
    updatedOrders[index][field] = value;
    setOrders(updatedOrders);
  };

  // Add new order block
  const addOrder = () => {
    setOrders([...orders, { id: Date.now(), category: "", quantity: "", service: "" }]);
  };

  // Delete an order block
  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Orders:", orders);
    alert("Order placed successfully!");
    setOrders([{ id: 1, category: "", quantity: "", service: "" }]); // Reset form
  };

  return (
    <div className="order-container">
      <h2>Create Order</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        {orders.map((order, index) => (
          <div className="order-block" key={order.id}>
            <label>Category:</label>
            <select
              value={order.category}
              onChange={(e) => handleChange(index, "category", e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Shirt">Shirt</option>
              <option value="Pant">Pant</option>
              <option value="Shoes">Shoes</option>
            </select>

            <label>Quantity:</label>
            <input
              type="number"
              value={order.quantity}
              onChange={(e) => handleChange(index, "quantity", e.target.value)}
              required
              min="1"
            />

            <label>Service:</label>
            <select
              value={order.service}
              onChange={(e) => handleChange(index, "service", e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option value="Dry-Cleaning">Dry-Cleaning</option>
              <option value="Starch">Starch</option>
              <option value="Press">Press</option>
            </select>

            {/* Delete Button */}
            {orders.length > 1 && (
              <button className="delete-btn" type="button" onClick={() => deleteOrder(order.id)}>
                Remove Order
              </button>
            )}
          </div>
        ))}

        <button type="button" className="add-more-btn" onClick={addOrder}>
          Add More Order
        </button>

        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order;
