// import React, { Component, PureComponent } from 'react';
// import {Row, Col, BackTop, Carousel} from 'antd'
// import "antd/dist/antd.css"
// import "../../styles/majlis.css"
// import MapGL, {NavigationControl, Marker} from 'react-map-gl'
// import ReactMapGL from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'




// const TOKEN = 'pk.eyJ1IjoibW9oYW1tYWR1bWFyMjgiLCJhIjoiY2pxaWZrbHdoMDd2MDQ4bzJ3OHRwajh5ayJ9.Xh7iCLMp_NEiLXU4Tg5Nyg'; 

// const navStyle = {
// 	position: 'absolute',
// 	top: 0,
// 	right: 0,
// 	padding: '15px'
//   };


//   const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
//   c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
//   C20.1,15.8,20.2,15.8,20.2,15.7z`;

// const pinStyle = {
//   cursor: 'pointer',
//   fill: '#d00',
//   stroke: 'none'
// };


//   class CityPin extends Component {
// 	render() {
// 	  const {size = 20, onClick} = this.props;
  
// 	  return (
// 		<svg
// 		  height={size}
// 		  viewBox="0 0 24 24"
// 		  style={{
// 			...pinStyle,
// 			transform: `translate(${-size / 2}px,${-size}px)`
// 		  }}
// 		//   onClick={onClick}
// 		>
// 		  <path d={ICON} />
// 		</svg>
// 	  );
// 	}
//   }


// class Map extends Component {

// 	state = {
// 	  viewport: {
// 		width: 400,
// 		height: 400,
// 		latitude: 18.9919913,
// 		longitude: 73.1038669,
// 		zoom: 12,
// 		bearing: 0,
//         pitch: 0,
// 	  },
// 	};
  
// 	render() {
// 	  return (
// 		<MapGL

// 		  {...this.state.viewport}
// 		  width="100%"
// 		  mapboxApiAccessToken={TOKEN}
// 		  mapStyle="mapbox://styles/mapbox/dark-v9"
// 		  onViewportChange={(viewport) => this.setState({viewport})}
// 		>
// 			<div className="nav" style={navStyle}>
// 				<NavigationControl/>
// 				<Marker longitude={this.state.viewport.latitude} latitude={this.state.viewport.longitude} offsetTop={-20}
//           offsetLeft={-10}>
// 					<CityPin size={20} />
//           		</Marker>
// 			</div>
			
// 		</MapGL>
// 	  );
// 	}
//   }


// class Majlis extends Component {
// 	render() {
// 		return (
// 			<React.Fragment>
//             	<BackTop />
// 				<div className="base-majlis"></div>
// 				<Row>
// 					{/* <Col span={24} className={"mj-header"}>
// 					<Carousel autoplay={true} dots={false}> */}
// 						{/* <div className="image-container"> */}
// 							{/* <h1 className="mj-header-text">Contact</h1> */}
// 							<Map />
// 						{/* </div> */}
// 					{/* </Carousel>
// 					</Col> */}
//           		</Row>
// 				  <div className="mj-background">
// 				<Row className={"majlis"}>
// 					<Col span={24} className={"pd-20"}>
// 						<h1 className="white-text">
// 							Bayan Address
// 						</h1>
// 						<p className="white-text">
// 							Plot No. 14, Hiba Manzil
// 						</p>
// 						<p className="white-text">
// 							Bushra Park, Opp. Neelkanth Garden Society
// 						</p>
// 						<p>
// 							Bawan Bunglow Area
// 						</p>
// 						<p>
// 							Old Panvel - 410206
// 						</p>

// 						<p>Before coming to the majlis please contact through these phone numbers:</p>
// 							<p>
// 								<a href="tel:+919920416687">+919920416687</a>
// 							</p>
// 							<p>
// 								<a href="tel:+918433657271">+918433657271</a>
// 							</p>
// 							<p>
// 								<a href="tel:+919820980179">+919820980179</a>
// 							</p>

// 							<h1 className="white-text">
// 							Bayan Timings
// 						</h1>
// 						<p>
// 							Sunday 11 AM (IST)
// 						</p>
// 						<p>
// 							Majlis will be held on every 1st and 2nd Sunday.
// 						</p>
// 					</Col>
// 				</Row>
// 				</div>
// 			</React.Fragment>
// 		)
// 	}
// }

// export default Majlis
