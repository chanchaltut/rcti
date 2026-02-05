import React from 'react';
import { HiPhone, HiCheck } from 'react-icons/hi2';

const methodologyItems = [
  'Live Practical Classes',
  'Free Study Materials',
  'Global Certifications',
  '15+ Portfolio Projects',
  'Dedicated Placement Cell',
  'Resume & Interview Preparation',
  'Theory+Practical Examination',
  '1:1 Mentoring',
  'Recorded Sessions & Doubt Clearing',
];

function LearningMethodology() {
  return (
    <section className="bg-slate-50 pb-0 pt-12">
      {/* Guidance card */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[32px] bg-white px-6 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.09)] sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
              Need guidance?{' '}
              <span className="text-orange-500">
                Talk to our career expert!
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Get in touch with our program advisor &amp; get your queries
              resolved.
            </p>

            <button className="mt-5 inline-flex items-center rounded-full bg-sky-600 px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700">
              Download Brochure
            </button>

            <p className="mt-4 flex items-center gap-2 text-sm text-slate-700">
              Reach out to our expert
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                <HiPhone className="h-4 w-4" />
              </span>
              <span className="font-semibold">9831284098</span>
            </p>
          </div>

          <div className="mt-6 flex justify-center lg:mt-0">
            <div className="relative h-40 w-64 overflow-hidden rounded-3xl bg-sky-50 sm:h-48 sm:w-80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e0f2fe_0,_transparent_55%),_radial-gradient(circle_at_bottom,_#bfdbfe_0,_transparent_60%)]" />
              <div className="relative flex h-full items-end justify-center pb-4">
                <div className="flex gap-2">
                  <div className="h-24 w-14 rounded-2xl bg-white/90 shadow-md shadow-sky-200" />
                  <div className="h-28 w-16 rounded-2xl bg-white/95 shadow-lg shadow-sky-300" />
                  <div className="h-24 w-14 rounded-2xl bg-white/90 shadow-md shadow-sky-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark methodology band */}
      <div className="mt-10 bg-slate-950 py-14 text-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h3 className="text-[22px] font-semibold tracking-tight sm:text-[24px]">
              Our Learning Methodology
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Discover our innovative learning methodology that empowers you to
              master and build cutting-edge, high-performance skills.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methodologyItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-slate-100"
              >
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                  <HiCheck className="h-4 w-4 text-white" />
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center rounded-full bg-sky-600 px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default LearningMethodology;



