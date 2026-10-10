import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HOTEL_INFO } from './data/hotelData';
import { MessageSquare, Phone } from 'lucide-react';

function AppContent() {
  const { currentPage } = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#190D2B] text-[#F7F4EA] font-sans selection:bg-[#D4AF37] selection:text-[#190D2B]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Multi-Page Route Outlet */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'rooms' && <RoomsPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer across all pages */}
      <Footer />

      {/* Floating Quick WhatsApp and Call Speed-Dial on mobile/desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={HOTEL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 transition-all cursor-pointer border border-emerald-400/40"
          title="Chat with Seeds Hotel on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline-block text-xs font-semibold pr-1">
            WhatsApp Inquiry
          </span>
        </a>

        <a
          href={`tel:${HOTEL_INFO.phoneRaw}`}
          className="flex sm:hidden items-center justify-center w-11 h-11 rounded-full bg-[#D4AF37] text-[#190D2B] shadow-xl border border-white/20"
          title="Call Front Desk"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
