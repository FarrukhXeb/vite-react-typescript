import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const linkClassName = 'text-lg font-semibold text-blue-400 dark:text-white';
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="shadow-xl p-2 bg-white dark:bg-zinc-500 md:pl-[200px]">
        <nav className="flex justify-between">
          <ul className="flex gap-3">
            <li>
              <Link className={linkClassName} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={linkClassName} to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="flex gap-3">
            <button
              className="text-black dark:text-white"
              type="button"
              onClick={() => setDarkMode((prevState: boolean) => !prevState)}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <ul className="flex gap-3">
              <li>
                <Link className={linkClassName} to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className={linkClassName} to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="bg-white shadow-xl dark:bg-zinc-500 md:min-w-[200px]">
          Sidebar
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
