import React, { useEffect, useState } from 'react';

export default function Nav({ onNavigate }) {
  const navRef = React.useRef(null);
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light');
  const [drawerOpen, setDrawerOpen] = useState(false);

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

    function navAndClose(href) {
      closeDrawer();
      onNavigate(href);
    }

    return (
      <>
          <nav ref={navRef} className="site-nav fixed top-0 left-0 right-0 h-16 z-30 shadow-sm bg-gradient-to-r from-brand-50 via-brand-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 dark:border-gray-700">
            <div className="max-w-[var(--max-width)] mx-auto px-0 h-16 flex items-center w-full">
              <div className="mr-4">
                <div className="site-title">
                  <a href="/" onClick={(e)=>{e.preventDefault(); if(onNavigate) onNavigate('/');}} className="no-underline text-inherit cursor-pointer">
                    <h1 className="text-2xl sm:text-3xl font-extrabold m-0">PressCentra</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">A hub of small projects.</p>
                  </a>
                </div>
              </div>
            <div className="ml-auto flex items-center gap-3">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <button onClick={openDrawer} aria-label="Open menu" className="p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            </div>
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
              <a href="/" onClick={(e)=>{ e.preventDefault(); navAndClose('/'); }} className="text-blue-600 dark:text-brand-200">Home</a>
              <a href="/about" onClick={(e)=>{ e.preventDefault(); navAndClose('/about'); }} className="text-blue-600 dark:text-brand-200">About</a>
              <a href="/projects/deal-finder" onClick={(e)=>{ e.preventDefault(); navAndClose('/projects/deal-finder'); }} className="text-gray-700 dark:text-gray-200">Deal Finder</a>
              <a href="/projects/resume-tweak" onClick={(e)=>{ e.preventDefault(); navAndClose('/projects/resume-tweak'); }} className="text-gray-700 dark:text-gray-200">Resume Tweak</a>
            </nav>
          </aside>
        </div>
      </>
    );
}
