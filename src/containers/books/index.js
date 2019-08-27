import React, { Component } from 'react';
import {Row, Col, BackTop, Carousel} from 'antd'
import "antd/dist/antd.css"
import "../../styles/books.css"

class Books extends Component {
	render() {
		const styles = {
			color: "#ffffff"
		}
		return (
			<React.Fragment>
            	<BackTop />
				{/* <div className="line1" style={{height: '1vh',
	backgroundColor: 'rgb(90, 99, 191)'}}></div> */}
	<div className="base-books"></div>
				<Row>
					<Col span={24} className={"bk-header"}>
					<Carousel autoplay={true} effect="fade" dots={false}>
						<div className="image-container">
						{/* <h1 className="bk-header-text">Books</h1> */}
						</div>
					</Carousel>
					</Col>
          		</Row>
				  <div className="base-books-2"></div>
				  {/* <div className="line1" style={{height: '1vh',
	backgroundColor: '#efaad9'}}></div> */}
	{/* <div className="line1" style={{height: '1vh',
    backgroundColor: 'rgb(227, 166, 208)'}}></div> */}
				  <div className="bk-background">
				<Row className={"row-top majlis"}>
					<Col span={24} className={"col-top pd-30"} style={styles}>
						<h1 className="text-center">
							Sorry! This page is under construction.
						</h1>
					</Col>
				</Row>
				</div>
			</React.Fragment>
		)
	}
}

export default Books
