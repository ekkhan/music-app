"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import Box from "./Box" //because its in the same folder

// defining typescript interface
interface SidebarProps {
    // must receive prop called children
    // React.ReactNode means anything you can render in JSX
    children: React.ReactNode;
}

// constant Sidebar which is a React Functional Component
// i destruct children from the props object and return them

// const <variableName>: <Type> = <value>;
const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const pathname = usePathname();

    // useMemo hook, recalculate the routes array only when pathname changes to optimize performance
    const routes = useMemo(()=> [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);
    return (
        <div className="flex h-full">
          <div
            className="
              hidden 
              md:flex 
              flex-col 
              gap-y-2
              bg-black
              h-full
              w-[300px]
              p-2">
            <Box>
                Sidebar Navigation
            </Box>
          </div>
        </div>
    );
}

export default Sidebar;
