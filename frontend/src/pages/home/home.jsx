import { useDispatch } from "react-redux";
import { HomeCollection } from "../../components/homeCollection/homeCollection";
import { getData } from "../../redux/data/action";
import { Carousel } from "../../components/carousel/carousel";
import { Wolf } from "../../components/wolf-part/wolf";
import { Collection } from "../../components/collection/collection";
import { GlassAnimal } from "../../components/glass-animal/glass-animal";

export const Home = () => {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <div>
      <Carousel />
      <HomeCollection />
      <Wolf />
      <Collection />
      <GlassAnimal />
    </div>
  );
};
