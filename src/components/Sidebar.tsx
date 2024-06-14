import { BsArrowLeftShort } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { menu } from "../contants/navigation";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(true)
    return (
        <>
            <div className="flex">
                <div className={`bg-color-1 h-screen p-5 relative duration-300 ${open ? 'w-72' : 'w-24'}`}>
                    <BsArrowLeftShort className={`bg-color-4 text-color-1 border-[1px] border-color-1 rounded-full text-3xl
        absolute -right-3 top-10 cursor-pointer duration-300
        ${!open ? 'rotate-180' : ''}`} onClick={() => setOpen(!open)} />
                    <div className="flex items-center mt-1">
                        <div className="rounded-lg bg-color-4 text-color-1 p-3 text-3xl">
                            <GrMoney />
                        </div>
                        <h1 className={`ml-3 text-2xl text-color-4 ${!open && 'scale-0'}`}>TamHuong</h1>
                    </div>
                    <div className="grid mt-10 text-color-4">
                        {menu.map((item, index) => {
                            return (
                                <Link key={index} className={`p-2 hover:bg-color-3 rounded-md flex items-center ${location.pathname === item.href && 'bg-color-3'}`}
                                    to={item.href}>
                                    <span className={`text-4xl ${open && 'mr-3'}`}>{item.icon}</span>
                                    {open && (
                                        <span>
                                            {item.title}
                                        </span>
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar