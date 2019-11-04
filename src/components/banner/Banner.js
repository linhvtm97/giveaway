import React, { Component } from 'react';
import 'react-animated-slider/build/horizontal.css';
import Carousel from 'react-bootstrap/Carousel'
class Banner extends Component {
    render() {
        return (
            <div>
                <Carousel className="carousel slide position-static">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/bg.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Listen to your heart</h3>
                            <p>Give love everyday, receive love in a whole life!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/bg2.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Share things, Share love, Share moment</h3>
                            <p>The more you give, the more you receive</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Banner;
