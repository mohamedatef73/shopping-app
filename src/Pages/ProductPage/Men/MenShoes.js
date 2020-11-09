import React from 'react'
import './MenShoes.scss'
import runner  from '../../../Assets/Images/runner.mp4'


const MenShoes = () => {
    return (
        <div className='men'>
            <video className='videoTag' autoPlay loop >
                <source src={runner} type='video/mp4' />
                <h1 className='text-danger'>Men Shoes</h1>

            </video>

        </div>
    )
}

export default MenShoes