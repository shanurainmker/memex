import React from "react";

export default function memeImg(props) {
  console.log("peops", props);
  const { randomImg, top, bottom } = props;
  return (
    <div>
      <h2 className="top">{props.imgDet.top}</h2>
      <img src={randomImg} alt="first meme" />
      <h2 className="bottom">{props.imgDet.bottom}</h2>
    </div>
  );
}
