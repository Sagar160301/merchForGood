import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./card.scss";
export const Card = ({ data }) => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div
      data-aos={"fade-up"}
      onClick={() => {
        navigate(`/product/${data._id}`);
      }}
    >
      <img src={data.image1} id="card-image" alt="" />
      <div className="item-name">{data.name}</div>

      <div className="item-price">£{data.price}</div>
    </div>
  );
};
