import React, { Component } from 'react';
import Axios from 'axios';

class Charity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charities: [],
            isLoading: true,
            errors: null
        }
    }

    componentDidMount() {
        Axios.get('https://giveawayapi.herokuapp.com//api/v1/charities')
            .then(res => {
                const charities = res.data;
                console.log(res);
                this.setState({ charities: res.data.data })
                // window.location.replace("/");
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { isLoading, charities } = this.state;
        return (
            <div>
                <div className="join-w3l1 py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        <div className="row">
                            {
                                charities.map((item, id) => {
                                    console.log(item)
                                    const { name, email, avatar, description, address, phone_number } = item;
                                    return (
                                        <div className="col-lg-6 mt-lg-1 mt-5">
                                            <div className="join-agile text-left p-4">
                                                <div className="col-sm-7 offer-name">
                                                    <h6>{item.name}</h6>
                                                    <p>{item.address}</p>
                                                    <p>{item.description}</p>
                                                </div>
                                                <img src={item.avatar} alt="no image" className="img-thumbnail" />
                                            </div>
                                        </div>
                                    );
                                })
                            }

                            <div className="col-lg-6 mt-lg-10 mt-5 snipcart-details top_brand_home_details item_add single-item hvr-outline-out" >
                                <input type="submit" name="submit" value="Explore all items" className="button btn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Charity;

