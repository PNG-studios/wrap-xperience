export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#00000033] text-[#ffffff] text-2xl flex flex-direction-row justify-between pl-[8rem] pr-[8rem] py-4">
      <div>
        <a href="/">wrap-xperience</a>
      </div>
      <div>
        <ul className="flex flex-direction-row gap-4">
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/informatie">Informatie</a></li>
          <li><a href="/tarieven">Tarieven</a></li>
          <li><a href="/over-ons">Over ons</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}