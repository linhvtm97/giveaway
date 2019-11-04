import React, { Component } from 'react';
import Event from '../event/Event';
import EventSearch from '../eventSearch/EventSearch';
import Axios from 'axios';
import moment from 'moment';


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: true,
            errors: null
        }
    }

    componentDidMount() {
        Axios.get('https://giveawayapi.herokuapp.com//api/v1/events')
            .then(res => {
                const events = res.data;
                console.log(res);
                this.setState({ events: res.data.data })
                // window.location.replace("/");
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { isLoading, events } = this.state;
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
                                <div className="row">
                                    <div className="container py-xl-4 py-lg-2">
                                        <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                            <div className="row">
                                                {
                                                    events.map((item, id) => {
                                                        console.log(item)
                                                        const { name, status, avatar, start_date, description, goal_item, location } = item;
                                                        return (
                                                            <div className="col-md-4 product-men mt-5">
                                                                <div className="men-pro-item simpleCart_shelfItem">
                                                                    <div className="men-thumb-item text-center">
                                                                        <img src={item.avatar} alt="no image" className="img-thumbnail" />
                                                                        <div className="men-cart-pro">
                                                                            <div className="inner-men-cart-pro">
                                                                                <a href="/events/1/details" className="link-product-add-cart">Quick View</a>
                                                                            </div>
                                                                        </div>
                                                                        <span className="product-new-top">New</span>
                                                                    </div>
                                                                    <div className="item-info-product text-center border-top mt-4">
                                                                        <h4 className="pt-1">
                                                                            <a href="single.html">{item.name}</a>
                                                                        </h4>
                                                                        <div className="info-product-price my-2">
                                                                            <span className="item_price">{`${moment(item.end_date).format('DD-MM-YYYY')} - ${item.start_date}`}</span>
                                                                            <p>Days left</p>
                                                                        </div>

                                                                        <span>{item.goal_item}</span>
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
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"><EventSearch /></div>
                </div>
            </div>
        );
    }
}

export default Events;