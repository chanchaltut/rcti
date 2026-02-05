import React, { useState } from 'react';

const faqs = [
  {
    question: 'Does RCTI Academy provide online classes?',
    answer:
      'Yes, RCTI Academy offers both online and offline classes to accommodate different learning preferences and schedules.',
  },
  {
    question: 'Will I get placement support after the course?',
    answer:
      'Absolutely! We provide comprehensive placement support including resume building, interview preparation, and direct referrals to our hiring partners.',
  },
  {
    question: 'Do I need prior experience for the Data Analytics Course?',
    answer:
      'No prior experience is required. Our course is designed for beginners and covers everything from fundamentals to advanced concepts.',
  },
  {
    question: 'Can I get a demo class before enrolling?',
    answer:
      'Yes, we offer demo classes so you can experience our teaching methodology before making a commitment.',
  },
  {
    question: 'Will I receive a certification upon course completion?',
    answer:
      'Yes, you will receive a globally recognized certification upon successful completion of the course and assessments.',
  },
  {
    question: 'How does RCTI Academy ensure practical learning?',
    answer:
      'We focus on hands-on learning with real-world projects, live practical classes, and industry-relevant case studies.',
  },
  {
    question: 'What types of real-world projects will I work on?',
    answer:
      'You will work on 15+ portfolio projects covering various industries including e-commerce, healthcare, finance, and more.',
  },
  {
    question: 'Is there an internship included in the course?',
    answer:
      'Yes, we provide internship opportunities with our partner companies to give you real industry experience.',
  },
  {
    question: 'Can I pursue this course while working a full-time job?',
    answer:
      'Yes, we offer flexible schedules including weekend batches and recorded sessions for working professionals.',
  },
  {
    question: 'What happens if I miss a class?',
    answer:
      'All classes are recorded and available for review. You can access recorded sessions and schedule doubt-clearing sessions.',
  },
  {
    question: 'How can I enroll?',
    answer:
      'You can enroll by filling out the enrollment form on our website, calling us at +91 9093926145, or visiting our campus.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            <span className="text-slate-800">Frequently Asked Questions</span>{' '}
            <span className="text-orange-500">(FAQs)</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-slate-50 transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="flex-1 pr-4 text-sm font-medium text-slate-900 sm:text-base">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-slate-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-200 px-5 pb-5 pt-3">
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

