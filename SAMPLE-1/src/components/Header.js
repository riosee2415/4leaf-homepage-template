import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <Link to="/">LOGO</Link>
        </div>
      </div>
    );
  }
}

export default Header;
