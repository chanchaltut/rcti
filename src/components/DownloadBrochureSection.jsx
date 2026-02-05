import React from 'react';

function DownloadBrochureSection() {
  return (
    <section className="bg-sky-50/50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-lg lg:flex lg:items-center lg:justify-between lg:gap-8">
          {/* Left Side - Text and CTA */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Need to know more?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Get to know the course in-depth by downloading the course brochure.
            </p>
            <button className="mt-6 inline-flex items-center rounded-full bg-sky-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-sky-700">
              Download Brochure
            </button>
          </div>

          {/* Right Side - CAREERS Visual */}
          <div className="relative mt-8 flex-1 lg:mt-0">
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-sky-50/50 p-8">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="h-full w-full bg-[linear-gradient(30deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1))] bg-[length:30px_30px]" />
              </div>

              {/* CAREERS Letters */}
              <div className="relative flex items-end gap-1.5 py-4 sm:gap-2">
                {['C', 'A', 'R', 'E', 'E', 'R', 'S'].map((letter, index) => {
                  const colors = [
                    'bg-teal-500',
                    'bg-orange-500',
                    'bg-green-500',
                    'bg-orange-500',
                    'bg-green-500',
                    'bg-teal-500',
                    'bg-sky-600',
                  ];
                  const handColors = [
                    ['bg-slate-800', 'bg-slate-600'],
                    ['bg-blue-600', 'bg-blue-400'],
                    ['bg-pink-500', 'bg-pink-300'],
                    ['bg-yellow-500', 'bg-yellow-300'],
                    ['bg-purple-500', 'bg-purple-300'],
                    ['bg-indigo-600', 'bg-indigo-400'],
                    ['bg-rose-500', 'bg-rose-300'],
                  ];
                  return (
                    <div key={index} className="relative flex flex-col items-center">
                      {/* Hands holding the letter */}
                      <div className="mb-1 flex items-end justify-center gap-0.5">
                        <div
                          className={`h-4 w-2.5 rounded-t ${handColors[index][0]}`}
                        />
                        <div
                          className={`h-4 w-2.5 rounded-t ${handColors[index][1]}`}
                        />
                      </div>
                      {/* 3D Letter */}
                      <div
                        className={`relative flex h-16 w-10 items-center justify-center rounded-md ${colors[index]} text-2xl font-extrabold text-white shadow-xl transition-transform hover:scale-105 sm:h-20 sm:w-12 sm:text-3xl`}
                        style={{
                          boxShadow: `0 4px 8px rgba(0,0,0,0.2), inset 0 -2px 0 rgba(0,0,0,0.1)`,
                        }}
                      >
                        <span className="relative z-10 drop-shadow-md">
                          {letter}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadBrochureSection;

