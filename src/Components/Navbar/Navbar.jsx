import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav id="home-navbar" className="flex-ali-cen flex-wrap">
                <div className="home-nav-left">
                    <h1 className="brand-name lg-h">Apani Dukan</h1>
                </div>
                <div className="home-nav-mid">
                    <div className="nav-mid-search">
                        <input type="text md-text" placeholder="Search..."/>
                    </div>
                </div>
                <div className="home-nav-right flex-all-cen">
                    <div className="badge nav-right-ele">
                        <i className="fas fa-heart lg-text" onclick="location.href='/Pages/wishlist.html'"></i>
                        <div className="number sm-text">4</div>
                    </div>
                    <div className="badge nav-right-ele">
                        <i className="fas fa-shopping-cart lg-text" onclick="location.href='/Pages/cart.html'"></i>
                        <div className="number sm-text">4</div>
                    </div>
                    <button className="btn-outline-primary btn nav-right-ele" onclick="location.href='/Pages/login.html'">Login</button>
                    <button className="btn-primary btn nav-right-ele" onclick="location.href='/Pages/signup.html'">Sign up</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar