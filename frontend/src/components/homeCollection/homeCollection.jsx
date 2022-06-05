import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Card } from "../card/card";
import "./homeCollection.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const HomeCollection = () => {
  const navigate = useNavigate();
  const data = useSelector((store) => store.dataReducer.data);
  const goToCollection = () => {
    navigate("/collections");
    // console.log("hello");
  };
  // console.log(data, "hello");
  return (
    <div className="collectionHome">
      <h2>EXCLUSIVE 2022 COLLECTION</h2>
      <div className="collectionHome-items">
        {data.length === 0
          ? null
          : data.map((el, index) => {
              if (index <= 7) {
                return <Card data={el} key={index} />;
              }
            })}
      </div>
      <h2 onClick={goToCollection} className={"icon"}>
        SHOP COLLECTIONS NOW <ArrowForwardIosIcon />
      </h2>
    </div>
  );
};
