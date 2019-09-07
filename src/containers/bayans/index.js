import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Button, Col, Row, BackTop, Carousel } from "antd";
import { observer } from "mobx-react";
import "../../styles/bayan.scss";
import "antd/dist/antd.css";

const Bayans = observer (
  class extends Component {
    handleButton = () => {
      this.props.store.currentPage = 1;
      window.scroll(0, 0);
    };

    // itemRender = (current, type, originalElement) => {
    //   if (type === "prev") {
    //     return <Button className="link-btn">Previous</Button>;
    //   }
    //   if (type === "next") {
    //     return <Button className="link-btn">Next</Button>;
    //   }
    //   return originalElement;
    // };

    render() {
      const { match } = this.props;
      const { store } = this.props;
      const { lang } = store
      return (
        <React.Fragment>
          <BackTop />
          <div className="base-bayan"></div>
          <Row>
            <Col span={24} className={"by-header"}>
              <Carousel autoplay={true} effect="fade" dots={false}>
                <div className="image-container">
                  {lang === "eng" ?
                    <h1 className="header-text white">
                      Bayans
                    </h1> :
                    <h1 className="header-text white urdu-main-heading">
                      بیانات
                    </h1>
                  }
                </div>
              </Carousel>
            </Col>
          </Row>
          <div className="base-bayan-2"></div>
          <div className="bg-bayan">
            <Row>
              <Col span={24}>
                <Switch>
                  <Route
                    exact
                    path={match.url}
                    render={() => (
                      <Row className="btn-center mt-20 row-center">
                        <table align="center">
                          <tr>
                            <td>
                              <Col span={24}>
                                <Link to={`/sunday-majlis`}>
                                  {lang === "eng" ?
                                    <Button
                                      size="large"
                                      className="bayan-btn"
                                      onClick={this.handleButton}
                                    >
                                      SUNDAY BAYANS
                                    </Button> :
                                    <Button
                                      size="large"
                                      className="bayan-btn urdu-btn"
                                      onClick={this.handleButton}
                                    >
                                      اتوارکے بیانات
                                    </Button>
                                  }
                                </Link>
                              </Col>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Col
                                span={24}
                              >
                                <Link to={`/juma-bayan`}>
                                  {lang === "eng" ?
                                    <Button
                                      size="large"
                                      className="bayan-btn"
                                      onClick={this.handleButton}
                                    >
                                      JUMA BAYANS
                                    </Button> :
                                    <Button
                                      size="large"
                                      className="bayan-btn urdu-btn"
                                      onClick={this.handleButton}
                                    >
                                      جمعہ کے بیانات
                                    </Button>
                                  }
                                </Link>
                              </Col>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Col
                                span={24}
                              >
                                <Link to={`/after-juma-majlis`}>
                                  {lang === "eng" ?
                                    <Button
                                      size="large"
                                      className="bayan-btn"
                                      onClick={this.handleButton}
                                    >
                                      AFTER JUMA
                                    </Button> :
                                    <Button
                                      size="large"
                                      className="bayan-btn urdu-btn"
                                      onClick={this.handleButton}
                                    >
                                      جمعہ کے بعد بیانات
                                    </Button>
                                  }
                                </Link>
                              </Col>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Col
                                span={24}
                              >
                                <Link to={`/misc-bayan`}>
                                  {lang === "eng" ?
                                    <Button
                                      size="large"
                                      className="bayan-btn"
                                      onClick={this.handleButton}
                                    >
                                      OTHER BAYANS
                                    </Button> :
                                    <Button
                                      size="large"
                                      className="bayan-btn urdu-btn"
                                      onClick={this.handleButton}
                                    >
                                      دیگر بیانات
                                    </Button>
                                  }
                                </Link>
                              </Col>
                            </td>
                          </tr>
                        </table>
                      </Row>
                    )}
                  />
                </Switch>
              </Col>
            </Row>
          </div>
        </React.Fragment>
      );
    }
  }
);

export default Bayans;