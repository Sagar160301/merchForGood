import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Card = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div data-aos={"fade-up"}>
      <img src={data.image1} alt="" />
      <div className="item-name">{data.name}</div>
      <div>£{data.price}</div>
    </div>
  );
};
