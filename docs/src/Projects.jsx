import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    number: '01',
    name: 'Deal Finder',
    type: 'Full-stack product',
    description: 'A deal discovery platform with a web frontend, API, admin tools, and an ETL pipeline for turning source data into useful offers.',
    stack: ['React', 'TypeScript', 'Python', 'ETL'],
    detailPath: '/projects/deal-finder',
    githubUrl: 'https://github.com/pressure101/PressCentra/tree/main/deal-finder',
    accent: 'from-emerald-400/25 via-teal-500/10 to-transparent',
  },
  {
    number: '02',
    name: 'Resume Tweak',
    type: 'Productivity utility',
    description: 'A small Streamlit tool that helps tailor resumes to a specific opportunity with a simple, focused workflow.',
    stack: ['Python', 'Streamlit', 'AI tooling'],
    detailPath: '/projects/resume-tweak',
    githubUrl: 'https://github.com/pressure101/PressCentra/tree/main/resume-tweak',
    accent: 'from-orange-400/25 via-rose-500/10 to-transparent',
  },
  {
    number: '03',
    name: 'Loudmouth',
    type: 'Creative project',
    description: 'A project built to give ideas, opinions, and experiments a louder place to live on the web.',
    stack: ['React', 'JavaScript', 'Web'],
    detailPath: '/loudmouth',
    githubUrl: 'https://github.com/pressure101/loudmouth',
    accent: 'from-cyan-400/25 via-blue-500/10 to-transparent',
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  function showProject(index) {
    setActiveIndex((index + projects.length) % projects.length);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') showProject(activeIndex - 1);
      if (event.key === 'ArrowRight') showProject(activeIndex + 1);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <main className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-12 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Selected work // 2026</p>
          <h1 className="font-mono text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">Projects I built.</h1>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-zinc-400">A small, evolving collection of products, experiments, and useful tools.</p>
        </div>

        <section aria-label="Project carousel" className="relative overflow-hidden border-2 border-zinc-800 bg-zinc-900/80 shadow-[12px_12px_0_rgba(16,185,129,0.16)]">
          <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent}`} />
          <div className="relative grid min-h-[440px] grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between border-b-2 border-zinc-800 p-8 sm:p-12 lg:border-b-0 lg:border-r-2">
              <div>
                <span className="font-mono text-7xl font-black text-zinc-800 sm:text-9xl">{activeProject.number}</span>
                <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.24em] text-emerald-400">{activeProject.type}</p>
              </div>
              <div className="mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
                <span className="h-2 w-2 bg-emerald-400" />
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <h2 className="font-mono text-3xl font-black uppercase sm:text-5xl">{activeProject.name}</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300">{activeProject.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {activeProject.stack.map((item) => (
                  <span key={item} className="border border-zinc-700 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-400">{item}</span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                {/* <Link to={activeProject.detailPath} className="border-2 border-emerald-400 bg-emerald-400 px-5 py-3 font-mono text-xs font-black uppercase tracking-widest text-black transition hover:bg-transparent hover:text-emerald-400">View case study</Link> */}
                <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="border-2 border-zinc-700 px-5 py-3 font-mono text-xs font-black uppercase tracking-widest text-zinc-300 transition hover:border-white hover:text-white">GitHub ↗</a>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2" aria-label="Choose project">
            {projects.map((project, index) => (
              <button key={project.name} type="button" aria-label={`Show ${project.name}`} aria-current={index === activeIndex} onClick={() => showProject(index)} className={`h-2 transition-all ${index === activeIndex ? 'w-12 bg-emerald-400' : 'w-6 bg-zinc-700 hover:bg-zinc-500'}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => showProject(activeIndex - 1)} aria-label="Previous project" className="border border-zinc-700 px-4 py-2 font-mono text-lg text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400">←</button>
            <button type="button" onClick={() => showProject(activeIndex + 1)} aria-label="Next project" className="border border-zinc-700 px-4 py-2 font-mono text-lg text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400">→</button>
          </div>
        </div>
      </div>
    </main>
  );
}
