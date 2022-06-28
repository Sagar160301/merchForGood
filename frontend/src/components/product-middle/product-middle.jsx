import "./product.middle.scss";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Button } from "../button/button";
import { useCallback } from "react";
import { Counter } from "../quantityCounter/Counter";
export const ProductMiddle = ({ data }) => {
  const [size, setSize] = useState({ size: "S", color: "White" });
  const [quantity, setQuantity] = useState(1);
  // console.log(data);

  const changeQuantity = useCallback(
    (value) => {
      setQuantity(value);
    },
    [quantity]
  );
  return (
    <div className="Product-middle">
      <div className="Product-middle-left">
        <h2>{data.name} T-SHIRT</h2>
        <p>
          Thank you to {data.name} for this exclusive artwork, designed and
          donated by the band.
        </p>
        <p>{data.description}</p>
        <p className="font-weight-three">{data.para1}</p>
        <p className="font-weight-three">{data.para2}</p>
        <p className="font-weight-three">{data.para3}</p>
        <p>
          100% of profits from the sale of this tee go directly to Trekstock, to
          help young adults in their 20s or 30s living with, through and beyond
          cancer.
        </p>
        <iframe src={data.video} height="380"></iframe>
      </div>
      <div className="Product-middle-right">
        <select name="">
          <option value="">size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <br />
        <Counter count={quantity} changeQuantity={changeQuantity} />
        <Button string={"ADD TO CART"} text={<AddIcon />} />
      </div>
    </div>
  );
};
