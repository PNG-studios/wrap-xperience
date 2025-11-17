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
    <nav className="w-full bg-black/70  text-[#ffffff] justify-center flex ">
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
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 bg-primary-light hover:bg-primary-dark rounded-md"
            />
          )}

          {/* DESKTOP MENU OVERLAY */}
          {isMobile && menuOpen && (
            <div className="fixed top-0 right-0 w-full h-full bg-white shadow-lg p-8 z-10">
              <ul className="flex flex-col gap-6">
                <a className="text-black text-8xl font-inter" href="">WRAP-XPERIENCE</a>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-black text-8xl"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
