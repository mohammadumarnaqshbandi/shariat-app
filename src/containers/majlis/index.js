import React, { Component } from 'react';
import {Row, Col, BackTop, Carousel} from 'antd'
import "antd/dist/antd.css"
import "../../styles/majlis.css"

class Majlis extends Component {
	render() {
		return (
			<React.Fragment>
            	<BackTop />
				<div className="base-majlis"></div>
				<Row>
					<Col span={24} className={"mj-header"}>
					<Carousel autoplay={true} dots={false}>
						<div className="image-container">
							<h1 className="mj-header-text">Contact</h1>
						</div>
					</Carousel>
					</Col>
          		</Row>
				  <div className="mj-background">
				<Row className={"majlis"}>
					<Col span={24} className={"pd-20"}>
						<h1 className="white-text">
							Bayan Address
						</h1>
						<p>
							Plot No. 14, Hiba Manzil
						</p>
						<p>
							Bushra Park, Opp. Neelkanth Garden Society
						</p>
						<p>
							Bawan Bunglow Area
						</p>
						<p>
							Old Panvel - 410206
						</p>

						<p>Before coming to the majlis please contact through these phone numbers:</p>
							<p>
								<a href="tel:+919920416687">+919920416687</a>
							</p>
							<p>
								<a href="tel:+918433657271">+918433657271</a>
							</p>
							<p>
								<a href="tel:+919820980179">+919820980179</a>
							</p>

							<h1 className="white-text">
							Bayan Timings
						</h1>
						<p>
							Sunday 11 AM (IST)
						</p>
						<p>
							Majlis will be held on every 1st and 2nd Sunday.
						</p>
					</Col>
				</Row>
				</div>
			</React.Fragment>
		)
	}
}

export default Majlis
