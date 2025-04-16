import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Event handler to toggle the cart state
  function handleAddToCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  // Determine the className for the <li> element
  const liClass = isInCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
