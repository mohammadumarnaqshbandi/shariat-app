import React, { Component } from "react";
import { Row, Col, Card, Button, Pagination, BackTop, Carousel } from "antd";
import Plyr from "react-plyr";
import { observer } from "mobx-react";
import '../../../../styles/sunday.scss';

const SundayMajlis = observer(
  class extends Component {
    handleClick = page => {
      this.props.store.currentPage = Number(page);
    };

    componentDidMount() {
      this.props.store.searchTerm = "";
    }

    render() {
      const { store, itemRender } = this.props;
      const {
        sunday,
        lang,
        itemsPerPage,
        currentPage,
        fetchBayans,
        searchTerm,
        filterBayans
      } = store;
      return (
        <React.Fragment>
          <BackTop />
          <div className="hairline"></div>
          {/* <div className="bayan-header">
           <h1 className="text-center black">Sunday Majlis</h1>
          </div> */}
          <Row>
            <Col span={24} className={"sd-header"}>
              <Carousel autoplay={true} effect="fade" dots={false}>
                <div className="image-container">
                  {lang === "eng" ?
                    <h1 className="header-text">Sunday Bayans</h1> :
                    <h1 className="header-text urdu-main-heading">اتوارکے بیانات</h1>
                  }
                </div>
              </Carousel>
            </Col>
          </Row>
          <div className="sd-color">
            <Row
              gutter={32}
              className="mr-0"
              type="flex"
              justify="space-between"
              style={{ marginLeft: "0" }}
            >
              {/* <Col span={24} className="bayan-header">
              <h1 className="text-center">SUNDAY MAJLIS</h1>
            </Col> */}
              {/* <Col span={24}>
              <Input
                type="text"
                placeholder="Search for Sunday bayans..."
                value={searchTerm}
                onPressEnter={handleSearch}
                onChange={handleSearch}
                className="searchBar"
              />
            </Col> */}
              {searchTerm.length === 0 ? (
                <React.Fragment>
                  <Col span={24} className="mt-20">
                    <h5 className="text-center">Select Page</h5>
                    <Pagination
                      current={currentPage}
                      onChange={this.handleClick}
                      total={sunday.length}
                      pageSize={itemsPerPage}
                      itemRender={itemRender}
                    />
                  </Col>
                  {fetchBayans(sunday).map((i, index) => (
                    <Col
                      xs={24}
                      sm={12}
                      md={12}
                      lg={8}
                      xl={8}
                      key={i.name + index}
                    >
                      <Card hoverable className="mt-30 recent-card sd">
                        <p>{i.name}</p>
                        <Plyr
                          url={i.src}
                          type="audio"
                          className={`react-plyr-${index} sd`}
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
                            {i.date.split("/").join(".") || "N/A"} |{" "}
                            {i.category || "N/A"} | {i.length || "N/A"}
                          </small>
                        </p>
                        <Button href={i.src} size="large">
                          DOWNLOAD
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </React.Fragment>
              ) : filterBayans(sunday).length !== 0 ? (
                <React.Fragment>
                  <h3 className="text-center mt-30">
                    Search results for '{searchTerm}'
                  </h3>
                  {filterBayans(sunday).map((i, index) => (
                    <Col
                      xs={24}
                      sm={12}
                      md={12}
                      lg={8}
                      xl={8}
                      key={i.name + index}
                    >
                      <Card hoverable className="mt-30 recent-card">
                        <h2>{i.name}</h2>
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
              ) : (
                <h3 className="text-center mt-30">Nothing found!</h3>
              )}
            </Row>
          </div>
        </React.Fragment>
      );
    }
  }
);

export default SundayMajlis;