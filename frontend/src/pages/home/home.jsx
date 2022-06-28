import { useDispatch } from "react-redux";
import { HomeCollection } from "../../components/homeCollection/homeCollection";
import { getData } from "../../redux/data/action";
import { Carousel } from "../../components/carousel/carousel";
import { Wolf } from "../../components/wolf-part/wolf";
import { Collection } from "../../components/collection/collection";
import { GlassAnimal } from "../../components/glass-animal/glass-animal";
import { Bottom } from "../../components/bottom/bottom";
import { Video } from "../../components/video/video";

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
      <Bottom />
      <Video />
    </div>
  );
};
