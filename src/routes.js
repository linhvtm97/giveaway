import React from 'react';
import Register from './components/login/Register';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import Main from './components/main/Main';
import Events from './components/events/Events';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';
import Charity from './components/charities/Charity';
import EventDetail from './components/events/EventDetail';
import Products from './components/products/Products';
import Checkout from './components/payment/Checkout';
import Payment from './components/payment/Payment';


const routes = [
    {
        path: '/events',
        exact: true,
        main: ({ match }) => <Events match={match} />
    },
    {
        path: '/events/:value',
        exact: true,
        main: ({ match }) => <EventDetail match={match} />
    },
    {
        path: '/charities',
        exact: true,
        main: ({ match }) => <Charity match={match} />
    },
    {
        path: '/events/:value/shop',
        exact: true,
        main: ({ match }) => <Products match={match} />
    },
    {
        path: '/',
        exact: true,
        main: ({ match }) => <Main match={match} />
    },
    {
        path: '/register',
        exact: true,
        type: 'auth',
        main: ({ match }) => <Register match={match} />
    },
    {
        path: '/login',
        exact: true,
        type: 'auth',
        main: ({ match }) => <Login match={match} />
    },
    {
        path: '/logout',
        exact: true,
        type: 'auth',
        main: ({ match }) => <Logout match={match} />
    },
    {
        path: '/about',
        exact: false,
        main: ({ match }) => <AboutUs match={match} />
    },
    {
        path: '/contact',
        exact: false,
        main: ({ match }) => <Contact match={match} />
    },
    {
        path: '/checkout',
        exact: true,
        main: ({ match }) => <Checkout match={match} />
    },
    {
        path: '/payment',
        exact: true,
        main: ({ match }) => <Payment match={match} />
    },
];

export default routes;