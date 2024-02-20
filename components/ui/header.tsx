import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30 header-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="flex justify-center items-center text-2xl md:text-3xl font-semibold" aria-label="Cruip">
              <img src="./logo/logo-wbg.png" className="h-8 md:h-12" alt="" />
              Hack2Web
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/event"
                  className="font-medium text-white hover:text-[#fe00fe] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className="font-medium text-white hover:text-[#fe00fe] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="font-medium text-white hover:text-[#fe00fe] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/register-yourself" className="btn-sm text-white bg-[#b815ca] hover:bg-[#672f93] rounded-lg ml-3">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
