import React from 'react'
import Wealth from '../../assets/Wealth.jpg'
import Success from '../../assets/Success.jpg'
import Fame from '../../assets/Fame.jpg'
const ChildWant = () => {
    return (
        <div className="childwant_main">
            <h5 className='home_heading'>WHAT TEENAGERS WANT?</h5>

            <div className='childwant_content'>
                <div className='img_container'>
                   <h2 className='childwant_img_heading'>Fame</h2>
                    <img src={Fame} alt="Fame" className='childwan_img fame' />
                </div>
                <div className='img_container'>
                    <h2 className='childwant_img_heading'>Success</h2>
                    <img src={Success} alt="Success" className='childwan_img success' />
                </div>
                <div className='img_container'>
                    <h2 className='childwant_img_heading'>Wealth</h2>
                    <img src={Wealth} alt="Wealth" className='childwan_img wealth' />
                </div>
            </div>
        </div>
    )
}

export default ChildWant