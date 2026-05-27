import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // cart items: [{ id, title, price, img, qty }]
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty = 1) => {
    const quantity = Number(qty) || 1;

    setCart((prev) => {
      const existingIndex = prev.findIndex((p) => p.id === item.id);

      if (existingIndex !== -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          qty: next[existingIndex].qty + quantity,
        };
        return next;
      }

      return [
        ...prev,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          img: item.img,
          qty: quantity,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, clearCart }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}