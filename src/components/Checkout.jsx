import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    alert("Your order is on the way 🚚🍔");

    navigate("/");
  };

  return (
    <div className="checkoutPage">
      <div className="checkoutCard">

        {/* BACK BUTTON */}
        <button
          className="backBtn"
          onClick={() => navigate("/")}
        >
          ← Back Home
        </button>

        <h1 className="checkoutTitle">
          Checkout
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="checkoutInput"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="checkoutInput"
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="checkoutTextarea"
        />

        <button
          className="checkoutBtn"
          onClick={handleOrder}
        >
          Place Order
        </button>

      </div>
    </div>
  );
}