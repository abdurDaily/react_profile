import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import React from 'react'; 
let frontEndRoutes = [
    {
        path: '/',
        title: 'HOME',
        icon: React.createElement(IoMdHome, null)
    },
    {
        path: '/about',
        title: 'ABOUT',
        icon: React.createElement(FaRegUser , null)
    },
];
export { frontEndRoutes };