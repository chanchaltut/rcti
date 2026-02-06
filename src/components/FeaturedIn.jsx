import React from 'react';

const featuredLogosRowOne = ['TV9', 'TOI', 'ABP', 'Republic Bharat'];
const featuredLogosRowTwo = ['India News', 'NewsX', 'Dailyhunt', 'Startup Media'];

function FeaturedIn() {
  const cardClasses =
    'flex items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.06)]';

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-10 px-4 lg:flex-row lg:items-center">
        {/* Left copy */}
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Featured <span className="text-orange-500">In</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            We take pride in our exceptional achievements and high student
            success rate. Check out our achievements below.
          </p>

          <button className="mt-6 inline-flex items-center rounded-full bg-sky-600 px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700">
            Check Eligibility
          </button>
        </div>

        {/* Right logos */}
        <div className="flex-1">
          <div className="grid gap-4 md:grid-cols-4">
            {featuredLogosRowOne.map((name) => (
              <div key={name} className={cardClasses}>
                <span className="text-xs font-semibold tracking-wide text-slate-700 sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {featuredLogosRowTwo.map((name) => (
              <div key={name} className={cardClasses}>
                <span className="text-xs font-semibold tracking-wide text-slate-700 sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;




