import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <img src={data.image1} alt="" />
      <div className="item-name">{data.name}</div>

      <div>£{data.price}</div>
    </div>
  );
};
