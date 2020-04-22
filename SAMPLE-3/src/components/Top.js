import React from "react";
import logo from "../assets/images/logo/testLogo.png";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

class Top extends React.Component {
  render() {
    return (
      <>
        <div className="top">
          <div className="top__logo">
            <Link to="/">
              <img src={logo} alt="LOGO" width={"120px"} />
            </Link>
          </div>

          <div className="top__menu">
            <MenuBar />
          </div>
        </div>
      </>
    );
  }
}

export default Top;
