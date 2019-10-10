import React from 'react';
import Register from './components/login/Register';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Events from './components/events/Events';
import AboutUs from './components/about/AboutUs';
import Contact from './components/contact/Contact';
import Charity from './components/charities/Charity';
import EventDetail from './components/event/EventDetail';
import Products from './components/products/Products';

const routes = [
    {
        path: '/events',
        exact: true,
        main: ({ match }) => <Events match={match} />
    },
    {
        path: '//events/1/details',
        exact: true,
        main: ({ match }) => <EventDetail match={match} />
    },
    {
        path: '/charities',
        exact: true,
        main: ({ match }) => <Charity match={match} />
    },
    {
        path: '/products',
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
        main: ({ match }) => <Register match={match} />
    },
    {
        path: '/login',
        exact: true,
        main: ({ match }) => <Login match={match} />
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
    }
];

export default routes;