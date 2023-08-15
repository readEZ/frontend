// routeConfig.js

import Login from "../pages/auth/Login";
import { WorskspaceReadPage } from "../pages/private";
import PublicHomePage from "../pages/public/Home";


export const routes = [
    {
        path: '/',
        component: PublicHomePage,
        private: false,
    },
    {
        path: '/login',
        component: Login,
        private: false,
    },
    {
        path: '/read',
        component: WorskspaceReadPage,
        private: true,
    },
    // Add more route configurations as needed
];