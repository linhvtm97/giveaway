import React, { Component } from 'react';

class EventDetail extends Component {
    render() {
        return (
            <div>
                <div className="page-head_agile_info_w3l">
                </div>
                <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <div className="container">
                            <ul className="w3_short">
                                <li>
                                    <a href="/">Home</a>
                                    <i>|</i>
                                </li>
                                <li>Single Product 1</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="banner-bootom-w3-agileits py-5">
                    <div className="container py-xl-4 py-lg-2">
                        <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                            <span>S</span>ingle
				<span>P</span>age</h3>
                        <div className="row">
                            <div className="col-lg-5 col-md-8 single-right-left ">
                                <div className="grid images_3_of_2">
                                    <div className="flexslider">
                                        <ul className="slides">
                                            <li data-thumb="images/si1.jpg">
                                                <div className="thumb-image">
                                                    <img src="images/si1.jpg" data-imagezoom="true" className="img-fluid" alt="" /> </div>
                                            </li>
                                            <li data-thumb="images/si2.jpg">
                                                <div className="thumb-image">
                                                    <img src="images/si2.jpg" data-imagezoom="true" className="img-fluid" alt="" /> </div>
                                            </li>
                                            <li data-thumb="images/si3.jpg">
                                                <div className="thumb-image">
                                                    <img src="images/si3.jpg" data-imagezoom="true" className="img-fluid" alt="" /> </div>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
                                <h3 className="mb-3">Samsung Galaxy J7 Prime (Gold, 16 GB) (3 GB RAM)</h3>
                                <p className="mb-3">
                                    <span className="item_price">$200.00</span>
                                    <del className="mx-2 font-weight-light">$280.00</del>
                                    <label>Free delivery</label>
                                </p>
                                <div className="single-infoagile">
                                    <ul>
                                        <li className="mb-3">
                                            Cash on Delivery Eligible.
							</li>
                                        <li className="mb-3">
                                            Shipping Speed to Delivery.
							</li>
                                        <li className="mb-3">
                                            EMIs from $655/month.
							</li>
                                        <li className="mb-3">
                                            Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C
							</li>
                                    </ul>
                                </div>
                                <div className="product-single-w3l">
                                    <p className="my-3">
                                        <i className="far fa-hand-point-right mr-2"></i>
                                        <label>1 Year</label>Manufacturer Warranty</p>
                                    <ul>
                                        <li className="mb-1">
                                            3 GB RAM | 16 GB ROM | Expandable Upto 256 GB
							</li>
                                        <li className="mb-1">
                                            5.5 inch Full HD Display
							</li>
                                        <li className="mb-1">
                                            13MP Rear Camera | 8MP Front Camera
							</li>
                                        <li className="mb-1">
                                            3300 mAh Battery
							</li>
                                        <li className="mb-1">
                                            Exynos 7870 Octa Core 1.6GHz Processor
							</li>
                                    </ul>
                                    <p className="my-sm-4 my-3">
                                        <i className="fas fa-retweet mr-3"></i>Net banking & Credit/ Debit/ ATM card
						</p>
                                </div>
                                <div className="occasion-cart">
                                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                        <form action="#" method="post">
                                            <fieldset>
                                                <input type="hidden" name="cmd" value="_cart" />
                                                <input type="hidden" name="add" value="1" />
                                                <input type="hidden" name="business" value=" " />
                                                <input type="hidden" name="item_name" value="Samsung Galaxy J7 Prime" />
                                                <input type="hidden" name="amount" value="200.00" />
                                                <input type="hidden" name="discount_amount" value="1.00" />
                                                <input type="hidden" name="currency_code" value="USD" />
                                                <input type="hidden" name="return" value=" " />
                                                <input type="hidden" name="cancel_return" value=" " />
                                                <input type="submit" name="submit" value="Add to cart" className="button" />
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetail;