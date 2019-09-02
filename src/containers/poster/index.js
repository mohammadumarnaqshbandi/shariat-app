import React, { Component } from "react";
import { Row, Col, BackTop, } from "antd";
import "antd/dist/antd.css";
import "../../styles/books.css";

class Poster extends Component {
  render() {
    const styles = {
      color: "#ffffff"
    };
    return (
      <React.Fragment>
        <BackTop />
        {/* <div className="line1" style={{height: '1vh',
	backgroundColor: 'rgb(90, 99, 191)'}}></div> */}
        {/* <div className="base-books"></div> */}
        {/* <Row>
          <Col span={24} className={"poster-header"}>
            <Carousel autoplay={true} dots={false}>
              
            </Carousel>
          </Col>
        </Row> */}
        {/* <div className="base-books-2"></div> */}
        {/* <div className="line1" style={{height: '1vh',
	backgroundColor: '#efaad9'}}></div> */}
        {/* <div className="line1" style={{height: '1vh',
    backgroundColor: 'rgb(227, 166, 208)'}}></div> */}
        <div className="bk-background">
          <Row className={"row-top majlis"}>
            <Col span={24} className={"col-top pd-30"} style={styles}>
              <h2 className="text-center white">
                Sorry! This page is under construction.
              </h2>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Poster;
