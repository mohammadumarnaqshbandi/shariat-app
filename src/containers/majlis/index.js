import React, { Component } from 'react';
import {Row, Col, BackTop, Carousel} from 'antd'
import "antd/dist/antd.css"
import "../../styles/majlis.css"
import MapGL, {NavigationControl} from 'react-map-gl'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


const TOKEN = 'pk.eyJ1IjoibW9oYW1tYWR1bWFyMjgiLCJhIjoiY2pxaWZrbHdoMDd2MDQ4bzJ3OHRwajh5ayJ9.Xh7iCLMp_NEiLXU4Tg5Nyg'; 

class Map extends Component {

	state = {
	  viewport: {
		width: 400,
		height: 400,
		latitude: 18.9919913,
		longitude: 73.1038669,
		zoom: 10
	  }
	};
  
	render() {
	  return (
		<ReactMapGL

		  {...this.state.viewport}
		  width="100%"
		  mapboxApiAccessToken={TOKEN}
		  mapStyle="mapbox://styles/mohammadumar28/cjzwzqo3708y51cmbs9hhex75"
		  onViewportChange={(viewport) => this.setState({viewport})}
		/>
	  );
	}
  }


class Majlis extends Component {
	render() {
		return (
			<React.Fragment>
            	<BackTop />
				<div className="base-majlis"></div>
				<Row>
					{/* <Col span={24} className={"mj-header"}>
					<Carousel autoplay={true} dots={false}> */}
						{/* <div className="image-container"> */}
							{/* <h1 className="mj-header-text">Contact</h1> */}
							<Map />
						{/* </div> */}
					{/* </Carousel>
					</Col> */}
          		</Row>
				  <div className="mj-background">
				<Row className={"majlis"}>
					<Col span={24} className={"pd-20"}>
						<h1 className="white-text">
							Bayan Address
						</h1>
						<p className="white-text">
							Plot No. 14, Hiba Manzil
						</p>
						<p className="white-text">
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
