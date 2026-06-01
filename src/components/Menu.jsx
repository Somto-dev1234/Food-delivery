import { useMemo, useState } from "react";
import "./menu.css";
import { useCart } from "../context/CartContext";

import burgerDreamsImg from "../assets/burger-dreams.jpg";
import burgerWaldoImg from "../assets/burger-waldo.jpg";
import burgerCaliImg from "../assets/burger-cali.jpg";
import burgerBaconBuddyImg from "../assets/burger-bacon-buddy.jpg";
import burgerSpicyImg from "../assets/burger-spicy.jpg";
import burgerClassicImg from "../assets/burger-classic.jpg";
import sideFriesImg from "../assets/side-fries.jpg";
import drinkColaImg from "../assets/drink-cola.jpg";
import drinkFantaImg from "../assets/drink-fanta.jpg";

export default function Menu() {
  const { addToCart } = useCart();

  const categories = useMemo(() => ["Burgers", "Sides", "Drinks"], []);
  const [activeCategory, setActiveCategory] = useState("Burgers");
  const [toast, setToast] = useState("");

  const items = useMemo(
    () => [
      { id: "burger-dreams", title: "Burger Dreams", category: "Burgers", price: 9.2, img: burgerDreamsImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "burger-waldo", title: "Burger Waldo", category: "Burgers", price: 10.0, img: burgerWaldoImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "burger-cali", title: "Burger Cali", category: "Burgers", price: 8.0, img: burgerCaliImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "burger-bacon-buddy", title: "Burger Bacon Buddy", category: "Burgers", price: 9.99, img: burgerBaconBuddyImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "burger-spicy", title: "Burger Spicy", category: "Burgers", price: 9.2, img: burgerSpicyImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "burger-classic", title: "Burger Classic", category: "Burgers", price: 8.0, img: burgerClassicImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "side-fries", title: "French Fries", category: "Sides", price: 4.5, img: sideFriesImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "drink-cola", title: "Cola Drink", category: "Drinks", price: 2.99, img: drinkColaImg, desc: "Lorem Ipsum is simply dummy text." },
      { id: "drink-fanta", title: "Fanta Drink", category: "Drinks", price: 2.99, img: drinkFantaImg, desc: "Lorem Ipsum is simply dummy text." },
    ],
    []
  );

  // qty state
  const [qty, setQty] = useState(() => {
    const obj = {};
    items.forEach((it) => (obj[it.id] = 1));
    return obj;
  });

  const filtered = items.filter((it) => it.category === activeCategory);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <section id="menu" className="menuSection">

      {toast && <div className="toast">{toast}</div>}

      <div className="menuContainer">
        <h2 className="menuTitle">Browse our menu</h2>

        <div className="menuTabsRow">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`menuTab ${c === activeCategory ? "menuTabActive" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="menuGrid">
          {filtered.map((it) => (
            <article key={it.id} className="menuCard">
              <img src={it.img} alt={it.title} className="menuCardImg" />

              <div className="menuCardMain">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>

                <div className="menuCardBottom">

                  {/* ✅ NEW QUANTITY CONTROL */}
                  <div className="qtyControl">
                    <button
                      className="qtyBtn"
                      onClick={() =>
                        setQty((p) => ({
                          ...p,
                          [it.id]: Math.max(1, (p[it.id] || 1) - 1),
                        }))
                      }
                    >
                      −
                    </button>

                    <span className="qtyValue">{qty[it.id] || 1}</span>

                    <button
                      className="qtyBtn"
                      onClick={() =>
                        setQty((p) => ({
                          ...p,
                          [it.id]: (p[it.id] || 1) + 1,
                        }))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="menuAddBtn"
                    onClick={() => {
                      addToCart(it, qty[it.id] || 1);
                      showToast(`${it.title} added to cart 🛒`);

                      // 🔥 RESET BACK TO 1 AFTER ADDING
                      setQty((p) => ({ ...p, [it.id]: 1 }));
                    }}
                  >
                    Add to cart
                  </button>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}