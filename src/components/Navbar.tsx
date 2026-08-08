import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { layout84NavLinks } from '@/data/layout84';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-white/12 bg-[#0b1020]/88 shadow-2xl shadow-black/20 backdrop-blur-xl'
            : 'border-white/8 bg-[#0b1020]/45 backdrop-blur-lg'
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3 sm:px-7">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="ZLab logo"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <div className="text-lg font-extrabold leading-none text-white">Z Labs</div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                Smart Marketing & Real Growth
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {layout84NavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-[#ff9d2f]' : 'text-ink-100 hover:text-[#ff9d2f]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="template-primary-btn px-5 py-3 text-sm">
              Get A Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 px-5 pb-5 pt-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {layout84NavLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-white/8 text-white'
                        : 'text-white/85 hover:bg-white/6 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="template-primary-btn mt-4 justify-center"
            >
              Get A Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
