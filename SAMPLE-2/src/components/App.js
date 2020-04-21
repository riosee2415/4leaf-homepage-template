import React from "react";

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

          <div className="ma1__menu">
            <div>MENU1</div>
            <div>MENU2</div>
            <div>MENU3</div>
            <div>MENU4</div>
          </div>
        </div>
        <div className="mainArea__col-2"></div>
      </div>
    );
  }
}

export default App;
