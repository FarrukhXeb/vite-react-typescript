import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import AuthLayout from './components/Layouts/AuthLayout';

const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const About = lazy(() => import('@/pages/About'));

export function App() {
  const mainLayoutWrapper = (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  );

  const authLayoutWarpper = (
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  );

  return (
    <Routes>
      {mainLayoutWrapper}
      {authLayoutWarpper}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  );
}
