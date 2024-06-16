

import { LuLayoutDashboard } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

interface Navigation {
    title: string,
    href: string
    icon: any
}

export const menu:Navigation[] = [
    {
        title: 'Dashboard',
        href: '/',
        icon: <LuLayoutDashboard />
    },
    {
        title: 'Income',
        href: '/income',
        icon: <GiReceiveMoney />
    },
    {
        title: 'Spending',
        href: '/spending',
        icon: <GiPayMoney />
    },
    {
        title: 'Savings',
        href: '/savings',
        icon: <TbPigMoney />

    }
];