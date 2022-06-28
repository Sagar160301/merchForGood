import { useState } from "react";
import "./video.scss";
import img1 from "../../public/video1.png";
import img2 from "../../public/video-2.png";
import img3 from "../../public/video-3.png";

export const Video = () => {
  const [video, setVideo] = useState(
    "https://www.youtube.com/embed/KqsOp5U5Ob0"
  );
  return (
    <div className="Video">
      <h2>HOW WILL MAKE YOU A DIFFERENCE</h2>
      <div className="yellow-border"></div>
      <div className="Video-mainVideo">
        <iframe
          width="80%"
          height="600vh"
          src={video}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
      </div>
      <div className="Video-image">
        <img
          src={img1}
          alt=""
          onClick={() => {
            setVideo("https://www.youtube.com/embed/KqsOp5U5Ob0");
          }}
          className={
            video === "https://www.youtube.com/embed/KqsOp5U5Ob0"
              ? "border"
              : null
          }
        />
        <img
          src={img2}
          alt=""
          onClick={() => {
            setVideo("https://www.youtube.com/embed/_n77krA_98Q");
          }}
          className={
            video === "https://www.youtube.com/embed/_n77krA_98Q"
              ? "border"
              : null
          }
        />
        <img
          src={img3}
          alt=""
          onClick={() => {
            setVideo("https://www.youtube.com/embed/yuQvz6Ui03k");
          }}
          className={
            video === "https://www.youtube.com/embed/yuQvz6Ui03k"
              ? "border"
              : null
          }
        />
      </div>
    </div>
  );
};
