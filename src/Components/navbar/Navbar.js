import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../Assets/Images/icon.png'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar fixed navbar-expand-lg'>

            <Link to='/' className='navbar-brand'>
                <img src={icon} alt='store icon' />
            </Link>

            <button className="btn btn-success navbar-toggler" data-toggle="collapse"
                data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <Link to='/contact' className='nav-link text-warning'>Contacts</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to='/shop-cart' className='nav-link text-warning'>go to Cart</Link>
                    </li>

                    <li className="nav-item dropdown active">

                        <a href="/" className="nav-link dropdown-toggle text-warning"
                            data-toggle="dropdown" >On Sale</a>

                        <div className="dropdown-menu">
                            <Link to='/men' className="dropdown-item text-danger"> Men </Link>

                            <Link to='/women' className="dropdown-item text-danger" >Women </Link>

                            <Link to='/blak-friday' className="dropdown-item text-danger" >Black Friday </Link>

                        </div>
                    </li>

                    <li className='nav-item active'>
                        <Link to='/' className='nav-link text-warning'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )


}

export default Navbar