import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Events from '../events/Events';
import EventSearch from '../eventSearch/EventSearch';

function Main() {
    return (

        <div>
            {/* top Products */}
            <div className="ads-grid py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                    {/* tittle heading */}
                    <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        <span>O</span>ur
              <span>N</span>ew
              <span>P</span>roducts</h3>
                    {/* //tittle heading */}
                    <div className="row">
                        {/* product left */}
                        <div className="agileinfo-ads-display col-lg-9">
                            <div className="wrapper">
                                <Events />
                                {/* third section */}
                                <div className="product-sec1 product-sec2 px-sm-5 px-3">
                                    <div className="row">
                                        <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                                        <p className="w3l-nut-middle">Get Extra 10% Off</p>
                                        <div className="col-md-8 bg-right-nut">
                                            <img src="images/image1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/* //third section */}

                            </div>
                        </div>
                        {/* //product left */}
                        {/* product right */}
                        <EventSearch />
                        {/* //product right */}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
            {/* //copyright */}
            {/* js-files */}
            {/* jquery */}
            {/* //jquery */}
            {/* nav smooth scroll */}
            {/* //nav smooth scroll */}
            {/* popup modal (for location)*/}
            {/* //popup modal (for location)*/}
            {/* cart-js */}
            {/* //cart-js */}
            {/* password-script */}
            {/* //password-script */}
            {/* scroll seller */}
            {/* //scroll seller */}
            {/* smoothscroll */}
            {/* //smoothscroll */}
            {/* start-smooth-scrolling */}
            {/* //end-smooth-scrolling */}
            {/* smooth-scrolling-of-move-up */}
            {/* //smooth-scrolling-of-move-up */}
            {/* for bootstrap working */}
            {/* //for bootstrap working */}
            {/* //js-files */}
        </div >
    );
}

export default Main;
