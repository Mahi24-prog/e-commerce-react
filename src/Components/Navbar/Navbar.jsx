import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Contexts/CartContext'
import { useWishlist } from '../../Contexts/wishlistContext'

const Navbar = () => {
    const {state : {cartCount}} = useCart()
    const{state : {wishlistCount}} =  useWishlist()
    return (
        <>
            <nav id="home-navbar" className="flex-ali-cen flex-wrap">
        <div className="home-nav-left flex-ali-cen">
            <img src='images/brand-logo.png' className='brand-logo' alt='brand img'/>
            <Link to={"/"}><h1 className="brand-name sm-h">Apani<br/>Dukan</h1></Link>
            <Link to={"/product"}><h1 className="brand-name sm-h nav-left-ele">Products</h1></Link>
        </div>
        <div className="home-nav-mid">
            <div className="nav-mid-search">
                <input type="text md-text" placeholder="Search..."/>
            </div>
        </div>
        <div className="home-nav-right flex-all-cen">
            <div className="badge nav-right-ele">
                <Link to={"/wishlist"}>
                <i className="fas fa-heart lg-text"></i>
                </Link> 
                <div className="number sm-text">{wishlistCount}</div>
            </div>
            <div className="badge nav-right-ele">
                <Link to={"/cart"}>
                <i className="fas fa-shopping-cart lg-text"></i>
                </Link>
                <div className="number sm-text">{cartCount}</div>
            </div>
            <Link to={"/login"}><button className="btn-outline-primary btn nav-right-ele" >Login</button></Link>
            <Link to={"/signup"}><button className="btn-primary btn nav-right-ele">Sign up</button></Link>
        </div>
    </nav>
        </>
    )
}

export default Navbar