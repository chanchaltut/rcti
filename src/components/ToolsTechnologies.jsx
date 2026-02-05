import React from 'react';
import {
  HiPresentationChartLine,
  HiCpuChip,
} from 'react-icons/hi2';

const toolsTopRow = [
  'Excel (Basic & Advanced)',
  'MySQL',
  'Tableau',
  'Power BI',
  'Business Statistics',
  'Python',
];

const toolsBottomRow = [
  'Large Language Models (LLM & ChatGPT)',
  'SAS (Self Paced)',
];

function ToolsTechnologies() {
  const cardClasses =
    'flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white px-10 py-10 text-center shadow-[0_14px_36px_rgba(15,23,42,0.06)]';

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-center text-[22px] font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Tools &amp; Technologies You&apos;ll Master with our{' '}
          <span className="text-orange-500">Data Analytics Courses</span>
        </h2>

        {/* Cards grid */}
        <div className="mt-10 space-y-5">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {toolsTopRow.map((tool) => (
              <div key={tool} className={cardClasses}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                  <HiPresentationChartLine className="h-6 w-6 text-sky-600" />
                </div>
                <p className="text-xs font-medium text-slate-800 sm:text-sm">
                  {tool}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
            {toolsBottomRow.map((tool) => (
              <div key={tool} className={cardClasses}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                  <HiCpuChip className="h-6 w-6 text-sky-600" />
                </div>
                <p className="text-xs font-medium text-slate-800 sm:text-sm">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="inline-flex items-center rounded-full bg-sky-600 px-9 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

export default ToolsTechnologies;



