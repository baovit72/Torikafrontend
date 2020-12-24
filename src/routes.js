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

export default [{
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: () => < Redirect to = "/blog-overview" / >
    },
    {
        path: "/blog-overview",
        layout: DefaultLayout,
        component: BlogOverview
    },
    {
        path: "/user-profile-lite",
        layout: DefaultLayout,
        component: UserProfileLite
    },
    {
        path: "/add-new-post",
        layout: DefaultLayout,
        component: AddNewPost
    },
    {
        path: "/errors",
        layout: DefaultLayout,
        component: Errors
    },
    {
        path: "/components-overview",
        layout: DefaultLayout,
        component: ComponentsOverview
    },
    {
        path: "/tables",
        layout: DefaultLayout,
        component: Tables
    },
    {
        path: "/blog-posts",
        layout: DefaultLayout,
        component: BlogPosts
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
    },
    {
        path: "/tour",
        layout: DefaultLayout,
        component: Tour,
    },
    {
        path: "/trip",
        layout: DefaultLayout,
        component: Trip,
    }


];