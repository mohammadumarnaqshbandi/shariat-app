import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../styles/App.css";
import Home from "../home";
import Navbar from "../../components/common/navbar";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from "antd";
import Bayans from "../bayans/index";
import Majlis from "../majlis/index";
import About from "../about/index";
import Books from "../books/index";
import Silsilah from "../layout-1/silsilah";
// Bayan pages imports
import SundayMajlis from "../bayans/components/sunday";
import JumaBayan from "../bayans/components/juma-bayan";
import AfterJuma from "../bayans/components/after-juma";
import OldBayan from "../bayans/components/old-bayan";
import MiscBayan from "../bayans/components/misc-bayan";

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
                handleNavBtn={this.handleNavBtn}
                checked={this.state.checked}
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
                <Route path={"/majlis"} component={Majlis} />
                <Route path={"/about"} component={About} />
                <Route path={"/books"} component={Books} />
                <Route path={"/silsilah"} component={Silsilah} />
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
                  path={`/old-bayan`}
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
              </Switch>
            </React.Fragment>
          </Router>
        </React.Fragment>
      );
    }
  }
);

export default App;
