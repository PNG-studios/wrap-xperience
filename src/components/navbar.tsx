export default function Navbar() {
  return (
    <nav className="w-full bg-black/70  text-[#ffffff] justify-center flex ">
      <div className="max-w-[1440px] w-full text-[1.5rem] flex flex-row justify-between py-4">
        <div>
          <a href="/">WRAP-XPERIENCE</a>
        </div>
        <div>
          <ul className="flex flex-direction-row gap-4">
            <li><a href="/portfolio">PORTFOLIO</a></li>
            <li><a href="/informatie">INFORMATIE</a></li>
            <li><a href="/tarieven">TARIVEN</a></li>
            <li><a href="/over-ons">OVER ONS</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}