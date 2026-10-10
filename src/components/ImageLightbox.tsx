import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  caption?: string;
  onClose: () => void;
}

export function ImageLightbox({ isOpen, imageUrl, title, caption, onClose }: ImageLightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-[#2B1745] text-white hover:text-[#D4AF37] border border-[#D4AF37]/40 transition-colors z-10 cursor-pointer"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="max-w-5xl max-h-[90vh] flex flex-col items-center bg-[#190D2B] border border-[#D4AF37]/30 rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden w-full max-h-[75vh] flex items-center justify-center bg-black">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-contain max-h-[75vh]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full p-4 bg-[#190D2B] border-t border-[#D4AF37]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">{title}</h4>
            {caption && <p className="text-xs text-[#D1C7BD] mt-0.5">{caption}</p>}
          </div>
          <span className="text-xs text-[#D4AF37] px-2.5 py-1 rounded bg-[#2B1745] border border-[#D4AF37]/30 whitespace-nowrap">
            Verified Property Photograph
          </span>
        </div>
      </div>
    </div>
  );
}
