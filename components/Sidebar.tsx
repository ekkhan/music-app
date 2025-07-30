"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import Box from "./Box" //because its in the same folder
import SidebarItem from "./SidebarItem"
import Library from "./Library"

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
                <div
                  className="
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-4
                  "> 
                  {routes.map((item) => (
                    <SidebarItem
                      key={item.label}
                      {...item}
                    />
                  ))}
                    
                </div>
            </Box>
            <Box className = "overflow-y-auto h-full">
                <Library />
            </Box>
          </div>
          <main className="overflow-y-auto h-full py-2">
            {children}
          </main>
        </div>
    );
}

export default Sidebar;
