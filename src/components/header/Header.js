import React from 'react';

function Header() {
    return (
        <div>
            <div className="agile-main-top">
                <div className="container-fluid">
                    <div className="row main-top-w3l py-2">
                        <div className="col-lg-4 header-most-top">
                        </div>
                        <div className="col-lg-8 header-right mt-lg-0 mt-2">
                            {/* header lists */}
                            <ul>
                                <li className="text-center border-right text-white">
                                    <a className="play-icon popup-with-zoom-anim text-white" href="#">
                                        <select id="agileinfo-nav_search" name="agileinfo_search" className="text-center text-white" required>
                                            <option value>Select your location</option>
                                            <option value="Televisions">Ha Noi</option>
                                            <option value="Headphones">Ho Chi Minh</option>
                                            <option value="Computers">Da Nang</option>
                                        </select>
                                    </a>
                                </li>
                                <li className="text-center border-right text-white">
                                    <a href="#track-order" data-toggle="modal" data-target="#exampleModal" className="text-white">
                                        <i className="fas fa-truck mr-2" />Track Order</a>
                                </li>
                                <li className="text-center border-right text-white">
                                    <i className="fas fa-phone mr-2" /> 001 234 5678
                                </li>
                                <li className="text-center border-right text-white">
                                    <a href="/login" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                                        <i className="fas fa-sign-out-alt mr-2" />Login </a>
                                </li>
                                <li className="text-center text-white">
                                    <a href="/register" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                                        <i className="fas fa-sign-out-alt mr-2" />Register </a>
                                </li>
                            </ul>
                            {/* //header lists */}
                        </div>
                    </div>
                </div>
            </div>

            {/* //shop locator (popup) */}
            {/* modals */}
            {/* <Login /> */}
            {/* <Register /> */}
            {/* //modal */}
            {/* //top-header */}
            {/* header-bottom*/}
            <div className="header-bot">
                <div className="container">
                    <div className="row header-bot_inner_wthreeinfo_header_mid">
                        {/* logo */}
                        <div className="col-md-2 logo_agile">
                            <h1>
                                <a href="home" className="font-weight-bold font-italic">
                                    <img src="images/logo2.png" className="img-fluid" /> GiveAway
                            </a>
                            </h1>
                        </div>
                        {/* //logo */}
                        {/* header-bot */}
                        <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                            <div className="row">
                                {/* search */}
                                <div className="col-10 agileits_search">
                                    <form className="form-inline" action="#" method="post">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                                        <button className="btn my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                                {/* //search */}
                                {/* cart details */}
                                <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                                    <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                        <form action="#" method="post" className="last">
                                            <input type="hidden" name="cmd" defaultValue="_cart" />
                                            <input type="hidden" name="display" defaultValue={1} />
                                            <button className="btn w3view-cart" type="submit" name="submit" value>
                                                <i className="fas fa-cart-arrow-down" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                {/* //cart details */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* shop locator (popup) */}
            {/* //header-bottom */}
            {/* navigation */}
            <div className="navbar-inner">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto text-center mr-xl-5">
                                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                                    <a className="nav-link" href="/">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                                    <a className="nav-link" href="/events">Live Events</a>
                                </li>
                                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                                    <a className="nav-link" href="/charities">Categories</a>
                                </li>
                                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                                    <a className="nav-link" href="/charities">Charities</a>
                                </li>
                                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                                    <a className="nav-link" href="/about">About Us</a>
                                </li>
                                <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
          </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="product.html">Product 1</a>
                                        <a className="dropdown-item" href="product2.html">Product 2</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="single.html">Single Product 1</a>
                                        <a className="dropdown-item" href="single2.html">Single Product 2</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="checkout.html">Checkout Page</a>
                                        <a className="dropdown-item" href="payment.html">Payment Page</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div >
    );
}

export default Header;


