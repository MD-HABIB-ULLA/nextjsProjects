"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  const routes = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
  ];
  const list = (
    <>
      {routes.map((route, i) => (
        <li
          key={i}
          className={`${
            pathName === route.path && "bg-[#37447E]/50 px-3 py-2 rounded-lg"
          } text-black font-bold active:normal-case `}
        >
          <Link href={route.path}>{route.title}</Link>
        </li>
      ))}
    </>
  );
  return (
    <div className="w-full max-w-7xl m-auto px-5">
      <div className=" h-16 w-full ">
        <div className="h-full flex items-center  w-full">
          <div className="md:grid flex gap-2 grid-cols-3 w-full">
            <div className="w-full flex items-start ">
              <div className="text-3xl font-bold">
                <Link href="/">
                  {" "}
                  Digital<span className="text-[#37447E]">Albo</span>
                </Link>
              </div>
            </div>
            <div className="w-full flex items-center md:justify-center justify-end   ">
                <div className="text-2xl block md:hidden">
                    <FaBars />
                </div>
              <div className="w-full md:block hidden">
                <ul className="flex justify-evenly items-center ">{list}</ul>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <button className="px-3 py-2 text-white bg-[#091133] rounded-lg font-bold"> Login </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
