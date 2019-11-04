import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
class Banner extends Component {
    render() {
        return (
            <Slider>
                <img src="/images/b1.jpg"></img>
                <h2>Test slide</h2>
                {/* {content.map((article, index) => <div key={index}>
                    <h2>{article.title}</h2>
                    <div>{article.description}</div>
                </div>)} */}
            </Slider>
        );
    }
}

export default Banner;
