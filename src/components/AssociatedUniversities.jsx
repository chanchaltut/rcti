import React from 'react';

const universities = ['MATS University', 'Kalinga University', 'Utkal University'];

function AssociatedUniversities() {
  const cardClasses =
    'flex h-24 items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.06)] hover:shadow-lg transition-shadow';

  return (
    <section id="universities" className="bg-white py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Associated <span className="text-sky-700">Universities</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 max-w-2xl mx-auto">
            We are proud to be associated with top-tier universities, offering our students the best opportunities for higher education and career advancement.
          </p>
        </div>

        {/* Logos/Names */}
        <div className="grid w-full gap-6 md:grid-cols-3">
          {universities.map((name) => (
            <div key={name} className={cardClasses}>
              <span className="text-lg font-bold tracking-wide text-slate-700 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AssociatedUniversities;
