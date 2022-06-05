import "./glass-animal.scss";
import { Button } from "../button/button";
export const GlassAnimal = () => {
  return (
    <div className="glass-animal">
      <div className="glass-animal-left">
        <h2>THANK YOU TO GLASS ANIMAL</h2>
        <p>
          "Many of the people I love most in the world have suffered from
          cancer. Physical problems aside, I have seen the psychological and
          social side effects surrounding it overwhelm them. If each t-shirt
          goes a little way towards helping someone find their footing, it’s a
          huge win." Dave Bayley, Glass Animals{" "}
        </p>
        <Button
          text={"BUY THE TEE"}
          onClick={() => {}}
          className={"glass-animal-button"}
        />
      </div>
      <div className="glass-animal-right">
        <img
          src={
            "https://cdn.shopify.com/s/files/1/1024/8221/files/www.merch_3_1400x.png?v=1643968483"
          }
          alt=""
        />
      </div>
    </div>
  );
};
