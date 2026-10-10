import { Link } from '../context/RouterContext';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, MessageSquare, Navigation, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#130922] border-t border-[#D4AF37]/25 text-[#D1C7BD] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Hotel Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#2B1745] text-[#D4AF37]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z" fill="#D4AF37" stroke="none" />
                </svg>
              </span>
              <span className="font-serif text-xl font-bold tracking-wide text-white">
                Seeds Hotel
              </span>
            </div>
            <p className="text-sm text-[#C4B7AB] leading-relaxed">
              Seeds Hotel Shah Alam Seksyen 7 I-City provides a tranquil sanctuary of comfort, spotless hygiene, and modern hospitality just minutes from I-City Theme Park and Central i-City Mall.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#D4AF37]">
              <Clock className="w-4 h-4 shrink-0" />
              <span>24/7 Front Desk & Security</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#D4AF37]/20 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#D4AF37] transition-colors inline-block">
                  Our Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors inline-block">
                  About Us & Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors inline-block">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <a
                  href={HOTEL_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Direct Inquiries */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#D4AF37]/20 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span className="leading-snug">{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="hover:text-[#D4AF37] transition-colors font-medium text-white"
                >
                  {HOTEL_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={HOTEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>WhatsApp Inquiry</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Verified Amenities Highlight */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#D4AF37]/20 pb-2">
              Verified Standards
            </h4>
            <ul className="space-y-2 text-xs text-[#C4B7AB]">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Verified Boutique Accommodation</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Private En-Suite Hot Showers</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>High-Speed Wi-Fi in Every Room</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Elevator / Lift Access to All Floors</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Individual Split Air Conditioning</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href={HOTEL_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-[#2B1745] hover:bg-[#381f5c] text-[#D4AF37] border border-[#D4AF37]/30 rounded transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9286]">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#D4AF37]">Seksyen 7, Shah Alam</span>
            <span>·</span>
            <span>Non-Smoking Property</span>
            <span>·</span>
            <span>24/7 Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
