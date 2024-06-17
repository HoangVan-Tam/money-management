import { BsArrowLeftShort } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { menu } from "../contants/Navigation";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex">
        <div
          className={`bg-color-1 h-screen p-5 relative rounded-lg duration-300 ${
            open ? "w-52" : "w-20"
          }`}
        >
          <Button
            onClick={() => setOpen(!open)}
            className={`rounded-full text-xl
        absolute -right-3 top-[61px] opacity-70 hover:opacity-100 ${
          !open ? "rotate-180" : ""
        }`}
          >
            <BsArrowLeftShort />
          </Button>

          <div className="flex items-center">
            <div className="rounded-3xl bg-color-4 text-color-1 py-2 px-3 text-xl">
              <GrMoney />
            </div>
            <div className={`ml-3 text-xl text-color-4 ${!open && "scale-0"}`}>
              TamHuong
            </div>
          </div>
          <div className="grid mt-10 text-color-4">
            {menu.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`mt-1 p-2 text-sm hover:bg-color-3 rounded-md flex items-center ${
                    location.pathname === item.href && "bg-color-3"
                  }`}
                  to={item.href}
                >
                  <span className={`text-3xl ${open && "mr-3"}`}>
                    {item.icon}
                  </span>
                  {open && <span>{item.title}</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
