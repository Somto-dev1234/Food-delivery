import React from "react";
import "./CartSidebar.css";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartSidebar({ open, onClose }) {
  const { cart, removeFromCart, clearCart } = useCart();

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`cartOverlay ${open ? "showOverlay" : ""}`}
        onClick={onClose}
      ></div>

      {/* SIDEBAR */}
      <aside className={`cartSidebar ${open ? "showCart" : ""}`}>
        <div className="cartTop">
          <h2>Your Cart</h2>

          <button
            className="cartCloseBtn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="emptyCart">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="cartItems">
              {cart.map((item) => (
                <div className="cartItem" key={item.id}>

                  <img
                    src={item.img}
                    alt={item.title}
                    className="cartItemImg"
                  />

                  <div className="cartItemInfo">
                    <h4>{item.title}</h4>

                    <p>
                      Qty: {item.qty}
                    </p>

                    <p>
                      ${(
                        item.price * item.qty
                      ).toFixed(2)}
                    </p>
                  </div>

                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cartBottom">
              <h3>
                Total: ${total.toFixed(2)}
              </h3>

              <button
                className="clearBtn"
                onClick={clearCart}
              >
                Clear Cart
              </button>

              {/* CHECKOUT BUTTON */}
              <button
                className="checkoutBtn"
                onClick={() => {
                  onClose();
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}