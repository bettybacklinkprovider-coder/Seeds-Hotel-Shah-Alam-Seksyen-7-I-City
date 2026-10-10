import { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { VERIFIED_ROOMS, HOTEL_INFO } from '../data/hotelData';
import { Room } from '../types/hotel';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  Users,
  Bed,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Info,
  CalendarCheck,
} from 'lucide-react';

export function RoomsPage() {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'single' | 'queen' | 'king' | 'family'>('all');
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  // Lightbox preview state
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

  const filteredRooms = selectedCategory === 'all'
    ? VERIFIED_ROOMS
    : VERIFIED_ROOMS.filter((room) => room.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#190D2B] text-[#F7F4EA] pb-24">
      
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.deluxeRoom}
            alt="Seeds Hotel Deluxe Rooms"
            className="w-full h-full object-cover object-center filter brightness-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-[#190D2B]/85 to-[#190D2B]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span>Accommodations in Seksyen 7, Shah Alam</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Our Rooms & Suites
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E8E2D2] font-light leading-relaxed mb-8">
            Each room at Seeds Hotel Shah Alam Seksyen 7 I-City is thoughtfully designed for peaceful relaxation, 
            complete with verified amenities: individual split air conditioning, private hot shower, daily housekeeping, and free high-speed Wi-Fi.
          </p>

          {/* Quick Filter Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#2B1745]/90 border border-[#D4AF37]/35 rounded-lg shadow-xl">
            {[
              { label: 'All Rooms (5)', val: 'all' },
              { label: 'Queen Rooms', val: 'queen' },
              { label: 'King Suites', val: 'king' },
              { label: 'Twin Beds', val: 'single' },
              { label: 'Family Suite', val: 'family' },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setSelectedCategory(tab.val as any)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  selectedCategory === tab.val
                    ? 'bg-[#D4AF37] text-[#190D2B]'
                    : 'text-[#E8E2D2] hover:text-[#D4AF37]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          ROOM CATEGORIES LIST
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Transparent rate guarantee banner */}
        <div className="mb-12 p-4 sm:p-5 bg-[#2B1745] border border-[#D4AF37]/30 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#190D2B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Direct Inquiry Best Rate Guarantee</h4>
              <p className="text-xs text-[#D8CFBC]">
                Transparent rates with no hidden booking fees. Free cancellation inquiries accepted up to 24 hours prior.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] px-4 py-2 rounded transition-all shrink-0 cursor-pointer"
          >
            Inquire Now
          </button>
        </div>

        {/* Room Cards Stack */}
        <div className="space-y-12">
          {filteredRooms.map((room, idx) => (
            <div
              key={room.id}
              className="bg-[#2B1745] border border-[#D4AF37]/25 rounded-xl overflow-hidden shadow-2xl hover:border-[#D4AF37]/60 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              
              {/* Photo Column */}
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-auto min-h-[320px] group overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1745] via-transparent to-transparent opacity-60" />
                
                {/* Fullscreen Trigger */}
                <button
                  onClick={() => setLightboxData({
                    isOpen: true,
                    imageUrl: room.image,
                    title: room.name,
                    caption: `${room.tagline} - From RM ${room.pricePerNight}/night`,
                  })}
                  className="absolute top-4 right-4 p-2 rounded bg-[#190D2B]/80 text-white hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-colors cursor-pointer"
                  title="Expand photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37] bg-[#190D2B]/90 border border-[#D4AF37]/35 px-2.5 py-1 rounded">
                    Verified Room Photograph
                  </span>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  
                  {/* Title and Price */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#D4AF37]/15">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                        {room.name}
                      </h2>
                      <p className="text-xs text-[#D4AF37] font-medium mt-1">
                        {room.tagline}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-xs text-[#D8CFBC] block">Standard Rate</span>
                      <div className="flex items-baseline sm:justify-end gap-1">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] tabular-nums">
                          RM {room.pricePerNight}
                        </span>
                        <span className="text-xs text-[#D8CFBC]">/ night</span>
                      </div>
                    </div>
                  </div>

                  {/* Room Key Dimensions / Spec Badges */}
                  <div className="flex flex-wrap items-center gap-4 py-4 text-xs text-[#E8E2D2]">
                    <div className="flex items-center gap-1.5 bg-[#190D2B] px-3 py-1.5 rounded border border-[#D4AF37]/20">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#190D2B] px-3 py-1.5 rounded border border-[#D4AF37]/20">
                      <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{room.bedType}</span>
                    </div>
                    <div className="bg-[#190D2B] px-3 py-1.5 rounded border border-[#D4AF37]/20">
                      <span>Room Size: {room.roomSize}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#D8CFBC] leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Verified Amenities Grid for this room */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
                      Included In-Room Facilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#E8E2D2]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom CTA Block */}
                <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => navigate('/contact', { room: room.id })}
                    className="w-full sm:w-auto flex-1 py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] active:scale-[0.98] transition-all rounded text-center cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Inquire / Book This Room</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveModalRoom(room)}
                    className="w-full sm:w-auto py-3 px-4 text-xs font-medium text-[#E8E2D2] hover:text-[#D4AF37] border border-[#D4AF37]/35 hover:border-[#D4AF37] rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Policies & Specs</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          ROOM POLICY MODAL
          ========================================================================= */}
      {activeModalRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveModalRoom(null)}
        >
          <div
            className="bg-[#190D2B] border border-[#D4AF37]/40 rounded-xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {activeModalRoom.name}
                </h3>
                <p className="text-xs text-[#D4AF37] mt-0.5">
                  Starting from RM {activeModalRoom.pricePerNight} / night
                </p>
              </div>
              <button
                onClick={() => setActiveModalRoom(null)}
                className="text-white hover:text-[#D4AF37] p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#D8CFBC] border-y border-[#D4AF37]/20 py-4">
              <div>
                <strong className="text-white block mb-1">Check-in & Check-out Times:</strong>
                <span>Check-in begins at 2:00 PM (14:00). Check-out is by 12:00 PM (12:00 noon). Early check-in or late check-out is subject to room availability upon arrival.</span>
              </div>
              <div>
                <strong className="text-white block mb-1">Sanitation & Non-Smoking Policy:</strong>
                <span>All rooms are strictly 100% non-smoking and sanitized with hospital-grade disinfectants before every check-in.</span>
              </div>
              <div>
                <strong className="text-white block mb-1">Keycard Deposit:</strong>
                <span>A standard refundable keycard deposit may be requested at the reception counter during check-in.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const roomToBook = activeModalRoom.id;
                  setActiveModalRoom(null);
                  navigate('/contact', { room: roomToBook });
                }}
                className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] rounded transition-all cursor-pointer"
              >
                Book This Room Now
              </button>
              <button
                onClick={() => setActiveModalRoom(null)}
                className="px-4 py-2.5 text-xs text-[#D8CFBC] hover:text-white border border-[#D4AF37]/30 rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
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
