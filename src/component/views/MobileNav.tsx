import { AlignRight } from "lucide-react"
import { useState, useEffect, useRef } from "react";

const navItems = [
  {
    label: `About Us`,
    url: "#",
  },
  {
    label: `Who We Serve`,
    url: "#",
  },

  {
    label: `Blog`,
    url: "#",
  },
];


export default function MobileNav() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if(menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false)
      }
    }

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openMenu]); // when openMenu changes, it triggers a render.

  return (
    <nav className="navigation--mobile lg:hidden relative" ref={menuRef}>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpenMenu(!openMenu)}
        className="h-8 w-8 flex items-center justify-center cursor-pointer
        active:scale-90 duration-300">
        <AlignRight size={28} strok-width={3} />
      </button>
      <ul
        className={`
            transition-all duration-300 ease-in-out
            absolute top-[40px] right-0 w-[320px] bg-white rounded-2xl p-2 shadow-md z-50
            flex flex-col gap-2
            ${openMenu ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'}
          `}>
        {
          navItems.map((navItem, index) => (
            <li key={index}>
              <a 
              href="#" 
              className="btn btn-md hover:underline w-full"
              onClick={() => setOpenMenu(false)}>
                {navItem.label}
              </a>
            </li>
          ))
        }
        <li>
          <a
            href="https://cal.com/cmmutale/918realestatewebsites"
            target="_blank"
            className="btn btn-lg btn-primary w-full">Start Selling Homes</a
          >
        </li>
      </ul>

    </nav >
  )
}
