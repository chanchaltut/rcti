import React from 'react';
import { HiCheck } from 'react-icons/hi2';

const roles = [
  'Data Analyst',
  'Marketing Analyst',
  'Data Visualization Specialist',
  'Machine Learning Associate',
  'Business Intelligence Analyst',
];

function FutureProspects() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 lg:flex-row lg:items-center">
        {/* Left content */}
        <div className="w-full max-w-xl">
          <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 sm:text-[24px]">
            Future Prospect of a{' '}
            <span className="text-orange-500">Data Analyst</span>{' '}
            <span className="text-sky-700">in Bhawanipatna, Odisha</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            After completing our Data Analytics Course in Bhawanipatna, Odisha, you will
            explore the roles like
          </p>

          {/* Role cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {roles.map((role) => (
              <div
                key={role}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <HiCheck className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium text-slate-800">{role}</p>
              </div>
            ))}
          </div>

          {/* Salary text */}
          <p className="mt-6 text-sm text-slate-700">
            Average Salary in India:{' '}
            <span className="font-semibold text-slate-900">₹4–12 LPA</span>{' '}
            <span className="text-slate-500">(as per industry standard)</span>
          </p>

          {/* CTA */}
          <button className="mt-6 inline-flex items-center rounded-full bg-sky-600 px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700">
            Download Brochure
          </button>
        </div>

        {/* Right illustration */}
        <div className="w-full max-w-md lg:flex-1">
          <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-[32px] bg-sky-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#c7d2fe_0,_transparent_45%),_radial-gradient(circle_at_bottom,_#7dd3fc_0,_transparent_55%)]" />
            <div className="relative flex h-full items-center justify-center px-6">
              <div className="flex gap-4">
                <div className="h-40 w-24 rounded-2xl bg-white/90 shadow-lg shadow-sky-200" />
                <div className="h-52 w-40 rounded-3xl bg-white/95 shadow-xl shadow-sky-300" />
                <div className="mt-6 h-32 w-20 rounded-2xl bg-white/80 shadow-md shadow-sky-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureProspects;



