"use client";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, use } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const pathname = usePathname();

  const navItems = [
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "INFORMATIE", href: "/informatie" },
    { name: "TARIEVEN", href: "/tarieven" },
    { name: "OVER ONS", href: "/over-ons" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed w-[100vw] bg-black/70  text-[#ffffff] justify-center flex sm:px-0 px-8 z-100">
      <div className="max-w-[1440px] w-[100%] sm:text-[1.5rem] text-[3rem] flex flex-row justify-between py-[1.5rem]">
        <div>
          <Link href="/">WRAP-XPERIENCE</Link>
        </div>
        <div>
          {!isMobile ? (
            // MOBILE NAV — your existing links
            <ul className="flex gap-[2.1rem]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={
                      pathname === item.href ? "text-primary-light" : ""
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            // DESKTOP NAV — a square menu button
            <a
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-primary-light hover:bg-primary-dark"
            >
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="4rem"
                height="4rem"
                viewBox="0 0 28 24"
                fill="none"
              >
                <path
                  d="M2.61 0H25.041C26.482 0 27.65 1.168 27.65 2.61C27.65 4.052 26.482 5.22 25.041 5.22H2.61C1.168 5.22 0 4.052 0 2.61C0 1.168 1.168 0 2.61 0Z"
                  fill="currentColor"
                />
                <path
                  d="M2.61 9.39H25.041C26.482 9.39 27.65 10.558 27.65 12C27.65 13.442 26.482 14.61 25.041 14.61H2.61C1.168 14.61 0 13.442 0 12C0 10.558 1.168 9.39 2.61 9.39Z"
                  fill="currentColor"
                />
                <path
                  d="M2.61 18.781H25.041C26.482 18.781 27.65 19.949 27.65 21.391C27.65 22.833 26.482 24.001 25.041 24.001H2.61C1.168 24.001 0 22.833 0 21.391C0 19.949 1.168 18.781 2.61 18.781Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}

          {/* DESKTOP MENU OVERLAY */}
          {isMobile && menuOpen && (
            <div className="fixed top-0 right-0 w-full h-[99vh] bg-white shadow-lg p-8 z-10">
              <ul className="flex flex-col h-[60%] justify-evenly gap-6">
                <a
                  className="text-black text-8xl font-inter font-bold pb-8 border-b-3 border-dark-light"
                  href=""
                >
                  WRAP-XPERIENCE
                </a>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-black text-8xl border-b-1 border-gray-300 font-inter"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <a
                  className="text-black text-8xl font-inter"
                  onClick={() => setMenuOpen(false)}
                >
                  Close
                </a>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
