import React, { Component } from "react"
import { Row, Col, BackTop, Card } from "antd"
import "antd/dist/antd.css"
import "../../styles/poster.scss"
import poster1 from "../../images/poster1.jpg"
import poster2 from "../../images/poster2.jpg"

const {Meta} = Card

class Poster extends Component {
  render() {
    const styles = {
      color: "#ffffff"
    }
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
          <Row className={"row-top majlis"}>
            <Col xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={8} className={"col-top pd-30"} style={styles}>
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
                    lg={8}
                    xl={8} className={"col-top pd-30"} style={styles}>
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
