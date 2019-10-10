import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Events from '../events/Events';
import EventSearch from '../eventSearch/EventSearch';

function Main() {
    return (
        <div>
            <Header />
            <div className="ads-grid py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
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
            <Footer />
        </div>
    );
}

export default Main;
