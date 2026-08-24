import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const navRef = React.useRef(null);
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  useEffect(() => {
    function setNavHeight() {
      const h = navRef.current ? navRef.current.offsetHeight : 64;
      document.documentElement.style.setProperty('--nav-height', h + 'px');
    }
    setNavHeight();
    window.addEventListener('resize', setNavHeight);
    return () => window.removeEventListener('resize', setNavHeight);
  }, []);

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  }

    function openDrawer() { setDrawerOpen(true); }
    function closeDrawer() { setDrawerOpen(false); }

    return (
      <>
        <nav className="sticky top-0 z-50 bg-black border-b-2 border-emerald-500 px-6 md:px-12 py-4 text-white flex justify-between items-center shadow-[0_4px_30px_rgba(16,185,129,0.15)]">
      
      {/* Brand / Logo */}
      <div className="font-black tracking-widest text-xl uppercase font-mono flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-emerald-400 inline-block animate-pulse shadow-[0_0_10px_#34d399]" />
         <Link to="/">
          Press<span className="text-emerald-400 font-light text-zinc-500"> Centra</span>
         </Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 font-bold uppercase tracking-widest text-xs font-mono items-center">
        <li>
          <Link to="/" className="text-zinc-400 hover:text-emerald-400 transition-colors duration-200 relative group py-2">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#34d399]" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-zinc-400 hover:text-emerald-400 transition-colors duration-200 relative group py-2">
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#34d399]" />
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-zinc-400 hover:text-emerald-400 transition-colors duration-200 relative group py-2">
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#34d399]" />
          </Link>
        </li>
        <li>
          <Link to="/loudmouth" className="text-zinc-400 hover:text-emerald-400 transition-colors duration-200 relative group py-2">
            Loudmouth
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#34d399]" />
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="border-2 border-emerald-500 bg-emerald-500/10 hover:bg-emerald-400 hover:text-black font-black uppercase text-xs tracking-widest font-mono px-5 py-2.5 transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(52,211,153,0.2)] hover:shadow-[0_0_25px_rgba(52,211,153,0.6)]">
          Support //
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        <span className={`block w-6 h-0.5 bg-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''} shadow-[0_0_5px_#34d399]`} />
        <span className={`block w-6 h-0.5 bg-emerald-400 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''} shadow-[0_0_5px_#34d399]`} />
        <span className={`block w-6 h-0.5 bg-emerald-400 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''} shadow-[0_0_5px_#34d399]`} />
      </button>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-300 border-l-2 border-emerald-500 md:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center gap-8 font-bold uppercase tracking-widest text-lg font-mono">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-emerald-400 transition-colors">Projects</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-emerald-400 transition-colors">About</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-emerald-400 transition-colors">Blog</Link></li>
          <li><Link to="/loudmouth" onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-emerald-400 transition-colors">Loudmouth</Link></li>
        </ul>
        <button onClick={() => setIsOpen(false)} className="mt-4 border-2 border-emerald-500 bg-emerald-500/10 text-emerald-400 font-black uppercase text-sm tracking-widest font-mono px-8 py-3 w-64 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
          Support
        </button>
      </div>

    </nav>


        {/* Mobile drawer */}
        <div className={`fixed inset-0 z-50 ${drawerOpen ? '' : 'pointer-events-none'}`} aria-hidden={!drawerOpen}>
          <div className={`absolute inset-0 bg-black/30 transition-opacity ${drawerOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeDrawer} />
          <aside className={`absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 p-6 transform ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-extrabold">PressCentra</div>
              <button onClick={closeDrawer} aria-label="Close menu" className="p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              <Link to="/" onClick={closeDrawer} className="text-blue-600 dark:text-brand-200">Home</Link>
              <Link to="/about" onClick={closeDrawer} className="text-blue-600 dark:text-brand-200">About</Link>
              <Link to="/projects/deal-finder" onClick={closeDrawer} className="text-gray-700 dark:text-gray-200">Deal Finder</Link>
              <Link to="/projects/resume-tweak" onClick={closeDrawer} className="text-gray-700 dark:text-gray-200">Resume Tweak</Link>
            </nav>
          </aside>
        </div>
      </>
    );
}
