import React, { Component } from "react";
import { Row, Col, Card, Button, Pagination, BackTop, Carousel } from "antd";
import Plyr from "react-plyr";
import { observer } from "mobx-react";
import "../../../../styles/misc.css"

const MiscBayan = observer(
  class extends Component {
    handleClick = page => {
      this.props.store.currentPage = Number(page);
    };

    componentDidMount() {
      this.props.store.searchTerm = "";
    }

    render() {
      const { store } = this.props;
      const {
        misc,
        itemsPerPage,
        currentPage,
        fetchBayans,
        searchTerm,
        filterBayans,
      } = store;
      return (
        <React.Fragment>
          <BackTop />
          <Row>
            <Col span={24} className={"ms-header"}>
            <Carousel autoplay={true} effect="fade" dots={false}>
              <div className="image-container">
              <h1 className="ms-header-text">Other Bayans</h1>
              </div>
            </Carousel>
            </Col>
          </Row>
          <Row
            gutter={32}
            className="mr-0 ms-bg"
            type="flex"
            justify="space-between"
          >
            {/* <Col span={24}>
              <div className="search-container">
                <Input
                  type="text"
                  placeholder="Search for Misc Bayans..."
                  value={searchTerm}
                  onPressEnter={handleSearch}
                  onChange={handleSearch}
                  className="searchBar"
                />
              </div>
            </Col> */}
            {searchTerm.length === 0 ? (
              <React.Fragment>
                <Col span={24} className="mt-20">
                  <h4 className="text-center white-text">Select Page</h4>
                  <Pagination
                    current={currentPage}
                    onChange={this.handleClick}
                    total={misc.length}
                    pageSize={itemsPerPage}
                  />
                </Col>
                {fetchBayans(misc).map((i, index) => (
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={8}
                    key={i.name + index}
                  >
                    <Card hoverable className="mt-30 recent-card">
                      <p>{i.name}</p>
                      <Plyr
                        url={i.src}
                        type="audio"
                        className={"react-plyr-" + index}
                        controls={[
                          "play",
                          "progress",
                          "current-time",
                          "mute",
                          "volume"
                        ]}
                        title={i.name}
                        preload="none"
                      />
                      <p>
                        <small>
                          {i.date || "N/A"} | {i.category || "N/A"} |{" "}
                          {i.length || "N/A"}
                        </small>
                      </p>
                      <Button href={i.src}>DOWNLOAD</Button>
                    </Card>
                  </Col>
                ))}
              </React.Fragment>
            ) : filterBayans(misc).length !== 0 ? 
            <React.Fragment>
               <h3 className="text-center mt-30">Search results for '{searchTerm}'</h3>
               {(
              filterBayans(misc).map((i, index) => (
                <Col xs={24} sm={12} md={12} lg={8} xl={8} key={i.name + index}>
                  <Card hoverable className="mt-30 recent-card">
                    <p>{i.name}</p>
                    <Plyr
                      url={i.src}
                      type="audio"
                      className={"react-plyr-" + index}
                      controls={[
                        "play",
                        "progress",
                        "current-time",
                        "mute",
                        "volume"
                      ]}
                      title={i.name}
                      preload="none"
                    />
                    <p>
                      <small>
                        {i.date || "N/A"} | {i.category || "N/A"} |{" "}
                        {i.length || "N/A"}
                      </small>
                    </p>
                    <Button href={i.src}>DOWNLOAD</Button>
                  </Card>
                </Col>
              ))
            )}
            </React.Fragment> : (
              <h3 className="text-center mt-30">Nothing found!</h3>
            )}
          </Row>
        </React.Fragment>
      );
    }
  }
);

export default MiscBayan;