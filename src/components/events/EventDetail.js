import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import callApi from "./../../untils/apiCaller";

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
            cause: [],
            isLoading: true,
            errors: null
        }
    }

    componentDidMount() {
        let {match} = this.props;
        let id = match.params.value;
        callApi(`events/${id}`, "GET", null)
            .then(res => {
                this.setState({ event: res.data.data })
            })
    }
    render() {
        const { event } = this.state;
        const { cause } = this.state;
        return (
            <div>
                <div className="banner-bootom-w3-agileits py-5">
                    <div className="container py-xl-4 py-lg-2">
                        {/* tittle heading */}
                        <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                            <span>{event.name}</span>
                        </h3>
                        {/* //tittle heading */}
                        <div className="row">
                            <div className="col-lg-5 col-md-8 single-right-left ">
                                <div className="thumb-image">
                                    <img
                                        src={event.avatar}
                                        data-imagezoom="true"
                                        className="img-fluid"
                                        alt="1"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
                                <h3 className="mb-3">
                                    <span>
                                        <i className="fas fa-map-marker-alt mr-2"> {event.location}</i>
                                    </span>
                                </h3>
                                <h4 className="mb-3">
                                    {cause.name}
                                </h4>
                                <div className="d-flex justify-content-between">
                                    <div className="col pl-0">
                                        <span className="text-muted font-small d-block mb-2">Goal items</span>
                                        <span className="h5 text-dark font-weight-bold">{event.goal_item}</span>
                                    </div>
                                    <div className="col">
                                        <span className="text-muted font-small d-block mb-2">Raised</span>
                                        <span className="h5 text-dark font-weight-bold">{event.goal_item}</span>
                                    </div>
                                    <div className="col pr-0">
                                        <span className="text-muted font-small d-block mb-2">Day left</span>
                                        <span className="h5 text-dark font-weight-bold">12</span>
                                    </div>
                                </div>

                                {/* <p className="mb-3">
                                    <span className="item_price"> Raised {event.goal_item} items</span>
                                </p> */}
                                <p>{event.description}</p>
                                <Link to={"/events/" + event.id + "/shop"}>
                                    <button type="button" className="btn btn-primary">Shop now</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default EventDetail;