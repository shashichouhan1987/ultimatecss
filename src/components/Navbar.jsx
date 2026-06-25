import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Rocket } from 'lucide-react'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Work' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-50 transition-all duration-500 ${
        scrolled ? 'h-16' : 'h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Rocket className="text-white w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">UltimateCSS</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link hover:text-accent${isActive ? ' active text-accent' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="bg-accent hover:bg-[#d12f2f] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:-translate-y-0.5"
        >
          Let's Chat
        </Link>
      </div>
    </nav>
  )
}
