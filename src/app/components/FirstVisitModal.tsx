"use client";

import { useEffect, useState } from "react";

export default function FirstVisitModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");

    if (!hasSeenModal) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("hasSeenWelcomeModal", "true");
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b">
          <h2 className="text-2xl font-bold text-green-700">
            Welcome to LifeOnPlus
          </h2>
          <button
            onClick={closeModal}
            className="text-4xl text-gray-400 hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>

        {/* YouTube Video */}
        <div className="aspect-video bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WwSbh4Ft1Fs?si=nfBcaBiT-8IxT_Yn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
