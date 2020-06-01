import React from "react";
import Logo from "../../src/img/memelogo.jpeg";

export default function Header() {
  return (
    <div>
      <img src={Logo} width={100} className="imgSet" />
    </div>
  );
}
