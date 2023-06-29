import React from 'react'
import './Home.css'
import Nav from '../nav/Nav'
import Video from '../../assets/video.jpg'
import HomeBoy from '../../assets/home-01.png'
import CurrentCrises from './CurrentCrises'
import Wfh from './Wfh'
import ChildWant from './ChildWant'
import ChildWithoutJob from './ChildWithoutJob'
import IntroPreppers from './IntroPreppers'
const Home = () => {
    return (
        <>
        <div className='home_main'>
            <Nav />
            <div className="home_content">
                <div className="home_content_left">
                    <h5 className='home_heading'>IMAGINE BEING A TEENAGER IN 2023”</h5>
                    <div className='home_bottom_left' >
                    <img src={HomeBoy} alt="HomeBoy" className='home_boy'/>
                    <p className='home_para'>As a parent, transport yourself to being a teenager. <br />
                        The life and environment we had was very different.
                    </p>
                    </div>
                   
                </div>
                <div className="home_content_right">
                    <img src={Video} alt="video" className='home_video' />
                </div>
            </div>
        </div>
        <CurrentCrises/>
    <ChildWant/>
    <ChildWithoutJob/>
    <IntroPreppers/>
        </>
    )
}

export default Home