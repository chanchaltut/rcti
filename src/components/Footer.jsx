import React from 'react';
import { HiMapPin } from 'react-icons/hi2';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column - Logo and Description */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/rctiLogo.png"
                alt="RCTI Academy"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-300">
              Explore, learn, and grow with us today. With a diverse range of
              courses, expert instructors, and a supportive community, we&apos;re
              here to empower you on your educational journey.
            </p>
          </div>

          {/* Middle Column - Our Courses */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Our Courses
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Data Analytics Course
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <p className="mb-4 text-sm font-medium text-slate-300">
              RCTI Academy Educational & Welfare Trust
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-3">
                <HiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                <p>
                  RCTI Academy, Bhawanipatna, Kalahandi, Odisha, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+917855959544"
                  className="hover:text-white"
                >
                  7855959544
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@rctiacademy.co.in"
                  className="hover:text-white"
                >
                  info@rctiacademy.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} RCTI Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

