import { useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import "./collection.scss";
export const Collection = () => {
  const data = useSelector((store) => store.dataReducer.data);
  console.log(data);
  return (
    <div className="collection-items">
      {data.map((el, index) => {
        return <Card data={el} key={index} />;
      })}
    </div>
  );
};
