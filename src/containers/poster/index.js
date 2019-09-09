import React, { Component } from "react"
import { Row, Col, BackTop, Card } from "antd"
import "antd/dist/antd.css"
import "../../styles/poster.scss"
import poster1 from "../../images/poster1.jpg"
import poster2 from "../../images/poster2.jpg"
import muharramUrdu_P1 from "../../images/moharram-urdu-p1.jpg"
import muharramUrdu_P2 from "../../images/moharram-urdu-p2.jpg"
import muharramHindi_P1 from "../../images/moharram-hindi-p1.jpg"
import muharramHindi_P2 from "../../images/moharram-hindi-p2.jpg"

const {Meta} = Card

class Poster extends Component {
  render() {

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
        
        {/* <div className="line1" style={{height: '1vh',
	backgroundColor: '#efaad9'}}></div> */}
        {/* <div className="line1" style={{height: '1vh',
    backgroundColor: 'rgb(227, 166, 208)'}}></div> */}
      <div className="base-poster"></div>
        <div className="pt-background">
          <Row className={"row-top majlis"} justify="space-between">
            <Col xs={24}
                  sm={12}
                  md={12}
                  lg={10}
                  xl={8} className={"col-top pd-10"}>
              <Card
                hoverable
                className="poster-card"
                cover={<img alt="example" src={muharramUrdu_P1} />}
              >
                <Meta title="Muharram Ka Mahina Kya Karein...Kya Na Karein" description="Page 1" />
              </Card>
            </Col>
            <Col xs={24}
                  sm={12}
                  md={12}
                  lg={10}
                  xl={8} className={"col-top pd-10"}>
              <Card
                hoverable
                className="poster-card"
                cover={<img alt="example" src={muharramUrdu_P2} />}
              >
                <Meta title="Muharram Ka Mahina Kya Karein...Kya Na Karein" description="Page 2" />
              </Card>
            </Col>
            <Col xs={24}
                sm={12}
                md={12}
                lg={10}
                xl={8} className={"col-top pd-10"}>
              <Card
                hoverable
                className="poster-card"
                cover={<img alt="example" src={muharramHindi_P1} />}
              >
                <Meta title="Muharram Ka Mahina Kya Karein...Kya Na Karein" description="Page 1" />
              </Card>
            </Col>
            <Col xs={24}
                sm={12}
                md={12}
                lg={10}
                xl={8} className={"col-top pd-10"}>
              <Card
                hoverable
                className="poster-card"
                cover={<img alt="example" src={muharramHindi_P2} />}
              >
                <Meta title="Muharram Ka Mahina Kya Karein...Kya Na Karein" description="Page 2" />
              </Card>
            </Col>
            <Col xs={24}
                  sm={12}
                  md={12}
                  lg={10}
                  xl={8} className={"col-top pd-10"}>
              <Card
                hoverable
                className="poster-card"
                cover={<img alt="example" src={poster1} />}
              >
                <Meta title="10 Muharram Poster" description="" />
              </Card>
            </Col>
            <Col xs={24}
                  sm={12}
                  md={12}
                  lg={10}
                  xl={8} className={"col-top pd-10"}>
              <Card
                hoverable
                className="poster-card"
                cover={<img alt="example" src={poster2} />}
              >
                <Meta title="10 Muharram Poster" description="" />
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

export default Poster
