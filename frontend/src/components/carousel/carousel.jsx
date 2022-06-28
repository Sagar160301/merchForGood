import { useEffect, useRef, useState } from "react";
import "./carousel.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "../button/button";
import { useSelector } from "react-redux";

export const Carousel = () => {
  const data = useSelector((store) => store.dataReducer.data);
  // console.log(data, "data");
  const [image, setImage] = useState([
    "https://cdn.shopify.com/s/files/1/1024/8221/files/Shopify_Banner_Chemical_Brothers_1400x.png?v=1654700092",
    "https://cdn.shopify.com/s/files/1/1024/8221/files/133867_widescreen_1400x.jpg?v=1626951085",
    "https://cdn.shopify.com/s/files/1/1024/8221/files/www.merch_3_1400x.png?v=1643968483",
    "https://cdn.shopify.com/s/files/1/1024/8221/files/48220601_2207669619292256_8038220599442538496_o_1400x.jpg?v=1587818635",
  ]);
  const [ind, setIndex] = useState(0);

  const intervalRef = useRef();
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleClick(1);
    }, 2000);
    () => {
      clearInterval(interval);
    };
  }, [ind]);
  const handleClick = (value) => {
    setIndex((pre) => {
      if (pre == 3 && value == 1) {
        return 0;
      } else if (pre == 0 && value == -1) {
        return 3;
      }
      return pre + value;
    });
  };
  return (
    <div className="carousel">
      {/* <img src={image[ind]} alt="" /> */}
      {/* <img src={image[ind]} className="animation" alt="" /> */}
      {image.map((el, index) => {
        return index === ind ? (
          <img src={el} key={index} className="animation" />
        ) : null;
      })}

      <div className="carousel-button">
        <Button
          onClick={() => {
            console.log("hello1");
            handleClick(-1);
          }}
          text={<ArrowBackIosIcon />}
        />
        <Button
          onClick={() => {
            console.log("hello1");
            handleClick(+1);
          }}
          text={<ArrowForwardIosIcon />}
        />
      </div>
      <div className="carousel-card animation">
        {data.length === 0 ? null : (
          <>
            <h2>{data[ind].name} - IN STOCK NOW</h2>
            <div className="yellow-border"></div>
            <p>{data[ind].para3}</p>
          </>
        )}

        <Button
          className={"carousel-card-button"}
          text={<ArrowForwardIosIcon />}
          string={"SHOP NOW"}
        />
      </div>
    </div>
  );
};
