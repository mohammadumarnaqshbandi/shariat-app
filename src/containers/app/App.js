import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../styles/App.scss";
import Home from "../home";
import Navbar from "../../components/common/navbar";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "antd";
import Bayans from "../bayans/index";
import Books from "../books/index";
// Bayan pages imports
import SundayMajlis from "../bayans/components/sunday";
import JumaBayan from "../bayans/components/juma-bayan";
import AfterJuma from "../bayans/components/after-juma";
import MiscBayan from "../bayans/components/misc-bayan";
import Poster from "../poster";

const App = observer(
  class extends Component {
    state = {
      checked: false
    };

    handleClick = page => {
      this.props.store.currentPage = Number(page);
    };

    handleButton = () => {
      this.props.store.currentPage = 1;
    };

    handleLink = () => {
      window.scrollTo(0, 0);
    };

    handleCheckbox = () => {
      this.setState({ checked: !this.state.checked });
    };

    handleNavBtn = () => {
      this.setState({ checked: false });
      this.props.store.searchTerm = "";
      window.scrollTo(0, 0);
    };

    handleLangChange = e => {
      // this.props.store.lang === "eng" ? this.props.store.lang = "urdu" : this.props.store.lang = "eng";
      console.log("Btn Value", e.target.value)
      this.props.store.lang = e.target.value
    }

    itemRender = (current, type, originalElement) => {
      if (type === "prev") {
        return <Button className="link-btn">Previous</Button>;
      }
      if (type === "next") {
        return <Button className="link-btn">Next</Button>;
      }
      return originalElement;
    };

    render() {
      const { store } = this.props;
      const { currentPage } = store;
      return (
        <React.Fragment>
          <Router>
            <React.Fragment>
              <Navbar
                handleCheckbox={this.handleCheckbox}
                handleLang={this.handleLangChange}
                handleNavBtn={this.handleNavBtn}
                checked={this.state.checked}
                store={store}
              />
              <Switch>
                <Route
                  exact
                  path={"/"}
                  render={props => (
                    <Home
                      {...props}
                      store={store}
                      handleLink={this.handleLink}
                    />
                  )}
                />
                <Route
                  path={"/bayans"}
                  render={props => <Bayans {...props} store={store} />}
                />
                <Route path={"/books"} component={Books} />
                <Route
                  path={`/sunday-majlis`}
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
                  path={`/juma-bayan`}
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
                  path={`/after-juma-majlis`}
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
                  path={`/misc-bayan`}
                  render={props => (
                    <MiscBayan
                      {...props}
                      currentPage={currentPage}
                      store={store}
                      itemRender={this.itemRender}
                    />
                  )}
                />
                <Route
                  path={`/poster`}
                  render={props => <Poster {...props} />}
                />
              </Switch>
            </React.Fragment>
          </Router>
        </React.Fragment>
      );
    }
  }
);

export default App;
