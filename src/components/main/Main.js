import React from 'react';
import Events from '../events/Events';
import Banner from '../banner/Banner';

function Main() {
    return (
        <div>
            <div className="ads-grid py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                    <Banner />
                    <Events />
                </div>
            </div>
        </div>
    );
}

export default Main;
