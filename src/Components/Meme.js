import React, { Component } from "react";
import MemeShape from "./MemeShape";
import Header from "./Header";
import Collection from "../constants/Collection";

export default class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collect: [],
    };
  }

  delmemes = (id) => {
    console.log("id", id);
    const updated = this.state.collect.filter((val, i) => {
      //console.log("val", val);
      return parseInt(val.img.id) != parseInt(id);
    });
    this.setState({ collect: updated });
  };

  finalImagesource = (val) => {
    console.log("meme shape", val);

    const _dict = {};
    _dict["img"] = val;
    _dict["like"] = true;

    const _collect = [...this.state.collect];

    if (_collect.includes(_dict)) {
      var _c = _collect.indexOf(_dict);
      _collect.splice(_c, 1);
    } else _collect.push(_dict);

    console.log("_collect--------------", _collect);

    this.setState({
      collect: _collect,
    });
  };
  render() {
    console.log("this.state in meme", this.state);
    return (
      <div>
        <Header />
        <MemeShape getCollection={this.finalImagesource} />

        <Collection collect={this.state.collect} deleteMeme={this.delmemes} />
      </div>
    );
  }
}
