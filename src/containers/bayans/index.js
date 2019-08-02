import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"
import { Button, Col, Row, BackTop, Carousel } from "antd"
import { observer } from "mobx-react"
import "../../styles/bayan.css"
import "antd/dist/antd.css"

const Bayans = observer (
  class extends Component {
    handleButton = () => {
      this.props.store.currentPage = 1;
      window.scroll(0, 0)
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
      return (
        <React.Fragment>
          <BackTop />
          <div className="base-bayan"></div>
          <Row>
            <Col span={24} className={"by-header"}>
              <Carousel autoplay={true} effect="fade" dots={false}>
                <div className="image-container">
                  <h1 className="header-text">Bayans</h1>
                </div>
              </Carousel>
            </Col>
          </Row>
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
                        <Col
                          span={24}
                        >
                          <Link to={`/sunday-majlis`}>
                            <Button 
                            size="large" 
                            className="bayan-btn" 
                            onClick={this.handleButton} 
                            >
                              SUNDAY BAYANS
                            </Button>
                          </Link>
                        </Col>
                        </td>
                      </tr>
                      <tr>
                      <td>
                      <Col
                        // xs={24}
                        // sm={8}
                        // md={4}
                        // lg={4}
                        // xl={4}
                        span={24}
                      >
                        <Link to={`/juma-bayan`}>
                          <Button 
                          size="large" 
                          className="bayan-btn" 
                          onClick={this.handleButton} 
                          >
                            JUMA BAYANS
                          </Button>
                        </Link>
                      </Col>
                      </td>
                      </tr>
                      <tr>
                      <td>
                      <Col
                        // xs={24}
                        // sm={8}
                        // md={4}
                        // lg={4}
                        // xl={4}
                        span={24}
                      >
                        <Link to={`/after-juma-majlis`}>
                          <Button 
                          size="large" 
                          className="bayan-btn" 
                          onClick={this.handleButton} 
                          >
                            AFTER JUMA
                          </Button>
                        </Link>
                      </Col>
                      </td>
                      </tr>
                      {/* <tr>
                      <td>
                      <Col
                        // xs={24}
                        // sm={8}
                        // md={4}
                        // lg={4}
                        // xl={4}
                        span={24}
                        className="bayan-btn"
                      >
                        <Link to={`/old-bayan`}>
                          <Button 
                          size="large" 
                          className="by-bt-btn" 
                          onClick={this.handleButton} 
                          >
                            OLD BAYANS
                          </Button>
                        </Link>
                      </Col>
                      </td>
                      </tr> */}
                      <tr>
                        <td>
                        <Col
                          // xs={24}
                          // sm={8}
                          // md={4}
                          // lg={4}
                          // xl={4}
                          span={24}
                        >
                          <Link to={`/misc-bayan`}>
                            <Button 
                            size="large" 
                            className="bayan-btn" 
                            onClick={this.handleButton}>
                              OTHER BAYANS
                            </Button>
                          </Link>
                        </Col>
                        </td>
                      </tr>
                      </table>
                      </Row>
                    
                  )}
                />
                {/* <Route
                  path={`${match.url}/sunday-majlis`}
                  render={props => (
                    <SundayMajlis
                      {...props}
                      currentPage={currentPage}
                      store={store}
                      itemRender={this.itemRender}
                    />
                  )}
                />
                <Route
                  path={`${match.url}/juma-bayan`}
                  render={props => (
                    <JumaBayan
                      {...props}
                      currentPage={currentPage}
                      store={store}
                      itemRender={this.itemRender}
                    />
                  )}
                />
                <Route
                  path={`${match.url}/after-juma-majlis`}
                  render={props => (
                    <AfterJuma
                      {...props}
                      currentPage={currentPage}
                      store={store}
                      itemRender={this.itemRender}
                    />
                  )}
                />
                <Route
                  path={`${match.url}/old-bayan`}
                  render={props => (
                    <OldBayan
                      {...props}
                      currentPage={currentPage}
                      store={store}
                      itemRender={this.itemRender}
                    />
                  )}
                />
                <Route
                  path={`${match.url}/misc-bayan`}
                  render={props => (
                    <MiscBayan
                      {...props}
                      currentPage={currentPage}
                      store={store}
                      itemRender={this.itemRender}
                    />
                  )}
                /> */}
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