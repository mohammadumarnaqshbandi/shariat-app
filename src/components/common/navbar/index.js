import React from "react";
import "../../../styles/navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "antd/dist/antd.css";
import { Row, Col, Icon } from "antd";

const Navbar = props => {
  return (
    <Row>
      <Col span={24}>
        <nav>
          <input
            type="checkbox"
            id="nav"
            className="hidden"
            onClick={props.handleCheckbox}
            checked={props.checked}
          />
          <label htmlFor="nav" className="nav-btn">
            <i></i>
            <i></i>
            <i></i>
          </label>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Website Logo" />
            </Link>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li>
                <Link onClick={props.handleNavBtn} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={props.handleNavBtn} to="/bayans">
                  Bayans
                </Link>
              </li>
              <li>
                <Link onClick={props.handleNavBtn} to="/books">
                  Books
                </Link>
              </li>
              <li>
                <Link onClick={props.handleNavBtn} to="/poster">
                  Posters
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCoModkBOUWZKFrQWyoIulOw/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    type="youtube"
                    style={{ color: "red" }}
                    theme="filled"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Col>
    </Row>
  );
};

export default Navbar;
