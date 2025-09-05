import { ArrowLeftIcon, MoreHorizontalIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Untitled Campaign</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;