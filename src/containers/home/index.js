import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Carousel, Icon } from "antd";
import "../../styles/home.scss";
import { observer } from "mobx-react";
import Slide from "../../images/slide1.png";
import Slide1 from "../../images/slide2.png";
import Slide2 from "../../images/slide3.png";

const Home = observer(
  class extends Component {
    render() {
      const { store } = this.props;

      const { lang } = store;

      return (
        <React.Fragment>
          <div className="base-home"></div>
          <Row>
            <Col span={24} className="hm-bg">
              <Carousel autoplay={true} dots={false}>
                <div className="image-container">
                  <span className="helper-slide-1"></span>
                  <img src={Slide} alt="" className="slide-img" />
                </div>
                <div className="image-container">
                  <span className="helper-slide-2"></span>
                  <img src={Slide1} alt="" className="slide-img" />
                </div>
                <div className="image-container">
                  <span className="helper-slide-3"></span>
                  <img src={Slide2} alt="" className="slide-img" />
                </div>
              </Carousel>
            </Col>
          </Row>
          <div className="base-home-2"></div>
          <Row>
            <div className="bg-home">
              <Row type="flex" justify="center">
                <div className="pd-20 home-title"> 
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    className="live-broadcast"
                  >
                    {lang === "eng" ? 
                    <h1 className="white-text">Live Bayan</h1> :
                    <h1 className="white-text urdu-heading">جاری بیان</h1>
                  }
                    <iframe
                      src="https://mixlr.com/users/5385796/embed?color=6fb4ef&artwork=true"
                      title="Live Player"
                      scrolling="no"
                      frameBorder="no"
                      marginHeight="0"
                      marginWidth="0"
                      className="live-player"
                    />
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    className="mt-40"
                  >
                    {lang === "eng" ? 
                    <h1 className="text-center white-text">Announcements</h1> :
                    <h1 className="text-center white-text urdu-heading">اعلان</h1>
                  }
                    
                      {lang === "eng" ? <>
                      <p>
                      Bayan by Hazrat Haji Shakeel Ahmad Sb Db is
                      held at Panvel on 1st and 2nd Sunday (11:00 A.M. IST) of
                      every month.
        Mobile: 7021531353
                      <br />
                      Please Listen Live at{" "}
                      <a href="https://mixlr.com/shariatinfo--3" style={{color: "red"}}>Mixlr</a>.
                      <br /> Subscribe to Shariat.info's Official{" "}
                      <a
                        href="https://www.youtube.com/channel/UCoModkBOUWZKFrQWyoIulOw/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="youtube-text">YouTube</span>{" "}
                        <Icon
                          type="youtube"
                          style={{ color: "red" }}
                          theme="filled"
                        />
                      </a>{" "}
                      Channel.
                      </p>
                      </> : 
                      <div className="urdu-text">
                      <p>
                      ہرماہ کے پہلے اور دوسرے اتوار کو حضرت حاجی شکیل احمد صاحب مدظلہ العالی کا بیان
                      شہر پنویل، نئی بمبئی میں گیارہ بجے دن کو ہوتا ہے۔    
                      </p> 
                      <p>
                      مکسلر پر جاری بیان سننے کے لیے یہاں
                      &nbsp;
                      <a href="https://mixlr.com/shariatinfo--3" className="urdu-link">کلک کریں</a>&nbsp;۔
                      </p>
                      <p>
                      شریعت.انفو کے آفیشیل 
                      &nbsp;
                      <a
                        href="https://www.youtube.com/channel/UCoModkBOUWZKFrQWyoIulOw/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="youtube-text">یوٹیوب</span>
                        &nbsp;
                        <Icon
                          type="youtube"
                          style={{ color: "red" }}
                          theme="filled"
                        />
                        &nbsp;
                      </a>
                      چینل کو سبسکرائب کرلیں۔ 
                      </p>
                      </div>
                    }
                  </Col>
                </div>
              </Row>
            </div>
          </Row>
        </React.Fragment>
      );
    }
  }
);

export default Home
