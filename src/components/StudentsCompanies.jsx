import React from 'react';

const companiesRowOne = [
  'Cognizant',
  'Infosys',
  'ITC Infotech',
  'Deloitte',
  'Capgemini',
  'Accenture',
];

const companiesRowTwo = [
  'BT',
  'TCS',
  'Genpact',
  'HCL',
  'Tech Mahindra',
  'Wipro',
];

function StudentsCompanies() {
  const baseCardClasses =
    'flex items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]';

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-center text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Our Students are{' '}
          <span className="text-orange-500">Working In</span>
        </h2>

        {/* Logo grid */}
        <div className="mt-8 space-y-5">
          {/* First row */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {companiesRowOne.map((name) => (
              <div key={name} className={baseCardClasses}>
                <span className="text-xs font-semibold tracking-wide text-slate-700 sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {companiesRowTwo.map((name) => (
              <div key={name} className={baseCardClasses}>
                <span className="text-xs font-semibold tracking-wide text-slate-700 sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-8 flex justify-center">
          <button className="inline-flex items-center rounded-full bg-sky-600 px-7 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-700">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default StudentsCompanies;



