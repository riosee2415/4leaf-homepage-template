import React from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menuBar">
        <div className="menuBar__item">
          <NavLink to="/SC0101" activeClassName="selectedMenu">
            MENU1
          </NavLink>
        </div>
        <div className="menuBar__item">
          <NavLink to="/SC0201" activeClassName="selectedMenu">
            MENU2
          </NavLink>
        </div>
        <div className="menuBar__item">
          <NavLink to="/SC0301" activeClassName="selectedMenu">
            MENU3
          </NavLink>
        </div>
        <div className="menuBar__item">
          <NavLink to="/SC0401" activeClassName="selectedMenu">
            MENU4
          </NavLink>
        </div>
        <div className="menuBar__item">
          <NavLink to="/SC0501" activeClassName="selectedMenu">
            {" "}
            MENU5
          </NavLink>
        </div>
      </div>
    );
  }
}

export default MenuBar;
