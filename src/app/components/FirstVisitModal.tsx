'use client';

import { useEffect, useState } from 'react';

export default function FirstVisitModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1200); // Slightly faster for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    sessionStorage.setItem('hasSeenWelcomeModal', 'true');
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg md:max-w-3xl max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-3 border-b">
          <h2 className="text-xl md:text-2xl font-bold text-green-700">
            Welcome to LifeOnPlus
          </h2>
          <button
            onClick={closeModal}
            className="text-3xl md:text-4xl text-gray-400 hover:text-gray-600 transition-colors leading-none"
          >
            ×
          </button>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-black relative flex-1 min-h-0">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WwSbh4Ft1Fs?autoplay=1&rel=0&modestbranding=1"
            title="Welcome to LifeOnPlus"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}