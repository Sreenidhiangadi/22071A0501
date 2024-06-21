import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          {/* Navigation links */}
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Layout;
