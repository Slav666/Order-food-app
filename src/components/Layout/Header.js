import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = ({ onShownCart, onHideCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Real Meals</h1>
        <HeaderCartButton onClick={onShownCart} onHideCart={onHideCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </>
  );
};

export default Header;
