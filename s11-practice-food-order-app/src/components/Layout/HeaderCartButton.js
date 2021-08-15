import { useContext } from "react";

import CartContext from "../../store/cart-context";

// css module
import classes from "./HeaderCartButton.module.css";

// icon
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const nubmerOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nubmerOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
