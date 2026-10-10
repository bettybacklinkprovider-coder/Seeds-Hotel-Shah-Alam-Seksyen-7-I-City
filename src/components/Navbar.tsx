import { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { Menu, X, Phone } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export function Navbar() {
  const { currentPage, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'Rooms', path: '/rooms', id: 'rooms' },
    { label: 'About Us', path: '/about', id: 'about' },
    { label: 'Contact', path: '/contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#190D2B]/95 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-serif font-bold tracking-wide text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
            aria-label="Seeds Hotel Home"
          >
            <span className="w-8 h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#2B1745] text-[#D4AF37] shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z" fill="#D4AF37" stroke="none" />
              </svg>
            </span>
            <span className="font-serif tracking-wider uppercase text-lg sm:text-xl">
              Seeds Hotel
            </span>
          </Link>

          {/* Zone 2: 4 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#E8E2D2] hover:text-[#D4AF37]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="text-xs text-[#E8E2D2] hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors whitespace-nowrap"
              title="Call Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{HOTEL_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] active:scale-[0.98] transition-all rounded shadow-md whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => navigate('/contact')}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] rounded whitespace-nowrap cursor-pointer"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E8E2D2] hover:text-[#D4AF37] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#190D2B] border-b border-[#D4AF37]/30 px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold border-b border-[#D4AF37]/40'
                      : 'text-[#E8E2D2] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#D4AF37]/20 flex flex-col gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-[#E8E2D2] hover:text-[#D4AF37]"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>{HOTEL_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/contact');
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] rounded transition-all cursor-pointer"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
