import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardData from '../../Components/CardItem/CardData'
import Tilt from 'react-parallax-tilt';
import './ProductDetails.scss'
import pic from '../Images/pic.jpg'
import cart2 from '../../Assets/Images/cart2.png'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'




const ProductDetails = () => {

    const [product, setProduct] = useState({})

    let params = useParams()

    useEffect(() => {
        getProduct()
    }, [params.id])


    const getProduct = () => {
        let productCard = CardData.find(item => item.id == params.id)
        setProduct(productCard)
    }


    return (
        <div className=''>
            <Navbar />

            <div className='col-12'>
                {/* <h1 className='text-center'>{product.title}</h1> */}
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className='product'>
                                <Tilt className="parallax-effect-img"  tiltMaxAngleX={40}
                                    tiltMaxAngleY={40} perspective={800} transitionSpeed={500} >

.                                        <img className='item' src={product.imageUrl} alt="pic" />
.                                </Tilt>
                            </div>
                    </div>
                    <div className="text col-lg-4 pt-4 ">

                        <div className="testimonial__text">
                            <p>
                                ❦ Extremely flexible, lightweight and comfortable.Anti-slip dural rubber sole,
                                lightweight and soft, so cool for walking and working.
                               
                                    </p>

                            <div className="testimonial__author">
                                <div className="name">
                                    <div className="size">
                                        <strong>Size :</strong> &nbsp;
                                        <span>7</span>
                                        <span>8</span>
                                        <span>9</span>
                                        <span>10</span>
                                        <br />
                                    </div>
                                    <br />
                                    <div className="color">
                                        <strong>Color :</strong> &nbsp;
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className='shop text-success'>
                                        Price : {product.price}
                                        <br/>
                                        available sizes : {product.size}
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <Link to='/cart' className='shop'>
                                        <strong >Add To Cart :</strong> &nbsp;
                                        <img src={cart2} alt='store icon' />
                                    </Link>
                                </div>

                                <br />

                                <div className="testimonial__author__pic">
                                    <img src={pic} alt="" />
                                </div>
                                <div className="testimonial__author__text">
                                    <h5>Augusta Schultz</h5>
                                    <p>Fashion Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails