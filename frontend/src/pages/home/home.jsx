import { useDispatch } from "react-redux";
import { HomeCollection } from "../../components/homeCollection/homeCollection";
import { getData } from "../../redux/data/action";
import { Carousel } from "../../components/carousel/carousel";
import { Wolf } from "../../components/wolf-part/wolf";

export const Home = () => {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <div>
      <Carousel />
      <HomeCollection />
      <Wolf />
    </div>
  );
};
