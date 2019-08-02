import React from 'react'
import {Col, Card, Button} from 'antd'
import Plyr from 'react-plyr'
import '../../../../styles/recent.css'
import { Link } from 'react-router-dom'

const Recent = ({store, url, handleLink}) => (
    <React.Fragment>
        {store.map((i, index) => (
                <Col xs={24} sm={12} md={12} lg={8} xl={8} key={i.name}>
                    <Card hoverable className="mt-30 recent-card">
                        <h3>{i.name}</h3>
                        <Plyr 
                        url={i.src} 
                        type="audio" 
                        className={"react-plyr-" + index + (i.category === "sunday" ? 0 : i.category === "after juma" ? 2 : 3) }
                        provider="html5"
                        controls={['play', 'progress', 'current-time', 'mute', 'volume']}
                        title={i.name}
                        preload="none" />
                        <p>{i.date.split('/').join('.') || 'N/A'} | {i.category || 'N/A'} | {i.length || 'N/A'}</p>
                        <Button href={i.src}>DOWNLOAD</Button>
                    </Card>
                </Col>
            )
        )}


        <Col span={24} className="mt-55">
            <Link to={`${url}`}>
                <Button icon="arrow-right" onClick={handleLink} size="large">See more</Button>
            </Link>
        </Col>
    </React.Fragment>
)

export default Recent
