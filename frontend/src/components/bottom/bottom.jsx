import { Link } from "react-router-dom";
import "./bottom.scss";
export const Bottom = () => {
  return (
    <div className="Bottom">
      <div className="content">
        <p>
          “Many of our loved ones have battled cancer. When Trekstock approached{" "}
          <br />
          us we jumped at the chance to take part. Together, we hope to make the{" "}
          <br />
          lives of young adults living with cancer a little easier.” Taking Back
          Sunday
        </p>

        <Link to={"/collections"}>BY THE TSHIRT</Link>
      </div>
    </div>
  );
};
