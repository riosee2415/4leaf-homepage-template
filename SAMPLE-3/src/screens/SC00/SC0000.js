import React from "react";
import main from "../../assets/images/image/testMain.png";

class SC0000 extends React.Component {
  render() {
    return (
      <div className="main">
        <img src={main} alt="MAIN" width={"100%"} />

        <div className="main__seper"></div>

        <div className="main__desc md">
          <div className="md__col1">
            <div className="md__title">DUMMY TEXT DUMMY TEXT DUMMY TEXT </div>
            <div className="md__content">
              DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT
            </div>
            <div className="md__content">
              DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT DUMMY TEXT
            </div>
          </div>
          <div className="md__col2">
            <span>ICON</span>
            <span>ICON</span>
            <span>ICON</span>
            <span>ICON</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SC0000;
