import React, { useState, useEffect } from 'react';
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

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

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
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden relative z-50"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle navigation menu"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <div className="relative h-4 w-4 flex items-center justify-center">
                                {/* Top line */}
                                <span
                                    className={`absolute h-0.5 w-4 rounded-full bg-slate-800 transition-all duration-300 origin-center ${
                                        mobileOpen
                                            ? 'rotate-45 translate-y-0'
                                            : '-translate-y-1.5 rotate-0'
                                    }`}
                                />
                                {/* Middle line */}
                                <span
                                    className={`absolute h-0.5 w-4 rounded-full bg-slate-800 transition-all duration-300 ${
                                        mobileOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                                    }`}
                                />
                                {/* Bottom line */}
                                <span
                                    className={`absolute h-0.5 w-4 rounded-full bg-slate-800 transition-all duration-300 origin-center ${
                                        mobileOpen
                                            ? '-rotate-45 translate-y-0'
                                            : 'translate-y-1.5 rotate-0'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop blur overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-40 ${
                    mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-[70vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
                    mobileOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Sidebar content */}
                <div className="flex h-full flex-col">
                    {/* Logo at top */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                        <img
                            src="/rctiLogo.png"
                            alt="RCTI Academy"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Navigation items */}
                    <nav className="flex flex-1 flex-col gap-1 px-4 py-6 text-sm font-medium text-slate-700 overflow-y-auto">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => setMobileOpen(false)}
                                className="w-full rounded-md px-4 py-3 text-left transition-colors hover:bg-slate-50 hover:text-sky-600"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="mt-4 w-full rounded-full bg-sky-600 px-4 py-3 text-xs font-semibold text-white shadow-sm hover:bg-sky-700 flex items-center justify-center gap-2"
                        >
                            Contact Us
                            <HiArrowRight className="h-4 w-4" />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;


