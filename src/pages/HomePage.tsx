import { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import {
  HOTEL_INFO,
  VERIFIED_ROOMS,
  VERIFIED_AMENITIES,
  GALLERY_ITEMS,
  NEARBY_ATTRACTIONS,
} from '../data/hotelData';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  Wifi,
  Wind,
  Droplets,
  Tv,
  Clock,
  ArrowUpFromLine,
  KeyRound,
  Sparkles,
  Coffee,
  ShieldCheck,
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  ArrowRight,
  Maximize2,
  Calendar,
  Users,
  Bed,
  CheckCircle2,
} from 'lucide-react';

export function HomePage() {
  const { navigate } = useRouter();

  // Quick booking inquiry bar state
  const [quickCheckIn, setQuickCheckIn] = useState('');
  const [quickCheckOut, setQuickCheckOut] = useState('');
  const [quickRoom, setQuickRoom] = useState('standard-queen');
  const [quickGuests, setQuickGuests] = useState('2');

  // Gallery category filter
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'rooms' | 'lobby' | 'exterior'>('all');

  // Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
  });

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contact', {
      room: quickRoom,
      checkIn: quickCheckIn,
      checkOut: quickCheckOut,
      guests: quickGuests,
    });
  };

  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  // Amenity icon resolver
  const renderAmenityIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#D4AF37]" };
    switch (iconName) {
      case 'Wifi': return <Wifi {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'Tv': return <Tv {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'ArrowUpFromLine': return <ArrowUpFromLine {...props} />;
      case 'KeyRound': return <KeyRound {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#190D2B] text-[#F7F4EA]">

      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background photo with luxury dark purple scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.exterior}
            alt="Seeds Hotel Shah Alam Seksyen 7 I-City Exterior"
            className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
            referrerPolicy="no-referrer"
          />
          {/* Measured multi-stop gradient scrim to guarantee high contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-[#190D2B]/80 to-[#190D2B]/60" />
          <div className="absolute inset-0 bg-[#190D2B]/40 backdrop-brightness-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Location trust marker */}
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            <span className="w-6 h-px bg-[#D4AF37]/60" />
            <span>Seksyen 7, Shah Alam · Selangor, Malaysia</span>
            <span className="w-6 h-px bg-[#D4AF37]/60" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] mb-6 text-balance">
            Experience Comfort in the Heart of{' '}
            <span className="gold-gradient-text italic font-serif">Shah Alam</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#E8E2D2] font-light leading-relaxed mb-10 text-balance">
            Welcome to <strong className="text-white font-medium">Seeds Hotel Shah Alam Seksyen 7 I-City</strong>. 
            A modern, tranquil haven featuring immaculate air-conditioned rooms, warm 24-hour hospitality, 
            and seamless access to I-City Theme Park, Central i-City Mall, and UiTM.
          </p>

          {/* Gold CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] active:scale-[0.98] transition-all rounded shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/rooms')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#F7F4EA] bg-[#2B1745]/90 hover:bg-[#391e5c] border border-[#D4AF37]/50 transition-all rounded shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Rooms</span>
            </button>
          </div>

          {/* Quick Availability / Inquiry Bar */}
          <div className="w-full max-w-4xl bg-[#2B1745]/90 backdrop-blur-md border border-[#D4AF37]/35 rounded-xl p-5 shadow-2xl">
            <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Check-In</span>
                </label>
                <input
                  type="date"
                  value={quickCheckIn}
                  onChange={(e) => setQuickCheckIn(e.target.value)}
                  className="w-full px-3 py-2 bg-[#190D2B] border border-[#D4AF37]/30 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Check-Out</span>
                </label>
                <input
                  type="date"
                  value={quickCheckOut}
                  onChange={(e) => setQuickCheckOut(e.target.value)}
                  className="w-full px-3 py-2 bg-[#190D2B] border border-[#D4AF37]/30 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1.5 flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5" />
                  <span>Room Type</span>
                </label>
                <select
                  value={quickRoom}
                  onChange={(e) => setQuickRoom(e.target.value)}
                  className="w-full px-3 py-2 bg-[#190D2B] border border-[#D4AF37]/30 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {VERIFIED_ROOMS.map((r) => (
                    <option key={r.id} value={r.id} className="bg-[#190D2B] text-white">
                      {r.name} (from RM {r.pricePerNight})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] transition-all rounded cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Check Availability</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT OUR HOTEL
          ========================================================================= */}
      <section className="py-24 bg-[#190D2B] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Visual with boutique hotel interior */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
                <img
                  src={HOTEL_INFO.images.lobby}
                  alt="Seeds Hotel Shah Alam Front Desk and Reception"
                  className="w-full h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#190D2B]/90 backdrop-blur-sm border border-[#D4AF37]/30 rounded">
                  <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    24/7 Front Desk & Welcoming Service
                  </p>
                  <p className="text-xs text-[#E8E2D2] mt-0.5">
                    Our hospitable team is on-site around the clock to ensure your stay in Shah Alam is restful and effortless.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                <span>About Our Hotel</span>
                <span className="w-10 h-px bg-[#D4AF37]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Refined Sanctuary in Seksyen 7, Shah Alam
              </h2>

              <p className="text-base text-[#D8CFBC] leading-relaxed">
                Located in the prominent commercial and residential hub of Seksyen 7, 
                <strong className="text-white font-medium"> Seeds Hotel Shah Alam Seksyen 7 I-City</strong> was built on 
                the premise that travelers deserve spotless cleanliness, modern aesthetics, and restful sleep at honest, transparent rates.
              </p>

              <p className="text-base text-[#D8CFBC] leading-relaxed">
                Whether you are visiting Shah Alam for a weekend of thrills at <strong>I-City Theme Park & SnoWalk</strong>, 
                shopping at <strong>Central i-City</strong>, attending a graduation ceremony at <strong>UiTM</strong>, or accompanying loved ones 
                at <strong>Hospital Shah Alam</strong>, Seeds Hotel provides the perfect tranquil base with private en-suite hot showers, 
                individual air conditioning, and peaceful nights.
              </p>

              {/* 3 Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#2B1745] border border-[#D4AF37]/20 rounded">
                  <div className="flex items-center gap-2.5 text-[#D4AF37] font-semibold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Prime Seksyen 7 Location</span>
                  </div>
                  <p className="text-xs text-[#C4B7AB]">
                    Surrounded by authentic local eateries, vibrant retail boutiques, and mere minutes from major landmarks.
                  </p>
                </div>

                <div className="p-4 bg-[#2B1745] border border-[#D4AF37]/20 rounded">
                  <div className="flex items-center gap-2.5 text-[#D4AF37] font-semibold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Spotless Hygiene & Security</span>
                  </div>
                  <p className="text-xs text-[#C4B7AB]">
                    Fresh daily sanitized linens, electronic keycard access, elevator service, and 24-hour reception presence.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#fff] transition-colors group"
                >
                  <span>Learn More About Our Location</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOMS & ACCOMMODATION
          ========================================================================= */}
      <section className="py-24 bg-[#211138] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                <span>Rooms & Accommodation</span>
                <span className="w-10 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Designed for Restful Repose
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#D8CFBC]">
              Every room is equipped with verified comforts: individual split air conditioning, private hot shower, crisp linens, and fast Wi-Fi.
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_ROOMS.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-[#190D2B] border border-[#D4AF37]/25 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-[#D4AF37]/70 hover:shadow-2xl"
              >
                {/* Room Image Container */}
                <div className="relative h-60 overflow-hidden group">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-transparent to-transparent opacity-70" />
                  
                  {/* Price Banner */}
                  <div className="absolute bottom-3 left-3 bg-[#190D2B]/90 backdrop-blur-sm border border-[#D4AF37]/40 px-3 py-1.5 rounded">
                    <span className="text-xs text-[#D1C7BD] mr-1">From</span>
                    <span className="font-serif text-lg font-bold text-[#D4AF37] tabular-nums">RM {room.pricePerNight}</span>
                    <span className="text-xs text-[#D1C7BD]"> / night</span>
                  </div>

                  <button
                    onClick={() => setLightboxData({
                      isOpen: true,
                      imageUrl: room.image,
                      title: room.name,
                      caption: room.tagline,
                    })}
                    className="absolute top-3 right-3 p-1.5 rounded bg-[#190D2B]/80 text-[#E8E2D2] hover:text-[#D4AF37] border border-[#D4AF37]/30 transition-colors cursor-pointer"
                    title="View photo fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-1.5">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium mb-3">
                      {room.tagline}
                    </p>
                    <p className="text-sm text-[#C4B7AB] line-clamp-2 leading-relaxed mb-4">
                      {room.description}
                    </p>

                    {/* Meta Specs */}
                    <div className="flex items-center gap-4 text-xs text-[#E8E2D2] border-y border-[#D4AF37]/15 py-3">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{room.capacity}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{room.bedType}</span>
                      </div>
                      <span>·</span>
                      <span>{room.roomSize}</span>
                    </div>

                    {/* Key features bullet */}
                    <div className="mt-4 space-y-1.5">
                      {room.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#D1C7BD]">
                          <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center gap-3">
                    <button
                      onClick={() => navigate('/contact', { room: room.id })}
                      className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] transition-all rounded text-center cursor-pointer"
                    >
                      Inquire / Book
                    </button>
                    <button
                      onClick={() => navigate('/rooms')}
                      className="py-2.5 px-3 text-xs font-medium text-[#E8E2D2] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all rounded cursor-pointer"
                    >
                      Details
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* View All Rooms Button */}
          <div className="mt-12 text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] transition-all rounded shadow-lg"
            >
              <span>View All 5 Room Categories & Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOTEL AMENITIES
          ========================================================================= */}
      <section className="py-24 bg-[#190D2B] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
              <span className="w-6 h-px bg-[#D4AF37]" />
              <span>Hotel Amenities</span>
              <span className="w-6 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Verified Facilities for Your Comfort
            </h2>
            <p className="text-sm text-[#D8CFBC] leading-relaxed">
              We present only verified amenities physically available at Seeds Hotel Shah Alam Seksyen 7 I-City. 
              No exaggerated claims, just dependable boutique standards.
            </p>
          </div>

          {/* Amenities Grid with Real Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {VERIFIED_AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                onClick={() => {
                  if (amenity.image) {
                    setLightboxData({
                      isOpen: true,
                      imageUrl: amenity.image,
                      title: amenity.name,
                      caption: amenity.description,
                    });
                  }
                }}
                className="group bg-[#2B1745] border border-[#D4AF37]/25 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
              >
                {/* Amenity Image Header */}
                <div className="relative h-32 w-full overflow-hidden bg-[#190D2B]">
                  {amenity.image ? (
                    <img
                      src={amenity.image}
                      alt={amenity.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#190D2B] flex items-center justify-center">
                      <span className="text-xs text-[#D4AF37]">Seeds Hotel</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1745] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Gold Icon */}
                  <div className="absolute bottom-2 left-3 w-10 h-10 rounded-lg bg-[#190D2B]/90 border border-[#D4AF37]/50 flex items-center justify-center shadow-md">
                    {renderAmenityIcon(amenity.iconName)}
                  </div>

                  <span className="absolute top-2 right-2 p-1.5 rounded bg-[#190D2B]/80 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-white mb-1.5 leading-snug group-hover:text-[#D4AF37] transition-colors">
                      {amenity.name}
                    </h3>
                    <p className="text-xs text-[#C4B7AB] leading-relaxed line-clamp-3">
                      {amenity.description}
                    </p>
                  </div>
                  
                  <div className="pt-3 mt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-[11px] text-[#D4AF37]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified on-site</span>
                    </span>
                    <span className="text-[10px] text-[#C4B7AB] group-hover:text-white transition-colors">
                      View photo
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GALLERY SECTION
          ========================================================================= */}
      <section className="py-24 bg-[#211138] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                <span>Property Showcase</span>
                <span className="w-10 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Hotel Photography Gallery
              </h2>
            </div>
            
            {/* Interactive filter tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#190D2B] border border-[#D4AF37]/30 rounded-lg overflow-x-auto">
              {[
                { label: 'All Photos', val: 'all' },
                { label: 'Guest Rooms', val: 'rooms' },
                { label: 'Reception & Lobby', val: 'lobby' },
                { label: 'Exterior', val: 'exterior' },
              ].map((tab) => (
                <button
                  key={tab.val}
                  onClick={() => setGalleryFilter(tab.val as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                    galleryFilter === tab.val
                      ? 'bg-[#D4AF37] text-[#190D2B] font-semibold'
                      : 'text-[#D8CFBC] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxData({
                  isOpen: true,
                  imageUrl: item.image,
                  title: item.title,
                  caption: item.caption,
                })}
                className={`relative group rounded-lg overflow-hidden border border-[#D4AF37]/25 cursor-pointer shadow-lg ${
                  index === 0 ? 'md:col-span-2 md:row-span-2 h-[420px]' : 'h-64'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-[#190D2B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#D8CFBC] mt-1 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                  <span className="p-2 rounded bg-[#2B1745] text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: LOCATION & CONTACT
          ========================================================================= */}
      <section className="py-24 bg-[#190D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Address, Phone, Directions, & Landmark Distances */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                  <span>Location & Contact</span>
                  <span className="w-10 h-px bg-[#D4AF37]" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Find Us in Seksyen 7
                </h2>
                <p className="text-sm text-[#D8CFBC] mt-2">
                  Ideally situated in Jalan Kristal As7/As, offering swift access to Shah Alam’s prime attractions and medical facilities.
                </p>
              </div>

              {/* Contact Information Card */}
              <div className="p-6 bg-[#2B1745] border border-[#D4AF37]/30 rounded-lg space-y-5">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">Hotel Address</h4>
                    <p className="text-sm text-white leading-relaxed">{HOTEL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-[#D4AF37]/15 pt-4">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">Telephone Contact</h4>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-base font-semibold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {HOTEL_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#C4B7AB] mt-0.5">Clickable direct line to front desk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-[#D4AF37]/15 pt-4">
                  <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">Operating Hours</h4>
                    <p className="text-sm text-white">24 Hours / 7 Days a Week</p>
                    <p className="text-xs text-[#C4B7AB]">Check-in: 2:00 PM · Check-out: 12:00 PM</p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={HOTEL_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#190D2B] hover:bg-[#251340] border border-[#D4AF37]/40 rounded text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={HOTEL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] rounded text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

              </div>

              {/* Prominent Contact / Inquiry Page Button */}
              <div>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-3.5 px-6 text-sm font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] rounded transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Online Booking Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right: Surrounding Attractions & Map Preview */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Interactive map display */}
              <div className="rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-[#2B1745]">
                <div className="p-4 bg-[#2B1745] border-b border-[#D4AF37]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Shah Alam Seksyen 7 Map Location</span>
                  </div>
                  <a
                    href={HOTEL_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#E8E2D2] hover:text-[#D4AF37] underline transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
                
                {/* Embedded responsive Google Map iframe */}
                <div className="w-full h-80 relative bg-[#190D2B]">
                  <iframe
                    title="Seeds Hotel Shah Alam Seksyen 7 Location Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=3,+Jalan+Kristal+As7/As,+Seksyen+7,+40000+Shah+Alam,+Selangor,+Malaysia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full filter contrast-105"
                  />
                </div>
              </div>

              {/* Key Attractions Quick List with Real Photography */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {NEARBY_ATTRACTIONS.slice(0, 4).map((attraction, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      if (attraction.image) {
                        setLightboxData({
                          isOpen: true,
                          imageUrl: attraction.image,
                          title: attraction.name,
                          caption: `${attraction.category} · ${attraction.driveTime} (${attraction.distance}) from Seeds Hotel`,
                        });
                      }
                    }}
                    className="p-3 bg-[#2B1745] border border-[#D4AF37]/25 rounded-lg flex items-center gap-3 hover:border-[#D4AF37]/60 transition-all cursor-pointer group shadow"
                  >
                    {attraction.image && (
                      <div className="w-16 h-16 rounded-md overflow-hidden shrink-0 border border-[#D4AF37]/30 bg-[#190D2B]">
                        <img
                          src={attraction.image}
                          alt={attraction.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] uppercase font-semibold text-[#D4AF37] truncate">
                          {attraction.category}
                        </span>
                        <span className="text-[11px] font-bold text-[#D4AF37] tabular-nums shrink-0">
                          {attraction.driveTime}
                        </span>
                      </div>
                      <h5 className="font-serif text-sm font-semibold text-white leading-tight truncate group-hover:text-[#D4AF37] transition-colors">
                        {attraction.name}
                      </h5>
                      <p className="text-[11px] text-[#C4B7AB] truncate mt-0.5">
                        {attraction.distance} away
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Lightbox modal */}
      <ImageLightbox
        isOpen={lightboxData.isOpen}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        caption={lightboxData.caption}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
      />

    </div>
  );
}
