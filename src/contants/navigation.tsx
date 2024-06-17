

import { LuLayoutDashboard } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { ReactNode } from "react";
import { GrTransaction } from "react-icons/gr";

interface Navigation {
    title: string,
    href: string
    icon: ReactNode
}

export const menu:Navigation[] = [
    {
        title: 'Dashboard',
        href: '/',
        icon: <LuLayoutDashboard />
    },
    {
        title: 'Transaction',
        href: '/transaction',
        icon: <GrTransaction />
    },
    {
        title: 'Savings',
        href: '/savings',
        icon: <TbPigMoney />

    }
];