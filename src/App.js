import "./App.css";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCarIsShown] = useState(false);

  const cartIsShownHandler = () => {
    setCarIsShown(true);
  };
  const cartIsHideHandler = () => {
    setCarIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={cartIsHideHandler}/>}
      <Header onShownCart={cartIsShownHandler} />

      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
