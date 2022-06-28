import { useState } from "react";
import "./product-top.scss";

export const ProductTop = ({ data }) => {
  const [image, setImage] = useState(data.image1);

  return (
    <div className="Product-top">
      <div className="Product-top-main">
        <img src={image ? image : data.image1} alt="" />
      </div>
      <div className="Product-top-child">
        <img
          src={data.image1}
          className={data.image1 === image ? "border" : null}
          onClick={() => {
            setImage(data.image1);
          }}
          alt=""
        />
        <img
          src={data.image2}
          className={data.image2 === image ? "border" : null}
          onClick={() => {
            setImage(data.image2);
          }}
          alt=""
        />
      </div>
    </div>
  );
};
