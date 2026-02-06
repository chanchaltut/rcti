import React from 'react';
import { HiCheck } from 'react-icons/hi2';

const placementServices = [
  {
    title: 'Resume Building & LinkedIn Optimization',
    features: [
      'Create job-ready, professional resumes',
      'Optimize LinkedIn to attract recruiters',
      'Showcase skills, certifications & projects',
    ],
  },
  {
    title: 'Aptitude & Logical Reasoning Training',
    features: [
      'Daily practice sessions',
      'Full-length aptitude tests',
      'Improve reasoning & speed',
    ],
  },
  {
    title: 'Interview Practice & Technical Training',
    features: [
      'Weekly mock interviews',
      'HR + technical rounds',
      'Personalized feedback',
    ],
  },
  {
    title: 'Career Mentorship from Experts',
    features: [
      '1-on-1 counseling sessions',
      'Industry insights & trends',
      'Salary negotiation tips',
    ],
  },
  {
    title: 'Hiring Partners & Career Portal Access',
    features: [
      'Active hiring partners network',
      'Exclusive access to job listings',
      'Direct interview referrals',
    ],
  },
  {
    title: 'Build Your Job-Winning Portfolio',
    features: [
      'Build real-world projects',
      'Get mentor feedback',
      'Showcase work to employers',
    ],
  },
];

function PlacementSupport() {
  return (
    <section className="relative bg-sky-50/50 py-16">
      {/* Subtle geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(30deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1))] bg-[length:20px_20px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Placement Support to Land Your{' '}
            <span className="relative inline-block">
              Dream Job
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-500" />
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placementServices.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-4 text-lg font-bold text-slate-800">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <HiCheck className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlacementSupport;

