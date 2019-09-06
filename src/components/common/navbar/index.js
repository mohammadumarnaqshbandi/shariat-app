import React from "react";
import "../../../styles/navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "antd/dist/antd.css";
import { Row, Col, Icon, Button } from "antd";
import { observer } from "mobx-react";

const Navbar = observer(props => {
  const { store, handleLang } = props;
  const { lang } = store;

  return (
    <Row>
      <Col span={24} id="lang-bar">
      <Button onClick={handleLang} value="eng" className="lang-btn">English</Button><Button onClick={handleLang} value="urdu" className="lang-btn">Urdu</Button>
      </Col>
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
                  {lang === "eng" ? "Home" : "ہوم پیج"}
                </Link>
              </li>
              <li>
                <Link onClick={props.handleNavBtn} to="/bayans">
                  {lang === "eng" ? "Bayans" : "بیانات"}
                </Link>
              </li>
              <li>
                <Link onClick={props.handleNavBtn} to="/books">
                  {lang === "eng" ? "Books" : "کتابیں"}
                </Link>
              </li>
              <li>
                <Link onClick={props.handleNavBtn} to="/poster">
                  {lang === "eng" ? "Posters" : "پوسٹر"}
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
});

export default Navbar;
