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

  const items = useMemo(
    () => [
      {
        id: "burger-dreams",
        title: "Burger Dreams",
        category: "Burgers",
        price: 9.2,
        img: burgerDreamsImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "burger-waldo",
        title: "Burger Waldo",
        category: "Burgers",
        price: 10.0,
        img: burgerWaldoImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "burger-cali",
        title: "Burger Cali",
        category: "Burgers",
        price: 8.0,
        img: burgerCaliImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "burger-bacon-buddy",
        title: "Burger Bacon Buddy",
        category: "Burgers",
        price: 9.99,
        img: burgerBaconBuddyImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "burger-spicy",
        title: "Burger Spicy",
        category: "Burgers",
        price: 9.2,
        img: burgerSpicyImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "burger-classic",
        title: "Burger Classic",
        category: "Burgers",
        price: 8.0,
        img: burgerClassicImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "side-fries",
        title: "French Fries",
        category: "Sides",
        price: 4.5,
        img: sideFriesImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "drink-cola",
        title: "Cola Drink",
        category: "Drinks",
        price: 2.99,
        img: drinkColaImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
      {
        id: "drink-fanta",
        title: "Fanta Drink",
        category: "Drinks",
        price: 2.99,
        img: drinkFantaImg,
        desc: "Lorem Ipsum is simply dummy text.",
      },
    ],
    []
  );

  // ✅ qty map starts AFTER items exists
  const [qty, setQty] = useState(() => {
    const initial = {};
    for (const it of items) initial[it.id] = 1;
    return initial;
  });

  const fmt = (n) => Number(n).toFixed(2);

  const filtered = useMemo(
    () => items.filter((it) => it.category === activeCategory),
    [activeCategory, items]
  );

  return (
    <section id="menu" className="menuSection">
      <div className="menuContainer">
        <h2 className="menuTitle">Browse our menu</h2>

        <p className="menuSubtitle">
          Use our menu to place an order online, or{" "}
          <span className="menuLinkish">phone</span> our store to place a pickup
          order. Fast and fresh food.
        </p>

        <div className="menuTabsRow">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`menuTab ${c === activeCategory ? "menuTabActive" : ""}`}
              type="button"
            >
              {c}
            </button>
          ))}
        </div>

        <div className="menuGrid">
          {filtered.map((it) => (
            <article key={it.id} className="menuCard">
              <img className="menuCardImg" src={it.img} alt={it.title} />

              <div className="menuCardMain">
                <div className="menuCardHeader">
                  <h3 className="menuCardTitle">{it.title}</h3>

                  <div className="menuPrice">${fmt(it.price)} USD</div>
                </div>

                <p className="menuDesc">{it.desc}</p>

                <div className="menuCardBottom">
                  <input
                    className="menuQtyInput"
                    type="number"
                    min={1}
                    value={qty[it.id] ?? 1}
                    onChange={(e) => {
                      const v = Math.max(1, Number(e.target.value));
                      setQty((prev) => ({
                        ...prev,
                        [it.id]: v,
                      }));
                    }}
                  />

                 <button
  className="menuAddBtn"
  type="button"
  onClick={() => {
    addToCart(it, qty[it.id] ?? 1);
    // alert(`${it.title} added to cart 🛒`);
  }}
>
  Add to cart
</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="menuFooter">
          <button className="menuFullBtn" type="button">
            See Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}