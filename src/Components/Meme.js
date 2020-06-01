import React, { Component } from "react";
import MemeShape from "./MemeShape";
import Header from "./Header";

export default class Meme extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeShape />
      </div>
    );
  }
}
