import { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { HOTEL_INFO, VERIFIED_ROOMS } from '../data/hotelData';
import { BookingInquiry } from '../types/hotel';
import {
  Phone,
  MessageSquare,
  MapPin,
  Navigation,
  Calendar,
  Users,
  Bed,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Send,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

export function ContactPage() {
  const { searchParams } = useRouter();

  // Form State
  const [formData, setFormData] = useState<BookingInquiry>({
    guestName: '',
    email: '',
    phone: '',
    roomId: 'standard-queen',
    checkInDate: '',
    checkOutDate: '',
    guestsCount: 2,
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [inquiryReference, setInquiryReference] = useState<string>('');
  const [copiedRef, setCopiedRef] = useState(false);

  // Read URL search params if navigated from quick search or room card
  useEffect(() => {
    const roomParam = searchParams.get('room');
    const checkInParam = searchParams.get('checkIn');
    const checkOutParam = searchParams.get('checkOut');
    const guestsParam = searchParams.get('guests');

    setFormData((prev) => ({
      ...prev,
      roomId: roomParam && VERIFIED_ROOMS.some(r => r.id === roomParam) ? roomParam : prev.roomId,
      checkInDate: checkInParam || prev.checkInDate,
      checkOutDate: checkOutParam || prev.checkOutDate,
      guestsCount: guestsParam ? parseInt(guestsParam, 10) || 2 : prev.guestsCount,
    }));
  }, [searchParams]);

  // Selected room details
  const selectedRoom = VERIFIED_ROOMS.find((r) => r.id === formData.roomId) || VERIFIED_ROOMS[0];

  // Calculate estimated nights and price
  const calculateStay = () => {
    if (!formData.checkInDate || !formData.checkOutDate) return null;
    const start = new Date(formData.checkInDate);
    const end = new Date(formData.checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) return null;
    const totalEst = diffDays * selectedRoom.pricePerNight;
    return { nights: diffDays, total: totalEst };
  };

  const stayCalculation = calculateStay();

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.guestName.trim()) {
      errors.guestName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errors.phone = 'Phone number must have at least 8 digits.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email format.';
    }

    if (!formData.checkInDate) {
      errors.checkInDate = 'Please select a check-in date.';
    }

    if (!formData.checkOutDate) {
      errors.checkOutDate = 'Please select a check-out date.';
    } else if (formData.checkInDate && formData.checkOutDate <= formData.checkInDate) {
      errors.checkOutDate = 'Check-out date must be after check-in date.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate inquiry submission handling
    setTimeout(() => {
      const randomRef = 'SH-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryReference(randomRef);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 600);
  };

  // WhatsApp formatted inquiry message
  const generateWhatsAppMessage = () => {
    const nights = stayCalculation ? `${stayCalculation.nights} night(s)` : 'N/A';
    const text = `Hello Seeds Hotel Shah Alam Seksyen 7!\nI would like to inquire about room availability:\n\n*Reference:* ${inquiryReference || 'New Inquiry'}\n*Name:* ${formData.guestName}\n*Room Type:* ${selectedRoom.name}\n*Check-In:* ${formData.checkInDate || 'TBD'}\n*Check-Out:* ${formData.checkOutDate || 'TBD'}\n*Duration:* ${nights}\n*Guests:* ${formData.guestsCount}\n*Message:* ${formData.message || 'None'}\n\nPlease confirm availability and rate. Thank you!`;
    return encodeURIComponent(text);
  };

  const copyRefToClipboard = () => {
    if (inquiryReference) {
      navigator.clipboard.writeText(inquiryReference);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#190D2B] text-[#F7F4EA] pb-24">
      
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.images.exterior}
            alt="Seeds Hotel Shah Alam"
            className="w-full h-full object-cover object-center filter brightness-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#190D2B] via-[#190D2B]/85 to-[#190D2B]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            <span className="w-8 h-px bg-[#D4AF37]" />
            <span>Connect With Us</span>
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Contact & Booking Inquiry
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E8E2D2] font-light leading-relaxed">
            Have a question or planning your stay at Seeds Hotel Shah Alam Seksyen 7 I-City? 
            Reach out directly or send us an inquiry below. Our team is available 24 hours a day.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CONTACT CARDS STRIP
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Phone */}
          <div className="p-6 bg-[#2B1745] border border-[#D4AF37]/35 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#190D2B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                Direct Telephone
              </h3>
              <p className="text-xs text-[#C4B7AB] mb-4">
                Call our 24/7 reception desk for immediate room queries & reservations.
              </p>
            </div>
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] rounded transition-all shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {HOTEL_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-6 bg-[#2B1745] border border-[#D4AF37]/35 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#190D2B] border border-[#D4AF37]/40 flex items-center justify-center text-emerald-400 mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                WhatsApp Inquiry
              </h3>
              <p className="text-xs text-[#C4B7AB] mb-4">
                Send a quick WhatsApp text for swift assistance, directions, or room inquiries.
              </p>
            </div>
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-all shadow"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat via WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Hotel Address & Directions */}
          <div className="p-6 bg-[#2B1745] border border-[#D4AF37]/35 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#190D2B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                Hotel Location
              </h3>
              <p className="text-xs text-[#C4B7AB] mb-4 leading-relaxed line-clamp-2">
                {HOTEL_INFO.address}
              </p>
            </div>
            <a
              href={HOTEL_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#E8E2D2] hover:text-[#D4AF37] bg-[#190D2B] hover:bg-[#220f38] border border-[#D4AF37]/35 rounded transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MAIN BOOKING INQUIRY & MAP SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#2B1745] border border-[#D4AF37]/30 rounded-xl p-6 sm:p-10 shadow-2xl">
            
            {!submissionSuccess ? (
              <>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reservation Request</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Submit a Booking Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#D8CFBC] mt-1.5">
                    Fill in your desired travel dates and preferences. Our reservation team will verify room availability and confirm with you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                        Guest Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ahmad Razali"
                        value={formData.guestName}
                        onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#190D2B] border rounded text-sm text-white focus:outline-none transition-colors ${
                          formErrors.guestName ? 'border-red-400' : 'border-[#D4AF37]/35 focus:border-[#D4AF37]'
                        }`}
                      />
                      {formErrors.guestName && (
                        <p className="text-xs text-red-400 mt-1">{formErrors.guestName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                        Phone / WhatsApp <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +60 12-345 6789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#190D2B] border rounded text-sm text-white focus:outline-none transition-colors ${
                          formErrors.phone ? 'border-red-400' : 'border-[#D4AF37]/35 focus:border-[#D4AF37]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-red-400 mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Room Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#190D2B] border rounded text-sm text-white focus:outline-none transition-colors ${
                          formErrors.email ? 'border-red-400' : 'border-[#D4AF37]/35 focus:border-[#D4AF37]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-400 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                        Room Category <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        value={formData.roomId}
                        onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
                        className="w-full px-4 py-3 bg-[#190D2B] border border-[#D4AF37]/35 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        {VERIFIED_ROOMS.map((room) => (
                          <option key={room.id} value={room.id} className="bg-[#190D2B] text-white">
                            {room.name} — from RM {room.pricePerNight}/night
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dates & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                        Check-In Date <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.checkInDate}
                        onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#190D2B] border rounded text-sm text-white focus:outline-none transition-colors ${
                          formErrors.checkInDate ? 'border-red-400' : 'border-[#D4AF37]/35 focus:border-[#D4AF37]'
                        }`}
                      />
                      {formErrors.checkInDate && (
                        <p className="text-xs text-red-400 mt-1">{formErrors.checkInDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                        Check-Out Date <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.checkOutDate}
                        onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#190D2B] border rounded text-sm text-white focus:outline-none transition-colors ${
                          formErrors.checkOutDate ? 'border-red-400' : 'border-[#D4AF37]/35 focus:border-[#D4AF37]'
                        }`}
                      />
                      {formErrors.checkOutDate && (
                        <p className="text-xs text-red-400 mt-1">{formErrors.checkOutDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guestsCount}
                        onChange={(e) => setFormData({ ...formData, guestsCount: parseInt(e.target.value, 10) })}
                        className="w-full px-4 py-3 bg-[#190D2B] border border-[#D4AF37]/35 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Stay Calculation Preview */}
                  {stayCalculation && (
                    <div className="p-4 bg-[#190D2B] border border-[#D4AF37]/40 rounded-lg flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#D8CFBC]">Stay Duration:</span>
                        <p className="text-sm font-semibold text-white">
                          {stayCalculation.nights} night(s) · {selectedRoom.name}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-[#D8CFBC]">Estimated Total:</span>
                        <p className="font-serif text-xl font-bold text-[#D4AF37] tabular-nums">
                          RM {stayCalculation.total}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Message / Special Requests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#E8E2D2] font-semibold mb-2">
                      Special Requests or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Late check-in around 9:00 PM, quiet room preference, or parking inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#190D2B] border border-[#D4AF37]/35 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Crucial honesty policy disclaimer */}
                  <div className="p-3.5 bg-[#190D2B]/80 border border-[#D4AF37]/20 rounded flex items-start gap-3 text-xs text-[#C4B7AB]">
                    <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Booking Policy:</strong> Submitting this inquiry does not guarantee an immediate automatic confirmation. 
                      Our front desk staff will verify room availability and confirm your booking via phone or WhatsApp. No advance payment is charged online.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-[#190D2B] bg-[#D4AF37] hover:bg-[#e2c04e] active:scale-[0.98] rounded transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Booking Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              </>
            ) : (
              /* Success Confirmation Screen */
              <div className="space-y-6 py-6 text-center animate-fade-in">
                
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <div className="inline-block px-3 py-1 bg-[#190D2B] border border-[#D4AF37]/40 rounded-full text-xs text-[#D4AF37] font-semibold mb-2">
                    Inquiry Reference: {inquiryReference}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">
                    Thank You, {formData.guestName}!
                  </h3>
                  <p className="text-sm text-[#D8CFBC] max-w-md mx-auto leading-relaxed">
                    Your room inquiry has been successfully received by Seeds Hotel front desk. 
                    Please note that our staff will review availability and contact you via phone or WhatsApp shortly to confirm.
                  </p>
                </div>

                {/* Inquiry Summary Box */}
                <div className="p-5 bg-[#190D2B] border border-[#D4AF37]/30 rounded-lg text-left text-xs space-y-2.5 max-w-md mx-auto">
                  <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                    <span className="text-[#C4B7AB]">Guest:</span>
                    <span className="font-medium text-white">{formData.guestName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                    <span className="text-[#C4B7AB]">Phone:</span>
                    <span className="font-medium text-white">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                    <span className="text-[#C4B7AB]">Room Category:</span>
                    <span className="font-medium text-[#D4AF37]">{selectedRoom.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#D4AF37]/15">
                    <span className="text-[#C4B7AB]">Dates:</span>
                    <span className="font-medium text-white">
                      {formData.checkInDate} to {formData.checkOutDate}
                    </span>
                  </div>
                  {stayCalculation && (
                    <div className="flex justify-between py-1">
                      <span className="text-[#C4B7AB]">Estimated Rate:</span>
                      <span className="font-bold text-[#D4AF37]">RM {stayCalculation.total} ({stayCalculation.nights} nights)</span>
                    </div>
                  )}
                </div>

                {/* Direct WhatsApp Immediate Forward */}
                <div className="space-y-3 pt-2 max-w-md mx-auto">
                  <a
                    href={`https://wa.me/60178813439?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry Directly via WhatsApp Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={copyRefToClipboard}
                      className="text-xs text-[#D8CFBC] hover:text-[#D4AF37] flex items-center gap-1.5 py-2 px-3 rounded bg-[#190D2B] border border-[#D4AF37]/25 cursor-pointer"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedRef ? 'Reference Copied' : 'Copy Reference ID'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmissionSuccess(false);
                        setFormData({
                          guestName: '',
                          email: '',
                          phone: '',
                          roomId: 'standard-queen',
                          checkInDate: '',
                          checkOutDate: '',
                          guestsCount: 2,
                          message: '',
                        });
                      }}
                      className="text-xs text-[#D8CFBC] hover:text-white py-2 px-3 rounded border border-[#D4AF37]/20 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Right Location & Map Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#2B1745] border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Seksyen 7, Shah Alam Location
                  </h3>
                  <p className="text-xs text-[#D4AF37] mt-0.5">3, Jalan Kristal As7/As, Seksyen 7</p>
                </div>
                <Clock className="w-4 h-4 text-[#D4AF37]" />
              </div>

              {/* Map embed */}
              <div className="w-full h-72 relative bg-[#190D2B]">
                <iframe
                  title="Seeds Hotel Google Maps Location"
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

              {/* Details within box */}
              <div className="p-6 space-y-4">
                <div className="space-y-2 text-xs text-[#D8CFBC]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>3, Jalan Kristal As7/As, Seksyen 7, 40000 Shah Alam, Selangor, Malaysia</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-white hover:text-[#D4AF37] underline font-medium">
                      {HOTEL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={HOTEL_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#190D2B] hover:bg-[#230f3b] border border-[#D4AF37]/35 rounded text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Travel Distance Cheat-sheet */}
            <div className="p-6 bg-[#2B1745] border border-[#D4AF37]/25 rounded-xl space-y-4">
              <h4 className="font-serif text-base font-semibold text-white border-b border-[#D4AF37]/20 pb-2">
                Distance to Key Landmarks
              </h4>
              <ul className="space-y-2.5 text-xs text-[#C4B7AB]">
                <li className="flex justify-between items-center">
                  <span>i-City Theme Park & SnoWalk</span>
                  <span className="font-semibold text-[#D4AF37]">5 mins (1.8 km)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Central i-City Mall</span>
                  <span className="font-semibold text-[#D4AF37]">5 mins (1.9 km)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>UiTM Shah Alam Main Campus</span>
                  <span className="font-semibold text-[#D4AF37]">4 mins (2.1 km)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Hospital Shah Alam</span>
                  <span className="font-semibold text-[#D4AF37]">3 mins (1.2 km)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Blue Mosque (Sultan Salahuddin Mosque)</span>
                  <span className="font-semibold text-[#D4AF37]">8 mins (4.5 km)</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
