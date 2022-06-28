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
          disabled={count == 1 ? true : false}
          onClick={() => {
            changeQuantity(count - 1);
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
          <AddIcon />
        </span>
      </p>
    </div>
  );
};
