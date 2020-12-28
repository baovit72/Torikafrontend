import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

import Login from './app/pages/login';
import Signup from './app/pages/signup';

import Place from './app/pages/place';
import Tour from './app/pages/tour';
import Trip from './app/pages/trip';
import Booking from './app/pages/booking';

import Dashboard from './app/pages/dashboard'

export default [{
        path: "/components-overview",
        layout: DefaultLayout,
        component: ComponentsOverview,
        isAdmin:true
    },
    {
        path: "/login",
        layout: Login,
        component: null
    },
    {
        path: "/signup",
        layout: Signup,
        component: null
    },
    {
        path: "/place",
        layout: DefaultLayout,
        component: Place,
        isAdmin: true
    },
    {
        path: "/tour",
        layout: DefaultLayout,
        component: Tour,
        isAdmin: true
    },
    {
        path: "/trip",
        layout: DefaultLayout,
        component: Trip,
        isAdmin: true
    },
    {
        path: "/user-profile",
        layout: DefaultLayout,
        component: UserProfileLite
    }, {
        path: "/booking",
        layout: Booking,
        component: null,
        isUser: true,
    },
    {
        path: "/booking",
        layout: Booking,
        component: null,
    },
    {
        path: "/",
        layout: DefaultLayout,
        component: BlogOverview,
        isAdmin: true,
    },
    {
        path: "/your-tickets",
        layout: Login,
        component: null, 
    },


];