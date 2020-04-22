import React from "react";
import MenuBar from "./MenuBar";

class App extends React.Component {
  render() {
    return (
      <div className="mainArea">
        <div className="mainArea__col-1 ma1">
          <div className="ma1__topBox">
            <div className="ma1__title">TEMPLATE</div>
            <div className="ma1__desc">DESC</div>
            <div className="ma1__desc">DESC</div>
            <div className="ma1__desc">DESC</div>
          </div>
          <MenuBar />
        </div>

        <div className="mainArea__col-2"></div>
      </div>
    );
  }
}

export default App;
