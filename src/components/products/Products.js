import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import CartContainer from './../../containers/CartContainer';
import callApi from "./../../untils/apiCaller";
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            isLoading: true,
            errors: null
        }
    }

    componentDidMount() {
        callApi('items', "GET", null)
            .then(res => {
                this.setState({ products: res.data.data })
            })
        callApi('categories', "GET", null)
            .then(res => {
                this.setState({ categories: res.data.data })
            })
    }

    render() {
        const { products } = this.state;
        const { categories } = this.state;
        return (
            <div>
                <div className="ads-grid py-sm-5 py-4">
                    {/* Container */}
                    <div className="container py-xl-4 py-lg-2">
                        {/* Filter and search */}
                        <div className="py-xl-2 py-lg-2">
                            <div className="row">
                                <div className="col-3 agileits_search">
                                    {/* <h5 className="agileits-sear-head mb-3">Categories</h5> */}
                                    <select className="form-control">
                                        <option >All</option>
                                        {categories.map((item) => {
                                            return (
                                                <option key={item.id}>{item.name}</option>
                                            );
                                        })
                                        }
                                    </select>
                                </div>
                                <div className="col-9 agileits_search">
                                    <form className="form-inline" action="#" method="post">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                                        <button className="btn"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Filter and search */}

                        {/* Product list */}
                        <div className="py-xl-4 py-lg-2">
                            <div className="wrapper">
                                {/* first section */}
                                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                    <h3 className="heading-tittle text-center font-italic">Shop now</h3>
                                    <div className="row">
                                        {products.map((item, index) => {
                                            return (
                                                <div key={item.id} className="col-md-4 product-men mt-5">
                                                    <div className="men-pro-item simpleCart_shelfItem">
                                                        <div className="men-thumb-item text-center">
                                                            <img src={item.avatar} alt="None" className="img-thumbnail" />
                                                            <div className="men-cart-pro">
                                                                <div className="inner-men-cart-pro">
                                                                    <Link to={"/items/" + item.id} className="link-product-add-cart">Quick View</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item-info-product text-center border-top mt-4">
                                                            <h4 className="pt-1">
                                                                <Link to={"/items/" + item.id}>{item.name}</Link>
                                                            </h4>
                                                            <div className="info-product-price my-2">
                                                                <span className="item_price">${Math.floor(item.price - 10)}</span>
                                                                <del>${item.price}</del>
                                                            </div>
                                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                                <Popup trigger={<button type="button" className="btn btn-primary">Add to cart</button>
                                                                } modal>
                                                                    <CartContainer
                                                                        key={index}
                                                                        cart={item}
                                                                        index={index}
                                                                    />
                                                                </Popup>
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
                        {/* Product list */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;