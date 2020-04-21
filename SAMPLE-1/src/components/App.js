import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import { SC0101, SC0201, SC0301, SC0401, SC0501 } from "../screen";
import SC0000 from "../screen/SC00/SC0000";

class App extends React.Component {
  render() {
    return (
      <div className="MainArea">
        <div className="topArea">
          <Header />
          <MenuBar />
        </div>

        {/* SC00 */}
        <Route exact path="/" component={SC0000} />

        {/* SC01 */}
        <Route exact path="/sc0101" component={SC0101} />

        {/* SC02 */}
        <Route exact path="/sc0201" component={SC0201} />

        {/* SC03 */}
        <Route exact path="/sc0301" component={SC0301} />

        {/* SC04 */}
        <Route exact path="/sc0401" component={SC0401} />

        {/* SC05 */}
        <Route exact path="/sc0501" component={SC0501} />

        <Footer />
      </div>
    );
  }
}

export default App;
