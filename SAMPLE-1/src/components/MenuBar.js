import React from "react";
import { Link } from "react-router-dom";

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menuBar">
        <div className="menuItem">
          <div className="menuItem__lv1">
            <span>MENU1</span>
            <ul>
              <li>
                <Link to="/sc0101">SC0101</Link>
              </li>
              <li>SC0102</li>
              <li>SC0103</li>
            </ul>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuItem__lv1">
            <span>MENU2</span>
            <ul>
              <Link to="/sc0201">SC0201</Link>
              <li>SC0202</li>
              <li>SC0203</li>
            </ul>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuItem__lv1">
            <span>MENU3</span>
            <ul>
              <Link to="/sc0301">SC0301</Link>
              <li>SC0302</li>
              <li>SC0303</li>
            </ul>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuItem__lv1">
            <span>MENU4</span>
            <ul>
              <Link to="/sc0401">SC0401</Link>
              <li>SC0402</li>
              <li>SC0403</li>
            </ul>
          </div>
        </div>

        <div className="menuItem">
          <div className="menuItem__lv1">
            <span>MENU5</span>
            <ul>
              <Link to="/sc0501">SC0501</Link>
              <li>SC0502</li>
              <li>SC0503</li>
            </ul>
          </div>
        </div>

        <div className="mobileMenuIcon">햄버거</div>
      </div>
    );
  }
}

export default MenuBar;
