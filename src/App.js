import "./App.css";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCarIsShown] = useState(false);

  const cartIsShownHandler = () => {
    setCarIsShown(true);
  };
  const cartIsHideHandler = () => {
    setCarIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartIsHideHandler} />}
      <Header onShownCart={cartIsShownHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
