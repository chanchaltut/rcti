import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi2';

const testimonials = [
  {
    rating: 5,
    text: "Ami kokhono bhabini Data Analytics amake ei rokom career opportunity debe. EME Academy'r guidance ar Power BI & Tableau er practical knowledge amar life-e onek boro change ene diyeche.",
    name: 'Arindam Banerjee',
  },
  {
    rating: 4,
    text: "Training sesh howar agei interview call peyechilam. Power BI ar SQL niye confidence build korechhi ar akhon ekta top company te BI Analyst er position e kaj korchi.",
    name: 'Rituparna Ghosh',
  },
  {
    rating: 4,
    text: "Is course ke baad 50% salary hike mili! Data Analytics is a must-have skill in today's time and the instructors at EME Academy are just amazing. I believe that their mentorship was a key factor in helping me secure this role as a Data Visualisation Specialist",
    name: 'Nidhi Agarwal',
  },
];

function StudentsTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <HiStar
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-slate-800">Students</span>{' '}
            <span className="text-orange-500">Testimonials</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Navigation Arrows - Hidden on desktop when showing all cards */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full bg-sky-600 p-2 text-white shadow-lg transition-colors hover:bg-sky-700 lg:hidden lg:-translate-x-12"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-sky-600 p-2 text-white shadow-lg transition-colors hover:bg-sky-700 lg:hidden lg:translate-x-12"
            aria-label="Next testimonial"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden px-8 lg:px-0">
            {/* Mobile: Carousel */}
            <div
              className="flex transition-transform duration-300 ease-in-out lg:hidden"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full shrink-0 px-2">
                  <div className="mx-auto rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
                    {/* Rating */}
                    <div className="mb-4 flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-6 text-sm leading-relaxed text-slate-700">
                      {testimonial.text}
                    </p>

                    {/* Student Info */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Show all 3 cards */}
            <div className="hidden grid-cols-3 gap-6 lg:grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="mb-6 text-sm leading-relaxed text-slate-700">
                    {testimonial.text}
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Only show on mobile */}
          <div className="mt-6 flex justify-center gap-2 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-sky-600'
                    : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentsTestimonials;

