import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        {/* UPDATED: Increased horizontal padding to match Figma spec */}
        <main className="flex-1 overflow-y-auto px-48 py-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;