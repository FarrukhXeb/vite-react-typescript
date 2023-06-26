import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <section className="layout">
      <aside className="right-panel">
        <main>{children}</main>
      </aside>
    </section>
  );
}

export default AuthLayout;
