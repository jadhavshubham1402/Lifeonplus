'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Business Frontier Event' },
  { id: 2, src: '/images/gallery/13.jpg', alt: 'Award Ceremony' },
  { id: 3, src: '/images/gallery/3.jpg', alt: 'Team Photo' },
  { id: 4, src: '/images/gallery/4.jpg', alt: 'Rajani Kant M Torgal' },
  { id: 5, src: '/images/gallery/5.jpg', alt: 'Group at Event' },
  { id: 6, src: '/images/gallery/6.jpg', alt: 'Stage Event' },
  { id: 7, src: '/images/gallery/7.jpg', alt: 'Health Camp' },
  { id: 8, src: '/images/gallery/15.jpg', alt: 'Presentation' },
  { id: 9, src: '/images/gallery/9.jpg', alt: 'Networking' },
  { id: 10, src: '/images/gallery/10.jpg', alt: 'Award Handover' },
  { id: 11, src: '/images/gallery/11.jpg', alt: 'Business Frontier' },
  { id: 12, src: '/images/gallery/12.jpg', alt: 'Conference Hall' },
  // Add more images as needed
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-green-700 text-white py-10 mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Gallery</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Moments from our events, awards, partnerships, and milestones
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                {image.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-green-400 transition"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Optional: More info section */}
      <div className="bg-white py-12 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Capturing Our Journey
          </h2>
          <p className="text-gray-600">
            From prestigious award ceremonies to impactful health initiatives and global networking events — 
            every moment reflects our commitment to transforming healthcare.
          </p>
        </div>
      </div>
    </div>
  );
}