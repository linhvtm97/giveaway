import React from 'react';
// import NotFound from './pages/NotFound/NotFound';
// import TourDetail from "./components/TourDetail/TourDetail";
// import Tours from './components/Tours/Tours';
import Register from './components/login/Register';
import Login from './components/login/Login';
import Main from './components/main/Main';

// import Ourgallery from './components/Ourgallery/Ourgallery';
// import Profile from './components/Profile/Profile';

const routes = [
    // {
    //     path: '/',
    //     exact: true,
    //     main: ({ match }) => <Content match={match} />
    // },
    {
        path: '/home',
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
    }
    // {
    //     path: '/user/:id/edit',
    //     exact: false,
    //     main: ({ match }) => <Profile match={match} />
    // },
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
];

export default routes;