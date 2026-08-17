import React from 'react';

export default function Home({ onNavigate }) {
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
    <div>
      <header className="page-header">
        <p>A hub of all projects built by Pressure101</p>
      </header>

      <section>
        <div className="projects">
          {projects.map(p => (
            <a
              key={p.name}
              href={p.path}
              className={`project-card ${p.cardClass} focus:outline-none`}
              onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate(p.path); }}
              role="button"
            >
              <h3 className={`text-lg font-semibold ${p.titleClass}`}>{p.name}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              <div style={{ marginTop: 12 }} className="text-blue-600 transition-colors hover:text-blue-800">Open →</div>
            </a>
          ))}
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
              <li><a href="/projects/deal-finder" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/projects/deal-finder')}}>Deal Finder</a></li>
              <li><a href="/projects/resume-tweak" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/projects/resume-tweak')}}>Resume Tweak</a></li>
              <li><a href="/about" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/about')}}>About</a></li>
        </ul>
      </section>
    </div>
  );
}
