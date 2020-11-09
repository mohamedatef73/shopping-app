import React from 'react'
import runs from '../../Assets/Images/runs.mp4'
import './BackGround.scss'


const BackGround = () => {
    return (
        <video className='video' autoPlay loop muted>
            <source src={runs} type='video/mp4' />
        </video>

    )
}

export default BackGround