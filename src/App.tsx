import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import About from '@/pages/About';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <ul className="flex gap-3">
        <li>
          <Link className="text-lg font-semibold text-blue-400" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-lg font-semibold text-blue-400" to="/about">
            About
          </Link>
        </li>
      </ul>
      <App />
    </BrowserRouter>
  );
}
