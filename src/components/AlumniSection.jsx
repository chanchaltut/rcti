import React, { useState, useEffect, useRef } from 'react';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const alumni = [
  {
    name: 'Koushik Mondal',
    location: 'Bhawanipatna, Odisha',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
    badge: 'Placed',
    badgeColor: 'bg-emerald-500',
  },
  {
    name: 'Sukanya Ghosh',
    location: 'Bhawanipatna, Odisha',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces',
    badge: 'Success',
    badgeColor: 'bg-blue-500',
  },
  {
    name: 'Nuruzzaman Mondal',
    location: 'Bhawanipatna, Odisha',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    badge: 'Achiever',
    badgeColor: 'bg-purple-500',
  },
  {
    name: 'Vaishnavi',
    location: 'Bhawanipatna, Odisha',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces',
    badge: 'Star',
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'Ankita Das',
    location: 'Bhawanipatna, Odisha',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
    badge: 'Winner',
    badgeColor: 'bg-pink-500',
  },
];

function AlumniSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Create infinite loop by duplicating items
  const duplicatedAlumni = [...alumni, ...alumni, ...alumni];

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          // Reset to start smoothly when reaching the end
          if (next >= alumni.length) {
            // Small delay before reset for smooth transition
            setTimeout(() => {
              setCurrentIndex(0);
            }, 500);
            return 0;
          }
          return next;
        });
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % alumni.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + alumni.length) % alumni.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-sky-50/30 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Alumni Leading the{' '}
            <span className="relative inline-block">
              World
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
            </span>
          </h2>
        </div>

        {/* Statistics */}
        <p className="mt-6 text-center text-base text-slate-700 sm:text-lg">
          Our growing community of successful alumni! Salary Ranges from{' '}
          <span className="font-semibold">₹20,000</span> to{' '}
          <span className="font-semibold">₹40,000</span> per month.
        </p>

        {/* Alumni Cards Carousel */}
        <div className="relative mt-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-4 rounded-full bg-white p-3 text-slate-700 shadow-xl transition-all hover:bg-sky-50 hover:scale-110 hover:text-sky-600 lg:-translate-x-12"
            aria-label="Previous alumni"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 text-slate-700 shadow-xl transition-all hover:bg-sky-50 hover:scale-110 hover:text-sky-600 lg:translate-x-12"
            aria-label="Next alumni"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-12 lg:px-20">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 5)}%)`,
              }}
            >
              {[...alumni, ...alumni].map((alumnus, index) => (
                <div
                  key={index}
                  className="min-w-[20%] shrink-0 px-3"
                >
                  <div className="group relative rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative h-80 w-full overflow-hidden rounded-t-3xl">
                      {/* Enhanced brick wall background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02)_76%,transparent_77%),linear-gradient(0deg,transparent_24%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_26%,transparent_27%,transparent_74%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02)_76%,transparent_77%)] bg-[length:40px_40px]" />
                      </div>

                      {/* Dynamic Badge */}
                      <div className={`absolute right-4 top-4 z-10 rounded-lg ${alumnus.badgeColor} px-3 py-1.5 text-xs font-bold text-white shadow-lg`}>
                        {alumnus.badge}
                      </div>

                      {/* Profile image */}
                      <div className="absolute inset-0 flex items-end justify-center pb-10">
                        <div className="relative">
                          <div className="relative h-52 w-44 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/50">
                            <img
                              src={alumnus.image}
                              alt={alumnus.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          {/* Trophy/Star Badge */}
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-xl ring-4 ring-white">
                              <HiStar className="h-7 w-7 text-yellow-900" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-slate-900">{alumnus.name}</h3>
                      <p className="mt-2 text-sm font-medium text-slate-600">{alumnus.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {alumni.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-sky-600'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to alumni ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-700 px-10 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:from-sky-700 hover:to-sky-800">
            Explore Our Courses
            <HiChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AlumniSection;

