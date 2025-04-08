"use client";

import ModeToggle from "./mode-toggle";
import { AvatarDemo } from "./avatar";
import Link from "next/link";
import SocialIcons from "./socialIcons";
import { useState } from "react";
import { AlignCenter, ShieldX } from "lucide-react";
 type navType = {
  id: number;
  link: string;
  title: string;
 }
 const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
const navLinks: navType[] = [
  {id: 1, link: "/projects", title: "Projects"},
  {id: 2, link: "/portfolio", title: "Portfolio"},
  {id: 3, link: "/contact", title: "Contact"}
]
  return (
    <>
      
    
<nav className={`fixed top-0 px-5 py-3 left-1/2 mt-2 md:mt-5 -translate-x-1/2 z-[50] w-11/12 flex flex-col  max-w-7xl items-center justify-between  bg-background/20 backdrop-blur-lg lg:rounded-full ${isOpen ? "rounded-sm" : "rounded-full"} `}>
<div className="flex items-center justify-between w-full">

<div className="flex items-center gap-x-3">
          <AvatarDemo />
           <Link  href={"/about"}>
           <h2 className="text-xl">Neto Codes</h2>
           </Link>
</div>
           {navLinks && (
            <ul className="hidden lg:flex underline underline-offset-4 decoration-[#1013d7] dark:decoration-cyan-300 gap-x-5 items-center justify-end">
              {navLinks.map((nav) => (
                <li key={nav.id} className="hover:bg-background/30 rounded-lg">
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
           )}


{/* hide social icons on meduim and small screens and leave mode toggler on all   */}
<div className="flex items-center lg:flex-row-reverse gap-x-2 lg:gap-x-4">
<ModeToggle />
<div className="lg:hidden">
  <button onClick={handleToggle} className="cursor-pointer flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-cyan-300 dark:hover:text-gray-800 transition duration-300 ease-in-out">
    {isOpen ? <ShieldX  size={24} /> : <AlignCenter size={24} />}
  </button>
</div>
<div className="hidden lg:block  gap-x-5">
     <SocialIcons />
</div>
    
</div>
{/* hide social icons on mduim and small screens and leave mode toggler on all   */}
</div>

{isOpen && (
  <>
<ul className="w-full flex lg:hidden flex-col items-center justify-center rounded-lg bg-background/20 backdrop-blur-lg my-4">
  {navLinks.map((nav) => (
    <Link key={nav.id} className="border-b shadow-lg w-full " href={nav.link}>
    <li  className="w-full text-center py-2 px-4 hover:bg-background/30 rounded-lg">
      {nav.title}
    </li>
      </Link>
  ))}
  </ul>
<div className="lg:hidden">
<SocialIcons />
</div>  </>
)}
</nav>
    </>
  );
}
export default NavbarComp;