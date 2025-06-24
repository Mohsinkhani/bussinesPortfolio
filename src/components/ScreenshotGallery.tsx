import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenshotGalleryProps {
  screenshots: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, screenshots.length]);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  };

  const handleNext = () => {
    setCurrentIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-6xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Close gallery"
        >
          <X size={24} />
        </button>

        <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden">
          <img
            src={screenshots[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="w-full h-full object-contain animate-fade-in"
          />

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/75 transition-all duration-300 hover:scale-110"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/75 transition-all duration-300 hover:scale-110"
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-150' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotGallery;