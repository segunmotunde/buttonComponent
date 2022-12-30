import React from "react";
import "../App.css";

function Sectioning(props) {
  const icon = props.cart && (
    <span class="material-symbols-outlined">add_shopping_cart</span>
  );

  return (
    <div>
      {props.type.map((el) => {
        console.log(el);
        return (
          <span>
            {/* <p>{el} Button</p> */}
            <button className={el}>
              {el == "left" && icon}
              Default
              {el == "right" && icon}
            </button>
          </span>
        );
      })}
    </div>
  );
}

export default Sectioning;

// fasle || this will happen
// true  || this will happen
// true && this will happen
// false && this will happen
