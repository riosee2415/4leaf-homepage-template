import React from "react";
import main from "../../assets/images/image/testMain.png";
import facebookIcon from "../../assets/images/icons/facebook.png";
import instagramIcon from "../../assets/images/icons/instagram.png";
import twitterIcon from "../../assets/images/icons/twitter.png";

class SC0000 extends React.Component {
  render() {
    return (
      <div className="main">
        <img src={main} alt="MAIN" width={"98%"} />

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
            <div className="md__col2__icon"></div>
            <div className="md__col2__icon"></div>
            <div className="md__col2__icon"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SC0000;
