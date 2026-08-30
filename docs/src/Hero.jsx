import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center px-6 md:px-12 py-12 md:py-20 overflow-hidden relative">
      
      {/* Background Decorative Grid Mask (Pure Cyberpunk Detail) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Heavy Typography & Text (Spans 7 columns on large screens) */}
        <div className="lg:col-span-10 flex flex-col items-start space-y-6">
          
          {/* Subtle Live Status Indicator */}
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            BUILDING
          </div>

          {/* Main Massive Brutalist Title */}
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none font-mono">
            EFFICIENCT, PRODUCT-MINDED, <br />
            LEADERSHIP. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              PRESSURE101.
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-mono leading-relaxed">
            Welcome! Press Centra is the platform to showcase everything Pressure101 from projects written, passions explained in thoughtful blog posts, and ways to follow the journey in creating the biggest impact in software.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <Link to="/projects" className="w-full sm:w-auto border-2 border-emerald-500 bg-emerald-500 text-black font-black uppercase text-xs tracking-widest font-mono px-8 py-4 text-center transition-all hover:bg-transparent hover:text-emerald-400 active:scale-95 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              VIEW PROJECTS
            </Link>
            <button className="w-full sm:w-auto border-2 border-zinc-800 bg-transparent text-zinc-400 hover:text-white hover:border-zinc-500 font-bold uppercase text-xs tracking-widest font-mono px-8 py-4 transition-all">
              SUPPORT
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;