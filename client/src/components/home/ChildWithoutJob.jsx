import React from 'react'
import CoolBoy from '../../assets/cool.png'
const ChildWithoutJob = () => {
    return (
        <div className='childwithoutjob_main'>
            <div className='childwithoutjob_content'>
                <h5 className='home_heading'>WHY TEENAGERS ARE OK WITHOUT A JOB?</h5>
                <p className='home_para childwithoutjob_para'>Because they have lots of freelance opportunities which they can fulfil just by sitting at home with a laptop or a tablet plus dependency on social media has made them suffer from low self-esteem.</p>
                <img src={CoolBoy} alt="coolBoy" className='cool_boy' />
            </div>

        </div>
    )
}

export default ChildWithoutJob