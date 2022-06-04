import { useDispatch } from "react-redux";
import { HomeCollection } from "../../components/homeCollection/homeCollection";
import { getData } from "../../redux/data/action";

export const Home = () => {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <div>
      <HomeCollection />
    </div>
  );
};
