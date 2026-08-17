import React, { useEffect, useState } from 'react';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import ProjectDealFinder from './projects/ProjectDealFinder.jsx';
import ProjectResumeTweak from './projects/ProjectResumeTweak.jsx';
import ParticleBg from './components/ParticleBg.jsx';

function resolvePath() {
  const p = window.location.pathname || '/';
  if (p === '/' || p === '') return '/';
  if (p.startsWith('/about')) return '/about';
  if (p.startsWith('/projects/deal-finder')) return '/projects/deal-finder';
  if (p.startsWith('/projects/resume-tweak')) return '/projects/resume-tweak';
  return '/';
}

export default function App() {
  const [path, setPath] = useState(resolvePath());

  useEffect(() => {
    const onPop = () => setPath(resolvePath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  function navigate(href) {
    history.pushState({}, '', href);
    setPath(resolvePath());
  }

  return (
    <div className="site">
      <div className="absolute inset-0 -z-10">
        <ParticleBg />
      </div>
      <Nav onNavigate={navigate} />
      <main className="site-main">
        {path === '/' && <Home onNavigate={navigate} />}
        {path === '/about' && <About />}
        {path === '/projects/deal-finder' && <ProjectDealFinder />}
        {path === '/projects/resume-tweak' && <ProjectResumeTweak />}
      </main>
    </div>
  );
}
