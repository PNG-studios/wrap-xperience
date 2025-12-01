"use client";
import Link from "next/dist/client/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, use } from "react";
import styles from "./navbar.module.css";

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
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div>
          <Link href="/">WRAP-XPERIENCE</Link>
        </div>
        <div>
          {!isMobile ? (
            <ul className={styles.navbar__desktop}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={
                      pathname === item.href ? styles.navbar__item : ""
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <a
              onClick={() => setMenuOpen(!menuOpen)}
              className={styles.navbar__mobile__hamburger_menu}
            >
              <div className={styles.menu}>
                <div className={styles.menu_stripe}></div>
                <div className={styles.menu_stripe}></div>
                <div className={styles.menu_stripe}></div>
              </div>
            </a>
          )}

          {/* DESKTOP MENU OVERLAY */}
          {isMobile && menuOpen && (
            <div className={styles.navbar__mobile__container}>
              <ul className={styles.navbar__mobile__menu}>
                <a
                  className={styles.navbar__mobile__item}
                  href=""
                >
                  HOME
                </a>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={styles.navbar__mobile__item}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <a
                  className={styles.navbar__mobile__item}
                  onClick={() => setMenuOpen(false)}
                >
                  Close navigation
                </a>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}