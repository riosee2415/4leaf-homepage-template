import React from "react";
import bannerTest from "../assets/banner/bannerTest.png";

class MainBanner extends React.Component {
  render() {
    return (
      <div className="mainBanner">
        <img className="mainBanner__images" src={bannerTest} alt="mainBanner" />
        <div className="mainBanner__txt1">DUMMY TEXT</div>
        <div className="mainBanner__txt2">DUMMY TEXT</div>
        <div className="mainBanner__txt3">DUMMY TEXT</div>

        <div className="mainBanner__box1">
          <div>DUMMY TEXT</div>
          <div>DUMMY TEXT</div>
          <div>DUMMY TEXT</div>
        </div>
      </div>
    );
  }
}

export default MainBanner;
