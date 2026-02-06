import React from 'react';
import { HiStar } from 'react-icons/hi2';

function AwardsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left Section - Award Recognition */}
          <div className="space-y-6">
            {/* Award Icon */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Star with laurel wreath */}
                <div className="relative flex h-28 w-28 items-center justify-center">
                  {/* Outer laurel wreath circle */}
                  <div className="absolute inset-0 rounded-full border-[6px] border-sky-600" />
                  {/* Inner decorative circle */}
                  <div className="absolute inset-2 rounded-full border-2 border-sky-400" />
                  {/* Star */}
                  <div className="relative z-10">
                    <HiStar className="h-16 w-16 text-sky-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl font-bold leading-relaxed text-slate-800 sm:text-2xl">
                Proudly recognized as an{' '}
                <span className="relative inline-block text-orange-500">
                  award-winning
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500" />
                </span>{' '}
                Academy
              </h2>
            </div>

            {/* Award Certificate Card */}
            <div className="mx-auto max-w-sm lg:mx-0">
              <div className="rounded-lg border-2 border-slate-800 bg-slate-50 p-4 shadow-md">
                <div className="mb-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    LEADERSHIP AWARD 2024
                  </p>
                </div>
                <div className="space-y-2 text-center text-xs text-slate-700">
                  <p className="font-semibold">PROUDLY PRESENTED TO</p>
                  <p className="text-sm font-bold text-slate-900">RCTI Academy</p>
                  <p className="mt-3 font-semibold">
                    Best Placement Institute of the Year
                  </p>
                </div>
                {/* Logos */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 border-t border-slate-300 pt-3">
                  <div className="rounded bg-slate-200 px-2 py-1 text-[8px] font-bold text-slate-700">
                    INDIA न्यूज़ Business
                  </div>
                  <div className="rounded bg-slate-200 px-2 py-1 text-[8px] font-bold text-slate-700">
                    ITV Network
                  </div>
                  <div className="rounded bg-slate-200 px-2 py-1 text-[8px] font-bold text-slate-700">
                    newsX
                  </div>
                  <div className="rounded bg-slate-200 px-2 py-1 text-[8px] font-bold text-slate-700">
                    The Business Guardian
                  </div>
                </div>
              </div>
            </div>

            {/* Award Title */}
            <div className="text-center lg:text-left">
              <p className="text-lg font-bold text-slate-800 sm:text-xl">
                Best{' '}
                <span className="text-sky-600">Placement Institute</span> of the
                year - 2024
              </p>
            </div>
          </div>

          {/* Right Section - Award Ceremony Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
                alt="Award Ceremony"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;

