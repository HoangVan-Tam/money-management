

import { RiDashboardFill } from "react-icons/ri";

interface Navigation {
    title: string,
    href: string
    icon: any
}

export const menu:Navigation[] = [
    {
        title: 'Dashboard',
        href: '/',
        icon: <RiDashboardFill/>
    },
    {
        title: 'Income',
        href: '/income',
        icon:<RiDashboardFill/>
    },
    {
        title: 'Spending',
        href: '/spending',
        icon:<RiDashboardFill/>
    },
    {
        title: 'Savings',
        href: '/savings',
        icon:<RiDashboardFill/>
    }
];