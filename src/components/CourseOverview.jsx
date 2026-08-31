import React from 'react';
import {
  HiClock,
  HiRectangleStack,
  HiGlobeAlt,
  HiArrowRight,
} from 'react-icons/hi2';

const courses = [
  {
    title: 'PG DCA',
    description: 'Post Graduate Diploma in Computer Applications. Enhance your professional skills with comprehensive training in advanced computer applications.',
    duration: '1 Year',
    originalFee: '₹25,000',
    discountedFee: '₹20,000',
    savings: 'Save ₹5,000/-',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
  },
  {
    title: 'DCA',
    description: 'Diploma in Computer Applications. A foundational course covering essential computer skills, office automation, and basic programming.',
    duration: '6 months',
    originalFee: '₹15,000',
    discountedFee: '₹12,000',
    savings: 'Save ₹3,000/-',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
  },
  {
    title: 'BCA',
    description: 'Bachelor of Computer Applications. A comprehensive degree program focused on software development, database management, and web technologies.',
    duration: '3 Years',
    originalFee: '₹1,50,000',
    discountedFee: '₹1,20,000',
    savings: 'Save ₹30,000/-',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
  },
  {
    title: 'BSc Computer Science',
    description: 'Bachelor of Science in Computer Science. Deep dive into algorithms, computational theory, and advanced software engineering principles.',
    duration: '3 Years',
    originalFee: '₹1,40,000',
    discountedFee: '₹1,15,000',
    savings: 'Save ₹25,000/-',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop'
  },
  {
    title: 'MCA',
    description: 'Master of Computer Applications. Advanced degree program specializing in enterprise software development and modern technologies.',
    duration: '2 Years',
    originalFee: '₹1,80,000',
    discountedFee: '₹1,50,000',
    savings: 'Save ₹30,000/-',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop'
  }
];

function CourseOverview() {
  return (
    <section id="courses" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top heading */}
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Explore <span className="text-sky-700">Our</span>{' '}
            <span className="text-orange-500">Premium Courses</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-[15px]">
            Discover the skills, tools, and expert guidance you need to become a
            job-ready professional.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {courses.map((course, index) => (
            <div key={index} className="rounded-[32px] border border-slate-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_1.6fr]">
                {/* Left image */}
                <div className="relative overflow-hidden rounded-t-[32px] border-b border-slate-100 bg-slate-200 lg:rounded-l-[32px] lg:rounded-tr-none lg:border-b-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
                    loading="lazy"
                  />
                </div>

                {/* Right content */}
                <div className="flex flex-col justify-between px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
                  {/* Title + description */}
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                      {course.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {course.description}
                    </p>
                  </div>

                  {/* Features grid */}
                  <div className="mt-6 grid gap-5 text-sm text-slate-800 sm:grid-cols-2">
                    {/* Duration */}
                    <div className="flex items-start gap-3 rounded-2xl bg-sky-50 px-4 py-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
                        <HiClock className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Duration
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    {/* Affordable Fees */}
                    <div className="flex items-start gap-3 rounded-2xl bg-sky-50 px-4 py-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-xl text-white">
                        ₹
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Affordable Fees
                        </p>
                        <p className="mt-1 text-sm">
                          <span className="pr-1 text-slate-400 line-through">
                            {course.originalFee}
                          </span>
                          <span className="font-semibold text-slate-900">
                            {course.discountedFee}
                          </span>
                        </p>
                        <p className="text-xs font-semibold text-emerald-600">
                          {course.savings}
                        </p>
                      </div>
                    </div>

                    {/* Mode of Training */}
                    <div className="flex items-start gap-3 rounded-2xl bg-sky-50 px-4 py-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
                        <HiRectangleStack className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Mode of Training
                        </p>
                        <p className="mt-1 text-sm text-slate-900">
                          Online and classroom sessions are available.
                        </p>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex items-start gap-3 rounded-2xl bg-sky-50 px-4 py-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
                        <HiGlobeAlt className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Languages
                        </p>
                        <p className="mt-1 text-sm text-slate-900">
                          Odia, English &amp; Hindi
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <button className="inline-flex items-center rounded-full bg-sky-600 px-7 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700">
                      Explore Now <HiArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center rounded-full border border-sky-600 px-7 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                      Course Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseOverview;
