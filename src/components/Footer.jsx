import { Link } from 'react-router-dom'
import { Rocket } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-24 mb-32">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-12">
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                <Rocket className="text-white w-3.5 h-3.5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">UltimateCSS</span>
            </Link>
            <p className="text-brand-gray text-2xl font-light leading-relaxed max-w-md">
              High-performance digital architecting focused on measurable growth and technical
              excellence.
            </p>
            <div className="flex gap-10 mt-16">
              <a
                href="#"
                className="text-brand-black hover:text-accent transition-all text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-brand-black hover:text-accent transition-all text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                Twitter / X
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-10 uppercase tracking-[0.4em] text-[10px] text-brand-gray">
              Navigation
            </h4>
            <ul className="space-y-6 font-medium text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-all">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-accent transition-all">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-accent transition-all">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-10 uppercase tracking-[0.4em] text-[10px] text-brand-gray">
              Contact
            </h4>
            <p className="text-xl font-light leading-relaxed">
              admin@ultimatecss.com
              <br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-brand-gray text-[10px] tracking-[0.4em] uppercase font-bold">
            © 2025 UltimateCSS Agency. High-Performance Certified.
          </p>
          <div className="flex gap-12 text-brand-gray text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-brand-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-black transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
