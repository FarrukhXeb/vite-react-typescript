import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <section className="layout">
      <aside className="right-panel">
        <main>
          <Outlet />
        </main>
      </aside>
    </section>
  );
}

export default AuthLayout;
