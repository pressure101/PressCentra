import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const projects = [
    {
      name: 'Deal Finder',
      desc: 'Main product: frontend, API, admin, and ETL pipeline for deal discovery.',
      path: '/projects/deal-finder',
      cardClass: 'border-brand-100',
      titleClass: 'text-brand-700',
    },
    {
      name: 'Resume Tweak',
      desc: 'Small utility: CLI/tooling for tailoring resumes (Python + Streamlit).',
      path: '/projects/resume-tweak',
      cardClass: 'border-brand-100',
      titleClass: 'text-brand-700',
    },
  ];

  return (
    <>
      <div className="max-w-[var(--max-width)] mx-auto px-4 xl:px-0">
      <section>
        <div className="projects">A hub of small projects created by Pressure101</div>
      </section>
      <section>
        <div className="projects">
          {projects.map((p) => {
            return (
              <Link
                key={p.name}
                to={p.path}
                className={`project-card ${p.cardClass} focus:outline-none`}
                role="button"
              >
                <h3 className={`text-lg font-semibold ${p.titleClass}`}>{p.name}</h3>
                <div className="mt-4 flex items-center" role="separator" aria-orientation="horizontal">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent/80 dark:via-brand-200" />
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent/80 dark:via-brand-200" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link
              to="/projects/deal-finder"
            >
              Deal Finder
            </Link>
          </li>
          <li>
            <Link
              to="/projects/resume-tweak"
            >
              Resume Tweak
            </Link>
          </li>
          <li>
            <Link
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </section>
      </div>
    </>
  );
}
