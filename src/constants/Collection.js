import React from "react";

export default function Collection(props) {
  console.log("props colllection----", props);

  const collect = props.collect.map((item, i) => {
    //   ;
    console.log("item", item);
    return (
      <li key={item.img.id}>
        {item.img.name}{" "}
        <button onClick={() => props.deleteMeme(item.img.id)}> del</button>
      </li>
    );
  });

  //console.log("arr", arr);

  //arr.splice(toremove, 1);

  //console.log("collect", collect);
  return (
    <div>
      <div>
        <h2>Collection></h2>

        <div>
          {" "}
          {props.collect.length ? collect : "no collect"}
          {/* //{collect} */}
        </div>
      </div>
    </div>
  );
}
