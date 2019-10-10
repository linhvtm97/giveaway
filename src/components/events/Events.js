import React, { Component } from 'react';
import Event from '../event/Event';
import EventSearch from '../eventSearch/EventSearch';

class Events extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {/* product left */}
                    <div className="agileinfo-ads-display col-lg-9">
                        <div className="wrapper">
                            <h3 className="tittle-w3l text-center">
                                <span>E</span>xplore
                                <span>O</span>ur
                                <span>E</span>vents</h3>
                            <div className="ads-grid py-sm-5 py-4">
                                <div className="container py-xl-4 py-lg-2">
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                        <div className="row">
                                            <Event />
                                            <Event />
                                            <Event />
                                            <Event />
                                            <Event />
                                            <Event />
                                            <Event />
                                            <Event />
                                            <Event />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* third section */}
                            <div className="product-sec1 product-sec2 px-sm-5 px-3">
                                <div className="row">
                                    <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
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
        );
    }
}

export default Events;