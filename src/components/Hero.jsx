import React from 'react';
import {
  HiArrowRight,
  HiBolt,
  HiAcademicCap,
  HiCreditCard,
} from 'react-icons/hi2';

function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:flex lg:items-start lg:justify-between lg:gap-10 lg:pt-14">
        {/* Left column - main copy */}
        <div className="max-w-xl space-y-6 lg:pt-4">
          <button className="inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-orange-700 shadow-sm">
            Learn &amp; Get Hired in 6 Months!
          </button>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[38px] lg:leading-[1.25]">
            Best Data Analytics Course in Bhawanipatna, Odisha
            <span className="block text-sky-400">
              Become a Certified Data Analyst.
            </span>
          </h1>

          <p className="text-sm leading-relaxed text-slate-200 sm:text-[15px]">
            Gain knowledge of Python, SQL, Excel, Tableau, Power BI with our
            Data Analytics Course in Bhawanipatna, Odisha and earn up to ₹12 LPA! We bridge
            theory with real-world application to empower you to solve business
            problems using industry tools.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-md hover:bg-sky-700">
              Download Brochure
              <HiArrowRight className="ml-2 h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-2 shadow-md ring-1 ring-slate-700/70">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-sky-600">
                  G
                </span>
                <span className="font-semibold">4.8/5</span>
                <span className="text-slate-300">Google</span>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-2 shadow-md ring-1 ring-slate-700/70">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-orange-500">
                  J
                </span>
                <span className="font-semibold">4.8/5</span>
                <span className="text-slate-300">Justdial</span>
              </div>
            </div>
          </div>

          {/* Accreditation strip */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <span className="font-semibold text-slate-100">Certified by</span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 ring-1 ring-slate-700/70">
                <span className="mr-2 inline-block h-5 w-5 rounded-full bg-slate-100" />
                <span className="font-medium tracking-wide">MSME</span>
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 ring-1 ring-slate-700/70">
                <span className="mr-2 inline-block h-5 w-5 rounded-full bg-slate-100" />
                <span className="font-medium tracking-wide">ISO</span>
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 ring-1 ring-slate-700/70">
                <span className="mr-2 inline-block h-5 w-5 rounded-full bg-slate-100" />
                <span className="font-medium tracking-wide">Startup India</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right column - form card */}
        <div className="mt-10 w-full max-w-md shrink-0 lg:mt-0">
          <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl shadow-sky-900/40 lg:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600">
              Enroll now !!
            </p>
            <h2 className="mt-1 text-lg font-bold tracking-tight text-slate-900">
              Enroll Today and Start Your Journey!
            </h2>

            <form
              className="mt-5 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
              }}
            >
              <div className="space-y-1.5 text-left text-xs">
                <label
                  htmlFor="fullName"
                  className="font-semibold text-slate-800"
                >
                  Enter full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  minLength={2}
                  maxLength={50}
                  pattern="[A-Za-z\s]{2,50}"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-500/40 placeholder:text-slate-400 focus:bg-white focus:ring-2"
                  placeholder="Enter your full name"
                  title="Please enter a valid name (2-50 characters, letters only)"
                />
              </div>

              <div className="space-y-1.5 text-left text-xs">
                <label
                  htmlFor="email"
                  className="font-semibold text-slate-800"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-500/40 placeholder:text-slate-400 focus:bg-white focus:ring-2"
                  placeholder="example@email.com"
                  title="Please enter a valid email address"
                />
              </div>

              <div className="space-y-1.5 text-left text-xs">
                <label
                  htmlFor="phone"
                  className="font-semibold text-slate-800"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  inputMode="numeric"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-500/40 placeholder:text-slate-400 focus:bg-white focus:ring-2"
                  placeholder="9876543210"
                  title="Please enter a valid 10-digit mobile number"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                <p className="text-[10px] text-slate-500">
                  Enter 10-digit mobile number (numbers only)
                </p>
              </div>

              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-600">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="mt-[3px] h-3.5 w-3.5 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="terms" className="space-y-0.5">
                  <span className="block font-semibold">
                    Accept terms and conditions <span className="text-red-500">*</span>
                  </span>
                  <span className="block">
                    You agree to our{' '}
                    <a
                      href="#"
                      className="font-semibold text-sky-600 hover:underline"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href="#"
                      className="font-semibold text-sky-600 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="mt-3 w-full rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom info strip (placement / experience / EMI) */}
      <div className="border-t border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-5 text-xs text-slate-200 sm:flex-row sm:items-stretch sm:justify-between sm:text-sm">
          <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-700/70">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600">
              <HiBolt className="h-5 w-5 text-white" />
            </span>
            <div>
              <p className="font-semibold">100% Placement Support</p>
              <p className="text-[11px] text-slate-300">
                Dedicated career guidance &amp; interview preparation.
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-700/70">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
              <HiAcademicCap className="h-5 w-5 text-white" />
            </span>
            <div>
              <p className="font-semibold">10+ Years of Excellence</p>
              <p className="text-[11px] text-slate-300">
                Learn from experienced data analytics mentors.
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-900/70 px-4 py-3 ring-1 ring-slate-700/70">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500">
              <HiCreditCard className="h-5 w-5 text-white" />
            </span>
            <div>
              <p className="font-semibold">EMI at 0% Interest</p>
              <p className="text-[11px] text-slate-300">
                Flexible fee payment options available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


