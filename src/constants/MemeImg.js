import React, { useState } from "react";
import OffLike from "../img/offlike.png";
import OnLike from "../img/onlike.png";

export default function MemeImg(props) {
  const [img, setImg] = useState(false);

  console.log("peops", props);
  const { randomImg, top, bottom, imgDet } = props;
  console.log("peops---", imgDet.imgeApi);
  const src = randomImg.url;
  console.log("src", src);
  const likes = () => {
    // ;
    // console.log("props", props);
    // console.log("randpmImg", props.randomImg);
    // setImg(false);
    const imgFav = props.imgDet.imgeApi;

    // setImg(!img);
    props.sentcollectMene(randomImg);
  };
  //const srcImg = randomImg.src;
  // console.log("srcIMg----", srcImg);
  return (
    <div>
      <h2 className="top">{props.imgDet.top}</h2>
      <img src={src ? src : randomImg} alt="first meme" />
      {/* <button> */}
      <button onClick={likes}>
        <img
          src={img ? OnLike : OffLike}
          width={20}
          height={20}
          className="like"
        />
      </button>
      {/* </button> */}
      <h2 className="bottom">{props.imgDet.bottom}</h2>
    </div>
  );
}
