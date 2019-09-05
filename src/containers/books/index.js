import React, { Component } from "react";
import { Row, Col, BackTop, Carousel } from "antd";
import "antd/dist/antd.css";
import "../../styles/books.scss";
import Book1 from "../../images/bk1.jpg";
import Book2 from "../../images/bk2.jpg";
import Book3 from "../../images/bk3.jpg";
import Book4 from "../../images/bk4.jpg";
import Book5 from "../../images/bk5.jpg";

class Books extends Component {
  render() {
    return (
      <React.Fragment>
        <BackTop />
        <div className="base-books"></div>
        <Row>
          <Col span={24} className={"bk-header"}>
            <Carousel autoplay={true} dots={false}>
              <div className="books-container">
                <span className="helper"></span>
                <img src={Book1} alt="" className="book-img" />
              </div>
              <div className="books-container">
                <span className="helper"></span>
                <img src={Book2} alt="" className="book-img" />
              </div>
              <div className="books-container">
                <span className="helper"></span>
                <img src={Book3} alt="" className="book-img" />
              </div>
              <div className="books-container">
                <span className="helper"></span>
                <img src={Book4} alt="" className="book-img" />
              </div>
              <div className="books-container">
                <span className="helper"></span>
                <img src={Book5} alt="" className="book-img" />
              </div>
            </Carousel>
          </Col>
        </Row>
        <div className="base-books-2"></div>
        <div className="bk-background">
          <Row className={"row-top majlis"}>
            <Col span={24} className={"col-top pd-30"}>
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

export default Books;
