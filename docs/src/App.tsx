import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav.tsx';
import About from './About.tsx';
import Blog from './Blog.tsx';
import Loudmouth from './Loudmouth.tsx';
import Hero from './Hero.tsx';
import ProjectDealFinder from './projects/ProjectDealFinder.jsx';
import ProjectResumeTweak from './projects/ProjectResumeTweak.jsx';
import Projects from './Projects.jsx';

export default function App() {
  return (
    <BrowserRouter basename={"/"}>
      <div className="bg-black min-h-screen text-white select-none selection:bg-emerald-500 selection:text-black">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
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
