import { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { HOTEL_INFO, NEARBY_ATTRACTIONS } from '../data/hotelData';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  MapPin,
  Compass,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Maximize2,
} from 'lucide-react';

export function AboutPage() {
  const { navigate } = useRouter();

  // Lightbox state for attraction images
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

  return (
    <div className="min-h-screen bg-[#190D2B] text-[#F7F4EA] pb-24">
      
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.lobby}
            alt="Seeds Hotel Lobby Reception"
            className="w-full h-full object-cover object-center filter brightness-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-[#190D2B]/85 to-[#190D2B]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span>Hospitality in Shah Alam</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            About Seeds Hotel
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E8E2D2] font-light leading-relaxed">
            Nurturing the seeds of restful sleep, pristine hygiene, and sincere Malaysian warmth 
            in the vibrant heart of Seksyen 7, Shah Alam.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: HOSPITALITY PHILOSOPHY & INTRODUCTION
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <span>Our Philosophy</span>
              <span className="w-8 h-px bg-[#D4AF37]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Comfort, Cleanliness, and Quietude
            </h2>

            <p className="text-base text-[#D8CFBC] leading-relaxed">
              At <strong>Seeds Hotel Shah Alam Seksyen 7 I-City</strong>, our focus is simple and unwavering: 
              providing travelers with an exceptionally clean, safe, and comfortable sanctuary to recharge. 
              We believe great hospitality begins with the essentials done flawlessly—crisp sanitized bedsheets, 
              vigorous hot water showers, quiet air conditioning, and a friendly, attentive front desk team on duty 24 hours a day.
            </p>

            <p className="text-base text-[#D8CFBC] leading-relaxed">
              We cater to diverse guests—from families exploring the colorful attractions of I-City Theme Park, 
              to academics, students, and parents visiting Universiti Teknologi MARA (UiTM), to healthcare visitors 
              attending Hospital Shah Alam. Every guest receives our sincere, dependable Malaysian hospitality.
            </p>

            {/* Verified property metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D4AF37]/15">
              <div className="p-3 bg-[#2B1745] border border-[#D4AF37]/20 rounded text-center">
                <span className="font-serif text-2xl font-bold text-[#D4AF37]">24/7</span>
                <p className="text-xs text-[#C4B7AB] mt-0.5">Front Desk Presence</p>
              </div>

              <div className="p-3 bg-[#2B1745] border border-[#D4AF37]/20 rounded text-center">
                <span className="font-serif text-2xl font-bold text-[#D4AF37]">5 Mins</span>
                <p className="text-xs text-[#C4B7AB] mt-0.5">Drive to I-City Theme Park</p>
              </div>

              <div className="p-3 bg-[#2B1745] border border-[#D4AF37]/20 rounded text-center col-span-2 sm:col-span-1">
                <span className="font-serif text-2xl font-bold text-[#D4AF37]">100%</span>
                <p className="text-xs text-[#C4B7AB] mt-0.5">Non-Smoking Rooms</p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src={HOTEL_INFO.images.exterior}
                alt="Seeds Hotel Shah Alam Building Exterior"
                className="w-full h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#190D2B]/90 backdrop-blur-sm border border-[#D4AF37]/30 rounded">
                <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Verified Property Location
                </p>
                <p className="text-xs text-white mt-1">
                  3, Jalan Kristal As7/As, Seksyen 7, 40000 Shah Alam, Selangor, Malaysia
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY GUESTS CHOOSE SEEDS HOTEL
          ========================================================================= */}
      <section className="py-20 bg-[#211138] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
              <span className="w-6 h-px bg-[#D4AF37]" />
              <span>The Seeds Hotel Experience</span>
              <span className="w-6 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Why Guests Choose Seeds Hotel
            </h2>
            <p className="text-sm text-[#D8CFBC]">
              Four fundamental commitments that define every guest’s stay in Seksyen 7, Shah Alam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#190D2B] border border-[#D4AF37]/25 rounded-lg flex flex-col justify-between hover:border-[#D4AF37]/60 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#2B1745] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Prime Seksyen 7 Hub
                </h3>
                <p className="text-xs text-[#C4B7AB] leading-relaxed">
                  Stepping outside places you directly within Seksyen 7’s famous commercial quarter, renowned for popular local eateries, trendy boutiques, and laundromats.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#190D2B] border border-[#D4AF37]/25 rounded-lg flex flex-col justify-between hover:border-[#D4AF37]/60 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#2B1745] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Immaculate Cleanliness
                </h3>
                <p className="text-xs text-[#C4B7AB] leading-relaxed">
                  Strict hygiene and daily housekeeping procedures guarantee freshly pressed sheets, spotless tiled bathrooms, and pristine room presentation for every check-in.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#190D2B] border border-[#D4AF37]/25 rounded-lg flex flex-col justify-between hover:border-[#D4AF37]/60 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#2B1745] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  24/7 Security & Access
                </h3>
                <p className="text-xs text-[#C4B7AB] leading-relaxed">
                  Electronic key card locks, CCTV monitoring in common areas, elevator access, and a staffed front desk team guarantee security throughout the night.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#190D2B] border border-[#D4AF37]/25 rounded-lg flex flex-col justify-between hover:border-[#D4AF37]/60 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#2B1745] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Honest Value
                </h3>
                <p className="text-xs text-[#C4B7AB] leading-relaxed">
                  Transparent room rates with no unexpected hidden booking surcharges. Reliable boutique comfort accessible for families, students, and professionals.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SURROUNDING ATTRACTIONS & LOCATION GUIDE WITH REAL PHOTOS
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/15">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
            <Compass className="w-4 h-4" />
            <span>Shah Alam Destination Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Surrounding Landmarks & Distances
          </h2>
          <p className="text-sm text-[#D8CFBC] mt-2 max-w-2xl">
            Seeds Hotel puts you minutes away from Selangor’s top attractions, shopping, healthcare, and educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARBY_ATTRACTIONS.map((attraction, i) => (
            <div
              key={i}
              onClick={() => {
                if (attraction.image) {
                  setLightboxData({
                    isOpen: true,
                    imageUrl: attraction.image,
                    title: attraction.name,
                    caption: `${attraction.category} · ${attraction.driveTime} (${attraction.distance}) from Seeds Hotel Seksyen 7`,
                  });
                }
              }}
              className="bg-[#2B1745] border border-[#D4AF37]/25 rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg group cursor-pointer"
            >
              {/* Attraction Photo */}
              <div className="relative h-48 w-full overflow-hidden bg-[#190D2B]">
                {attraction.image ? (
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-[#190D2B] flex items-center justify-center">
                    <span className="text-xs text-[#D4AF37]">Seeds Hotel Area</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1745] via-transparent to-transparent opacity-70" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#190D2B]/90 border border-[#D4AF37]/35 px-2.5 py-1 rounded">
                    {attraction.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#190D2B] bg-[#D4AF37] px-2.5 py-1 rounded shadow">
                    {attraction.driveTime}
                  </span>
                  <span className="p-1 rounded bg-[#190D2B]/80 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-xs text-[#C4B7AB] leading-relaxed line-clamp-3">
                    {attraction.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#D8CFBC]">
                  <span>Distance: {attraction.distance}</span>
                  <span className="text-[#D4AF37] group-hover:underline">View Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 bg-[#2B1745] border border-[#D4AF37]/40 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Experience Seeds Hotel Shah Alam?
            </h2>
            <p className="text-sm sm:text-base text-[#D8CFBC] max-w-xl mx-auto leading-relaxed">
              Plan your upcoming trip to Shah Alam with confidence. Contact our front desk or submit an inquiry to check room availability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] rounded transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Booking Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#190D2B] hover:bg-[#200e36] border border-[#D4AF37]/40 rounded transition-all text-center"
              >
                Chat on WhatsApp (+60 17-881 3439)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Attraction Lightbox */}
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
