import React from "react";
import Logo from "../../src/img/memelogo.jpeg";

export default function Header() {
  return (
    <div
      style={{
        display: "inline-flex",
        width: "100%",
        borderBottom: "1px solid gray",
      }}
    >
      <img src={Logo} width={100} className="imgSet" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "35px",
          marginLeft: "10px",
        }}
      >
        Generator
      </div>
    </div>
  );
}
