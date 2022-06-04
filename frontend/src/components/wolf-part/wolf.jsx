import { useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "../button/button";
export const Wolf = () => {
  const data = useSelector((store) => store.dataReducer.data);
  const [size, setSize] = useState({ size: "S", color: "White" });
  return (
    <div className="wolf">
      <div className="wolf-image">
        <img src={data[19].image1} alt="" />
      </div>
      <div className="wolf-box">
        <h2>{data[19].name}</h2>
        <h2>{data[19].name} T-SHIRT</h2>
        <p>{data[19].description}</p>
        <h2>£{data[19].price} GBP</h2>
        <select name="" className="wolf-select">
          <option value="">Size-{size.size}</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <select name="" className="wolf-select">
          <option value="">Color-{size.color}</option>
          <option value="White">white</option>
        </select>
        <Button string={"ADD TO CART"} text={<AddIcon />} />
      </div>
    </div>
  );
};
