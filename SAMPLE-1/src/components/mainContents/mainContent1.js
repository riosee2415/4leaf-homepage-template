import React from "react";

class MainContent1 extends React.Component {
  render() {
    return (
      <div className="mainContent1 mc1">
        <div className="mc1__title">DUMMY TEXT</div>
        <div className="mc1__desc">
          <div>DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT</div>
          <div>DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT</div>
          <div>DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT</div>
        </div>
        <div className="mc1__img">
          <div className="mc__img__source"> 100 x100 || 70 x 70</div>
          <div className="mc__img__source"> 100 x100 || 70 x 70</div>
          <div className="mc__img__source"> 100 x100 || 70 x 70</div>
          <div className="mc__img__source"> 100 x100 || 70 x 70</div>
        </div>
      </div>
    );
  }
}

export default MainContent1;
