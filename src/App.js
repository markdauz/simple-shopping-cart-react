import { useState } from "react";
import "./styles.css";

const products = [
  { id: 1, item: "Apple", price: 1.25 },
  { id: 2, item: "Banana", price: 1.5 },
  { id: 3, item: "Orange", price: 1.75 },
  { id: 4, item: "Lemon", price: 1.5 },
  { id: 5, item: "Grapes", price: 2.25 }
];
export default function App() {
  const [items, setItems] = useState(products);
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Simple Shopping Cart</h1>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>
                {item.item} - ${item.price.toFixed(2)}
              </p>
              <button
                style={{ cursor: "pointer", marginLeft: 5 }}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Cart - {cart.length} item(s)</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>{item.item}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                style={{
                  padding: 8,
                  width: "auto",
                  marginLeft: 5,
                  cursor: "pointer"
                }}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
}
