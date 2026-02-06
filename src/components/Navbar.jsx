import React, { useState } from 'react';
import { HiPhone, HiArrowRight } from 'react-icons/hi2';

const navItems = [
    'Course Overview',
    'Featured In',
    'Course Curriculum',
    'Tools',
    'Career Prospects',
    'Testimonials',
    'Awards',
];

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 shadow-sm">
            {/* Top info strip */}
            <div className="bg-sky-500 text-white text-[11px] sm:text-xs">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5">
                    <p className="font-medium tracking-wide">
                        Professional Computer Training Institute in Bhawanipatna, Odisha
                    </p>
                    <button className="hidden items-center gap-2 rounded-full bg-sky-600 px-3 py-1 text-[11px] font-semibold tracking-wide shadow-sm hover:bg-sky-700 sm:flex">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400">
                            <HiPhone className="h-3 w-3 text-white" />
                        </span>
                        <span>+91 7855959544</span>
                    </button>
                </div>
            </div>

            {/* Main navbar */}
            <div className="border-b border-slate-100 bg-white/95 backdrop-blur-sm">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:py-4">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/rctiLogo.png"
                            alt="RCTI Academy"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-6 text-[13px] font-medium text-slate-700 lg:flex">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                className="relative transition-colors hover:text-sky-600"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sky-500 transition-all group-hover:w-full" />
                            </button>
                        ))}
                    </nav>

                    {/* CTA + mobile menu button */}
                    <div className="flex items-center gap-3">
                        <button className="hidden items-center rounded-full bg-sky-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-700 lg:inline-flex">
                            Contact Us
                            <HiArrowRight className="ml-1 h-4 w-4" />
                        </button>
                        <button
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle navigation menu"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <div className="space-y-1.5">
                                <span className="block h-0.5 w-4 rounded-full bg-slate-800" />
                                <span className="block h-0.5 w-4 rounded-full bg-slate-800" />
                                <span className="block h-0.5 w-4 rounded-full bg-slate-800" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown */}
                {mobileOpen && (
                    <div className="border-t border-slate-100 bg-white lg:hidden">
                        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    className="w-full rounded-md px-2 py-2 text-left transition-colors hover:bg-slate-50 hover:text-sky-600"
                                >
                                    {item}
                                </button>
                            ))}
                            <button className="mt-2 w-full rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-700">
                                Contact Us
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;


