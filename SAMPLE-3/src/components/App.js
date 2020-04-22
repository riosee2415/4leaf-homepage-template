import React from "react";
import Top from "./Top";
import { Route } from "react-router-dom";
import { SC0000, SC0101, SC0201, SC0301, SC0401, SC0501 } from "../screens";

class App extends React.Component {
  render() {
    return (
      <div className="mainArea">
        <Top />

        <Route exact path="/" component={SC0000} />
        <Route exact path="/sc0101" component={SC0101} />
        <Route exact path="/sc0201" component={SC0201} />
        <Route exact path="/sc0301" component={SC0301} />
        <Route exact path="/sc0401" component={SC0401} />
        <Route exact path="/sc0501" component={SC0501} />
      </div>
    );
  }
}

export default App;
