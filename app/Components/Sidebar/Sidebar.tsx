"use client";
import React, { useState } from "react";
import UserItem from "../userItem";
import menu from "./menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from 'classnames'

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const wrapperClasses = `h-screen px-4 pt-8 pb-4 flex justify-between flex-col border ${
    toggleCollapse ? "w-20" : "w-80"
  }`;
  
  const currentPath = usePathname();

  return (
    <div className={wrapperClasses}>
      <div>
        <UserItem />
      </div>
      <div>
        <ul className="nav-items">
          {menu.map((item) => {
            return (
              <li 
              key={item.id}
              className={classnames({
                'nav-item p-3 hover:font-bold': true,
                 'text-white font-bold' : item.href === currentPath,
                 })}>
                <item.icon className="inline size-5" /><Link href={item.href} className="p-3">{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;
