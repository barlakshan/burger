"use client";

import { listItems } from "@/constants/nav";
import Link from "next/link";
import { AuthBtns } from "@/constants/nav";
import { IoClose, IoMenu } from "react-icons/io5";
import { use, useState } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  const listItemsBefore = `
  before:content:['']
  before:absolute
  before:bottom-0
  before:right-0
  before:w-0
  before:h-[2px]
  before:rounded-[3px]
  before:bg-yellow-400
  before:transition-all

  `;

  return (
    <nav className="main_nav w-full absolute top-10 left-2/4 -translate-2/4 max-lg:relative container flex justify-between items-center p-6 mx-auto">
      <div className="logo_wrapper">
        <span className="font-bold text-yellow-400 text-[28px]">Burger.</span>
        <div className="line__group flex items-center justify-between">
          <span className="w-[45px] h-[3px] rounded-[3px] bg-yellow-400"></span>
          <span className="w-[30px] h-[3px] rounded-[3px] bg-yellow-400"></span>
        </div>
      </div>
      {/* Exchange btn */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="exchange hidden max-lg:flex cursor-pointer transition-all hover:bg-yellow-400 rounded-md w-[40] h-[40px] items-center justify-center text-white"
      >
        {isActive ? (
          <>
            <IoClose size={28} />
          </>
        ) : (
          <>
            <IoMenu size={28} />
          </>
        )}
      </button>

      <ul
        className={`main__list flex justify-between items-center gap-4 max-lg:absolute max-lg:top-full max-lg:right-0 max-lg:flex-col max-lg:w-60 max-lg:p-4 max-lg:bg-neutral-950 rounded-md ${
          isActive ? "max-lg:flex" : "max-lg:hidden"
        }`}
      >
        {listItems.map((ele, index) => (
          <li className="list__item max-lg:w-full" key={index}>
            <Link
              href={ele.href}
              className={`block py-3 px-6 relative text-white font-semibold transition-all hover:before:w-full hover:text-yellow-400 ${listItemsBefore}`}
            >
              {ele.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="auth__btns flex items-center gap-6 max-lg:hidden">
        {AuthBtns.map((ele, index) => (
          <button
            key={index}
            className={`py-3 px-5 transition-all font-bold cursor-pointer rounded-4xl ${
              ele.isConvert
                ? "border-solid border-2 border-yellow-400 rounded-4xl text-yellow-400 hover:bg-yellow-400 hover:text-white"
                : "text-yellow-400 hover:bg-yellow-400 hover:text-white"
            }`}
          >
            {ele.text}
          </button>
        ))}
      </div>
    </nav>
  );
}
