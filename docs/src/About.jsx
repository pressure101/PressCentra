import React from 'react';

export default function About() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center px-6 md:px-12 py-12 md:py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <div className="lg:col-span-5">
          <div className="border-2 border-emerald-500/50 bg-zinc-950 p-2 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
              alt="Portrait of Pressure101"
              className="aspect-[4/5] w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            ABOUT / PRESSURE101
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none font-mono">
            BUILDING WITH <span className="text-emerald-400">INTENT.</span>
          </h1>

          <div className="space-y-4 text-zinc-400 text-sm sm:text-base max-w-2xl font-mono leading-relaxed">
            <p>
              Pressure101 is a product-minded engineer focused on turning ambitious ideas into useful software.
            </p>
            <p>
              PressCentra is the working archive: a place for projects, experiments, lessons learned, and the thinking behind the build.
            </p>
          </div>

          <div className="border-l-2 border-emerald-400 pl-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <span className="text-emerald-400">STATUS:</span> BUILDING THE NEXT THING
          </div>
        </div>
      </div>
    </section>
  );
}
