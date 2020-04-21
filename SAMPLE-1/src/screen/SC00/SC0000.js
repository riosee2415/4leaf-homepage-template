import React from "react";
import MainBanner from "../../components/mainBanner";
import MainContent1 from "../../components/mainContents/mainContent1";
import MainContent2 from "../../components/mainContents/mainContent2";
import MainContent3 from "../../components/mainContents/mainContent3";
import MainContent4 from "../../components/mainContents/mainContent4";
import Footer from "../../components/Footer";

class SC0000 extends React.Component {
  render() {
    return (
      <div className="MainArea">
        <MainBanner />
        <MainContent1 />
        <MainContent2 />
        <MainContent3 />
        <MainContent4 />
      </div>
    );
  }
}

export default SC0000;
