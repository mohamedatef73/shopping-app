import React, { useState } from 'react'
import BackGround from '../../Components/BackGround/BackGround'
import Navbar from '../../Components/navbar/Navbar'
import './Home.scss'
import CardItem from '../../Components/CardItem/CardItem'
import cardData from '../../Components/CardItem/CardData'


const Home = () => {
    const [products, setProducts] = useState(cardData)

    const productData = products.map(card =>
        <div className='col-12 col-md-6 col-lg-3'>
            <CardItem key={card.id} product={card} />
        </div>)

    return (
        <div className='home'>

            <BackGround />
            <Navbar />

            <div className='cards' >
                <div className="d-flex flex-wrap">
                    {productData}
                </div>
            </div>
        </div>
    )
}

export default Home