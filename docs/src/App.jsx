import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Loudmouth from './Loudmouth.jsx';
import Hero from './Hero.jsx';
import ProjectDealFinder from './projects/ProjectDealFinder.jsx';
import ProjectResumeTweak from './projects/ProjectResumeTweak.jsx';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="bg-black min-h-screen text-white select-none selection:bg-emerald-500 selection:text-black">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/loudmouth" element={<Loudmouth />} />
          <Route path="/projects/deal-finder" element={<ProjectDealFinder />} />
          <Route path="/projects/resume-tweak" element={<ProjectResumeTweak />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

}
