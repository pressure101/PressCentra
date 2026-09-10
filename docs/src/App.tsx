import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';
import Loudmouth from './pages/Loudmouth.tsx';
import Hero from './pages/Hero.tsx';
import Projects from './pages/Projects.tsx';

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
        </Routes>
      </div>
    </BrowserRouter>
  );

}
