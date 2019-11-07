import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            causes: [],
            isLoading: true,
            errors: null
        }
    }

    componentDidMount() {
        // Axios.get('https://giveawayapi.herokuapp.com//api/v1/events')
        Axios.get('http://give.away.local//api/v1/events')
            .then(res => {
                this.setState({ events: res.data.data })
            })
            .catch(error => {
                console.log(error)
            });
        Axios.get('http://give.away.local//api/v1/causes')
            .then(res => {
                this.setState({ causes: res.data.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { events } = this.state;
        const { causes } = this.state;
        return (
            <div>
                <div className="ads-grid py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        <div className="row">
                            {/* product left */}
                            <div className="agileinfo-ads-display col-lg-9">
                                <div className="wrapper">
                                    {/* first section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                        <h3 className="heading-tittle text-center font-italic">All our events</h3>
                                        <div className="row">
                                            {events.map((item) => {
                                                return (
                                                    <div key={item.id} className="col-md-4 product-men mt-5">
                                                        <div className="men-pro-item simpleCart_shelfItem">
                                                            <div className="men-thumb-item text-center">
                                                                <img src={item.avatar} alt="None" className="img-thumbnail" />
                                                                <div className="men-cart-pro">
                                                                    <div className="inner-men-cart-pro">
                                                                        <Link to={"/events/" + item.id} className="link-product-add-cart">Quick View</Link>
                                                                    </div>
                                                                </div>
                                                                <span className="product-new-top">New</span>
                                                            </div>
                                                            <div className="item-info-product text-center border-top mt-4">
                                                                <h4 className="pt-1">
                                                                    <Link to={"/events/" + item.id}>{item.name}</Link>
                                                                </h4>
                                                                <p className="text-left">
                                                                    <i className="fas fa-tags mr-2"></i>
                                                                    {item.cause.name}</p>
                                                                <p>
                                                                    Start at: {item.start_date} <br />Due at: {item.end_date}
                                                                </p>
                                                                <div className="info-product-price my-2">
                                                                    <p>{item.description.slice(0, 60)}...
                                                                    </p>
                                                                    <Link to={"/events/" + item.id}>
                                                                        Read more
                                                                    </Link>

                                                                    <p className="text-center"><span></span><i className="fas fa-shopping-cart"></i> {item.current_items} / {item.goal_item}</p>
                                                                    <ProgressBar animated variant="success" now={Math.floor(parseInt(item.current_items, 10) * 100 / parseInt(item.goal_item, 10))} />
                                                                </div>
                                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                                    <Link to={"/events/" + item.id + "/shop"}>
                                                                        <button type="button" className="btn btn-primary">Shop now</button>

                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                            }
                                            {/* //first section */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //product left */}
                            {/* product right */}
                            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                                <div className="side-bar p-sm-4 p-3">
                                    <div className="search-hotel border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Search Here</h3>
                                        <form action="#" method="post">
                                            <input
                                                type="search"
                                                placeholder="Event title.."
                                                name="search"
                                                required
                                            />
                                            <input type="submit" className="btn-primary btn" value="Search" />
                                        </form>
                                    </div>
                                    {/* price */}
                                    <div className="range border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Items</h3>
                                        <div className="w3l-range">
                                            <ul>
                                                <li>
                                                    <a href="/#">Under 10,000</a>
                                                </li>
                                                <li className="my-1">
                                                    <a href="/#">5,000 - 10,000</a>
                                                </li>
                                                <li>
                                                    <a href="/#">1,000 - 5,000</a>
                                                </li>
                                                <li className="my-1">
                                                    <a href="/#">500 - 1,000</a>
                                                </li>
                                                <li>
                                                    <a href="/#">100 - 500</a>
                                                </li>
                                                <li className="mt-1">
                                                    <a href="/#">Under 100</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* //price */}
                                    {/* reviews */}
                                    <div className="customer-rev border-bottom left-side py-2">
                                        <h3 className="agileits-sear-head mb-3">Review</h3>
                                        <ul>
                                            <li>
                                                <a href="/#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>5.0</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>4.0</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half" />
                                                    <span>3.5</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>3.0</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half" />
                                                    <span>2.5</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //reviews */}
                                    {/* electronics */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Causes</h3>
                                        <ul>
                                            {causes.map((item) => {
                                                return (
                                                    <li key={item.id}>
                                                        <input type="checkbox" className="checked" />
                                                        <span className="span">{item.name}</span>
                                                    </li>
                                                );
                                            })
                                            }
                                        </ul>
                                    </div>
                                    {/* //electronics */}
                                    {/* arrivals */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Sort</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Ending Soon</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Recently Started</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //arrivals */}
                                </div>
                                {/* //product right */}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Events;