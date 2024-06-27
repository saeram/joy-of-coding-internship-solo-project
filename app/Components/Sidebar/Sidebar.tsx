"use client";
import UserItem from "../userItem";
import menu from "./menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from 'classnames'
import AddTask from "./addTask";

const Sidebar = () => {
 
  
  const currentPath = usePathname();

  return (
    <div className="min-h-screen px-4 pt-8 pb-4 flex justify-between flex-col border">
      <div>
        <UserItem />
      </div>
      <div>
        <AddTask />
        <ul className="nav-items mb-10">
          {menu.map((item) => {
            return (
              <li 
              key={item.id}
              className={classnames({
                'nav-item p-3 hover:font-bold': true,
                 'font-bold' : item.href === currentPath,
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
