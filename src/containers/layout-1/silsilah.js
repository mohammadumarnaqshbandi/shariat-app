import React, { Component } from 'react';
import {Row, Col, BackTop, Carousel} from 'antd'
import "antd/dist/antd.css"
import "../../styles/silsilah.css"

class Silsilah extends Component {
	render() {
		const styles = {
			color: "#ffffff"
        }
        
		return (
			<React.Fragment>
            	<BackTop />
				{/* <div className="line1" style={{height: '1vh',
	backgroundColor: 'rgb(90, 99, 191)'}}></div> */}
	{/* <div className="line1" style={{height: '1vh',
    backgroundColor: 'rgb(90, 99, 191)'}}></div> */}
    <div className="line1" style={{height: '1vh',
    backgroundColor: '#cab7f8'}}></div>
				<Row>
					<Col span={24} className={"sl-header"}>
					<Carousel autoplay={true} effect="fade" dots={false}>
						<div className="image-container">
						<h1 className="sl-header-text" style={{color: '#fff'}}>Silsilah</h1>
						</div>
					</Carousel>
					</Col>
          		</Row>
				  {/* <div className="line1" style={{height: '1vh',
	backgroundColor: '#efaad9'}}></div> */}
	{/* <div className="line1" style={{height: '1vh',
    backgroundColor: 'rgb(227, 166, 208)'}}></div> */}
    
				  <div className="sl-background">
				<Row className={"majlis"}>
					<Col span={24} className={"pd-30"} style={styles}>
						<p className="silsila-text">
							The Chain of Honourable Mashaikh Chishtiya (may the mercy of Allah be upon them) 
excerpted from the "Shajarah Tayyibah".Below is the silsilah of the tariqah Chistiya for
Haji Shakeel Ahmed Sb (DB)<br/><br/>
01. The mercy for the worlds Muhammad Rasullullah (SAW).<br/>
02. Sayyadina Hazrat Ali (radhiallahu anhu)<br/>
03. Hazrat Hasan Basri (RH)<br/>
04. Hazrat Abdul Wahid Bin Zaid (RH)<br/>
05. Hazrat Fuzail Bin Ayaaz (RH)<br/>
06. Hazrat Ibrahim Bin Adham Balkhi (RH)<br/>
07. Hazrat Huzaifa Maraashi (RH)<br/>
08. Hazrat Aminuddin Abu Habirah Basri (RH)<br/>
09. Hazrat Mumshaad Alvi (RH)<br/>
10. Hazrat Khwaja Abu Ishaq Shah Chisti (RH)<br/>
11. Hazrat Abu Ahmed Abdaal Chisti (RH)<br/>
12. Hazrat Khwaja Abu Muhammad Chisti (RH)<br/>
13. Hazrat Khwaja Abu Yusuf Chisti (RH)<br/>
14. Hazrat Khwaja Maudud Chisti (RH)<br/>
15. Hazrat Haji Sharif Zandni (RH)<br/>
16. Hazrat Khwaja Usman Harooni (RH)<br/>
17. Hazrat Khwaja Moinuddin Hasan Ajmeri Chisti (RH)<br/>
18. Hazrat Khwaja Quttubuddin Kaki (RH)<br/>
19. Hazrat Khwaja Faridul Haq Shakar Ganj (RH)<br/>
20. Hazrat Sayyad Alauddin Ali Bin Ahmed Sabir Peerane Kalyar (RH)<br/>
21. Hazrat Shaikh Shamshuddin Turk Panipati (RH)<br/>
22. Hazrat Jalaluddin Mahmud Panipati (RH)<br/>
23. Hazrat Shaikh Abdul Haq Rudoulwi (RH)<br/>
24. Hazrat Shaikh Arif Ahmed Rudoulwi (RH)<br/>
25. Hazrat shaikh Muhammad Bin Arif Rudoulwi (RH)<br/>
26. Hazrat Shaikh Abdul Quddus Gangohi (RH)<br/>
27. Hazrat Shaikh Jalaluddin Balkhi Thanesari (RH)<br/>
28. Hazrat Nizamuddin Balkhi Thanesri (RH)<br/>
29. Hazrat Shah Abu Saeed Numani Gangohi (RH)<br/>
30. Hazrat Shah Muhibullah Allahbadi (RH)<br/>
31. Hazrat Shah Muhammadi Akbarabadi (RH)<br/>
32. Hazrat Shah Adhduddin Amrohi (RH)<br/>
33. Hazrat Shah Abdul Hadi Amrohi (RH)<br/>
34. Hazrat Shah Abdul Bari Chisti Amrohi (RH)<br/>
35. Hazrat Shah Abdul Bari Siddiqi Chisti Amrohi (RH)<br/>
36. Hazrat Sayyad Haji Abdur Rahim Wilayati (RH)<br/>
37. Hazrat Miyaji Noor Muhammad Jhanjhanwi (RH)<br/>
38. Hazrat Haji Imdadullah Muhajir Makki (RH)<br/>
39. Hazrat Ashraf Ali Thanwi (RH)<br/>
40. Hazrat Shah Wasiullah Allahbadi (RH)<br/>
41. Hazrat Mufti Muhammad Hanif Jaunpuri (RH)<br/>
42. Hazrat Haji Shakeel Ahmed (DB)<br/>
						</p>
					</Col>
				</Row>
				</div>
			</React.Fragment>
		)
	}
}

export default Silsilah
