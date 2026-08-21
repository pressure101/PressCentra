function Hero() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center px-6 md:px-12 py-12 md:py-20 overflow-hidden relative">
      
      {/* Background Decorative Grid Mask (Pure Cyberpunk Detail) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Heavy Typography & Text (Spans 7 columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Subtle Live Status Indicator */}
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            SYSTEM_STATUS // COMPILING_ONLINE
          </div>

          {/* Main Massive Brutalist Title */}
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none font-mono">
            BUILD THE FUTURE <br />
            WITHOUT THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              TEMPLATES_
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-mono leading-relaxed">
            Stop forcing your ideas into cookie-cutter structures. Code custom user interfaces natively from scratch with zero bloat, instant rendering speeds, and complete structural freedom.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto border-2 border-emerald-500 bg-emerald-500 text-black font-black uppercase text-xs tracking-widest font-mono px-8 py-4 transition-all hover:bg-transparent hover:text-emerald-400 active:scale-95 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              INITIALIZE_BUILD //
            </button>
            <button className="w-full sm:w-auto border-2 border-zinc-800 bg-transparent text-zinc-400 hover:text-white hover:border-zinc-500 font-bold uppercase text-xs tracking-widest font-mono px-8 py-4 transition-all">
              VIEW_SOURCE_CODE
            </button>
          </div>

          {/* Micro Terminal Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900 w-full font-mono">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">0.00ms</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">LATENCY_RATE</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.2)]">100%</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">CUSTOMIZATION</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">VITE_v4</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">CORE_ENGINE</div>
            </div>
          </div>

        </div>

        {/* Right Side: Abstract Interactive Terminal Console (Spans 5 columns) */}
        <div className="lg:col-span-5 w-full hidden sm:block">
          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-400 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group overflow-hidden hover:border-emerald-500/40 transition-colors duration-300">
            
            {/* Top Bar Decoration */}
            <div className="flex justify-between items-center border-b border-zinc-900 pb-3 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-red-500/40 transition-colors" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-yellow-500/40 transition-colors" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-emerald-500/40 transition-colors" />
              </div>
              <span className="text-[10px] text-zinc-600 uppercase tracking-wider">bash_profile</span>
            </div>

            {/* Simulated Terminal Text Streams */}
            <div className="space-y-2 text-zinc-500">
              <p><span className="text-emerald-400">➜</span> <span className="text-zinc-300">~</span> npm run dev</p>
              <p className="text-zinc-600">VITE v5.1.4  ready in 245 ms</p>
              <p className="text-zinc-600">➜  Local:   <span className="text-emerald-400 underline">http://localhost:5173/</span></p>
              <p><span className="text-emerald-400">➜</span> <span className="text-zinc-300">~</span> analyzing layout modules...</p>
              <p className="text-yellow-500/80">[WARN] Standard layout templates detected: DELETING...</p>
              <p className="text-emerald-400 bg-emerald-500/10 px-2 py-1 inline-block border border-emerald-500/20 rounded mt-1 animate-pulse">
                [SUCCESS] Custom design system compiled inject_ok
              </p>
              
              {/* Decorative Matrix Glow Behind Console */}
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;