import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div className="col-md-4 product-men mt-5">
                <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item text-center">
                        <img src="images/m1.jpg" alt="" />
                        <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                                <a href="single.html" className="link-product-add-cart">Quick View</a>
                            </div>
                        </div>
                        <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product text-center border-top mt-4">
                        <h4 className="pt-1">
                            <a href="single.html">Samsung Galaxy J7</a>
                        </h4>
                        <div className="info-product-price my-2">
                            <span className="item_price">$200.00</span>
                            <del>$280.00</del>
                        </div>
                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                                <fieldset>
                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                    <input type="hidden" name="add" defaultValue={1} />
                                    <input type="hidden" name="business" defaultValue=" " />
                                    <input type="hidden" name="item_name" defaultValue="Samsung Galaxy J7" />
                                    <input type="hidden" name="amount" defaultValue={200.00} />
                                    <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                    <input type="hidden" name="currency_code" defaultValue="USD" />
                                    <input type="hidden" name="return" defaultValue=" " />
                                    <input type="hidden" name="cancel_return" defaultValue=" " />
                                    <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;