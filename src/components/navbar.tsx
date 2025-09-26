'use client';
import { usePathname } from 'next/navigation';

export default function Navbar() {

  const pathname = usePathname();

    const navItems = [
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'INFORMATIE', href: '/informatie' },
    { name: 'TARIEVEN', href: '/tarieven' },
    { name: 'OVER ONS', href: '/over-ons' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-black/70  text-[#ffffff] justify-center flex ">
      <div className="max-w-[1440px] w-full text-[1.5rem] flex flex-row justify-between py-[1.5rem]">
        <div>
          <a href="/">WRAP-XPERIENCE</a>
        </div>
        <div>
          <ul className="flex gap-[2.1rem]"> 
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={pathname === item.href ? 'text-primary-light' : ''}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}