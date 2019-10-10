import React, { Component } from 'react';
import Event from '../event/Event';

class Events extends Component {
    render() {
        return (
            <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                <h3 className="heading-tittle text-center font-italic">New Events</h3>
                <div className="row">
                    <Event />
                    <Event />
                    <Event />
                </div>
            </div>
        );
    }
}

export default Events;