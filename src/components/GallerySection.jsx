import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
];

function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            RCTI <span className="text-sky-700">Gallery</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-[15px] max-w-2xl mx-auto">
            Glimpses of our vibrant campus life, interactive classes, and successful events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] w-full bg-slate-200">
                <img
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
