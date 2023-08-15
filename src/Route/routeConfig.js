// routeConfig.js

import { LoginPage, RegisterPage } from "../pages/auth";
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
        component: LoginPage,
        private: false,
    },
    {
        path: '/register',
        component: RegisterPage,
        private: false,
    },
    {
        path: '/read',
        component: WorskspaceReadPage,
        private: true,
    },
    // Add more route configurations as needed
];