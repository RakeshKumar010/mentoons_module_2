import React from 'react'
import Video from '../../assets/video.jpg'
import CRISES  from '../../assets/CRISES.jpg'

const CurrentCrises = () => {
    return (
        <div className='crises_content'>

            <div className="crises_content_left">
                <img src={Video} alt="video" className='home_video' />
            </div>
            <div className="crises_content_right">
                <h5 className='home_heading'>
                    CURRENT CRISES OF THE TEENAGERS

                </h5>
                <img src={CRISES} alt="CRISES" className='crises' />
                <ul className='current_crises_list home_para'>

                    <li>Corona</li>
                    <li>Political Instability.</li>
                    <li>Economic Slump.</li>
                    <li>Unstable social environment.</li>
                    <li>Food and transportation Impact.</li>
                    <li>Lack of a good carer.</li>

                    <li>Violence in the community.</li>
                    <li>Natural Disasters.</li>
                    <li>Unemployment.</li>
                    <li>Ability to stick to a job, if employed</li>

                </ul>
            </div>

        </div>
    )
}

export default CurrentCrises