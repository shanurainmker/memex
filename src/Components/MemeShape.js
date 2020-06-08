import React, { Component } from "react";
import InputT from "../constants/InputT";
import Button from "../constants/Button";
import MemeImg from "../constants/MemeImg";

export default class MemeShape extends Component {
  constructor() {
    super();
    this.state = {
      top: "",
      bottom: "",
      imgeApi: null,
      randomImg:
        "https://i.pinimg.com/474x/00/ec/66/00ec66f4b2ae0b724120753982bdef26.jpg",
      memeBacks: [],
      collection: [],
    };
  }

  sendCollect = (imgFav) => {
    console.log("randomImg in memeshapes", imgFav);

    this.props.getCollection(imgFav);
  };
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((resp) => {
        const { memes } = resp.data;
        this.setState({ imgeApi: memes });
      });
  }
  handleChnage = (e) => {
    console.log("e.target.value;", e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  shuffle = () => {
    //  ;
    var num = this.gen(0, this.state.imgeApi.length);
    const urlMeme = this.state.imgeApi[num];
    this.setState({
      randomImg: urlMeme,
      memeBacks: [...this.state.memeBacks, urlMeme],
    });
    console.log("memeHistory", this.state.memeBacks);
  };

  shuffleBack = () => {
    const hist = this.state.memeBacks;
    hist.splice(-1, 1);

    const latestImgNow = hist.pop();

    this.setState({
      memeBacks: hist,
      randomImg: latestImgNow,
    });
  };
  gen(min, max) {
    //   ;
    var _temp = Math.floor(Math.random() * (max - min) + min);
    console.log("gen", _temp);
    return _temp;
  }

  sub() {
    console.log("sub ob");
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <form className="memInput">
          <InputT
            placeholder="top Text"
            name="top"
            handleChnage={this.handleChnage}
            classN="form-control"
          />
          <InputT
            placeholder="Bottom Text"
            name="bottom"
            handleChnage={this.handleChnage}
            classN="form-control"
          />
          <Button
            onclick={this.sub}
            value="ok to downlod"
            className="btn btn-outline-info"
          />{" "}
        </form>
        <hr />
        <div className="MemCon">
          <MemeImg
            imgDet={this.state}
            randomImg={this.state.randomImg}
            sentcollectMene={this.sendCollect}
          />
        </div>
        <hr />
        <div className="memInput foot">
          <span className="mr-2">
            <Button
              onclick={this.shuffleBack}
              value="Back"
              className="btn btn-outline-warning"
            />{" "}
          </span>

          <span className="ml-2">
            <Button
              onclick={this.shuffle}
              value="Next"
              className="btn btn-outline-success"
            />{" "}
          </span>
        </div>
      </div>
    );
  }
}
