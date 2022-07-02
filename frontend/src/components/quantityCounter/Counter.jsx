import React from "react";
import "./Counter.scss";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";

export const Counter = ({ count, changeQuantity }) => {
  return (
    <div className="quantity-counter">
      <p>Quantity</p>
      <p>
        <span
          onClick={() => {
            count > 1 ? changeQuantity(count - 1) : null;
          }}
        >
          <MinimizeIcon />
        </span>
        <span>{count}</span>
        <span
          onClick={() => {
            changeQuantity(count + 1);
          }}
        >
          <AddIcon className="counter-margin" />
        </span>
      </p>
    </div>
  );
};
