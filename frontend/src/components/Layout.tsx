import React from 'react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 relative">
    <div className="px-6 sm:px-10 md:px-20 lg:px-28">
      {children}
    </div>
  </div>
  );
};

export default Layout;
