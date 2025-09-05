import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import { PlusIcon, MailIcon, MessageSquareTextIcon, GitMergeIcon } from 'lucide-react';

// Custom component to render the BotIcon with a gradient stroke.
const GradientBotIcon = () => (
    <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#A855F7' }} /> {/* Fuchsia */}
        <stop offset="50%" style={{ stopColor: '#EC4899' }} /> {/* Pink */}
        <stop offset="100%" style={{ stopColor: '#F59E0B' }} /> {/* Orange/Yellow */}
      </linearGradient>
    </defs>
    <path d="M12 8V4H8" stroke="url(#iconGradient)" />
    <rect width="16" height="12" x="4" y="8" rx="2" stroke="url(#iconGradient)" />
    <path d="M2 14h2" stroke="url(#iconGradient)" />
    <path d="M20 14h2" stroke="url(#iconGradient)" />
    <path d="M15 13v2" stroke="url(#iconGradient)" />
    <path d="M9 13v2" stroke="url(#iconGradient)" />
    <path d="M9 18h6" stroke="url(#iconGradient)" />
  </svg>
);

const NavItem = ({ href, icon }: { href: string; icon: React.ReactNode; }) => (
  <Link href={href}>
    <div className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors duration-200">
      {icon}
    </div>
  </Link>
);

const Sidebar = () => {
  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-5">
      {/* 1. Gradient Logo */}
      <div className="w-10 h-10 flex items-center justify-center">
        <GradientBotIcon />
      </div>

      {/* 2. Primary "Add" Button */}
      <div className="my-5">
        <Link href="/">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white cursor-pointer hover:bg-gray-800 transition-colors duration-200">
            <PlusIcon className="h-7 w-7" />
          </div>
        </Link>
      </div>
      
      {/* 3. Secondary Navigation Icons */}
      <nav className="flex flex-col items-center space-y-1">
        <NavItem href="#" icon={<MailIcon className="h-6 w-6" />} />
        <NavItem href="#" icon={<MessageSquareTextIcon className="h-6 w-6" />} />
        <NavItem href="#" icon={<GitMergeIcon className="h-6 w-6" />} />
      </nav>
      
      {/* 4. User Avatar (UPDATED) */}
      <div className="mt-auto">
        <div className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 transition-all overflow-hidden">
          <Image
            src="/avatar.png" // The path is relative to the `public` folder
            alt="User Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 transition-all"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;