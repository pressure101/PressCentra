import React, { useEffect, useState } from 'react';

export default function Nav({ onNavigate }) {
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <nav className="site-nav shadow-sm bg-gradient-to-r from-brand-50 via-brand-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 dark:border-gray-700">
      <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="brand flex items-center gap-3 text-gray-900 dark:text-gray-100">
        <span className="inline-block w-8 h-8 rounded-full bg-brand-600 dark:bg-brand-500 text-white flex items-center justify-center text-sm">P</span>
        <span>PressCentra</span>
      </a>
      <div className="nav-links">
        <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="nav-link text-blue-600 dark:text-brand-200">Home</a>
        <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('/about'); }} className="nav-link text-blue-600 dark:text-brand-200">About</a>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
