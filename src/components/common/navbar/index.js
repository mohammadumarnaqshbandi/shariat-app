import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Row, Col, Icon, Button } from "antd";
import { observer } from "mobx-react";
import "../../../styles/navbar.scss";
import logo from "../../../images/web-logo.png";
import logoUrdu from "../../../images/web-logo-urdu.png";

const Navbar = observer(props => {
  const { store, handleLang } = props;
  const { lang } = store;

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
              {lang === "eng" ? 
                <img src={logo} alt="Website Logo - English" /> :
                <img src={logoUrdu} alt="Website Logo - Urdu" />
              }
            </Link>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li>
                {lang === "eng" ? 
                  <Link onClick={props.handleNavBtn} to="/">
                    Home
                  </Link> :
                  <Link onClick={props.handleNavBtn} to="/" className="urdu-menu">
                    ہوم پیج
                  </Link>
                }
              </li>
              <li>
                {lang === "eng" ? 
                  <Link onClick={props.handleNavBtn} to="/bayans">
                    Bayans
                  </Link> :
                  <Link onClick={props.handleNavBtn} to="/bayans" className="urdu-menu">
                    بیانات
                  </Link>
                }
              </li>
              <li>
                {lang === "eng" ?
                  <Link onClick={props.handleNavBtn} to="/books">
                    Books
                  </Link> :
                  <Link onClick={props.handleNavBtn} to="/books" className="urdu-menu">
                    کتابیں
                  </Link>
                }
              </li>
              <li>
                {lang === "eng" ? 
                  <Link onClick={props.handleNavBtn} to="/poster">
                    Posters
                  </Link> :
                  <Link onClick={props.handleNavBtn} to="/poster" className="urdu-menu">
                    پوسٹر
                  </Link>
                }
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
          <Col span={24} id="lang-bar">
      <Button onClick={handleLang} value="eng" className="lang-btn">ENGLISH</Button>&nbsp;
      <Button onClick={handleLang} value="urdu" className="lang-btn">اردو</Button>
      </Col>
        </nav>
      </Col>
    </Row>
  );
});

export default Navbar;
