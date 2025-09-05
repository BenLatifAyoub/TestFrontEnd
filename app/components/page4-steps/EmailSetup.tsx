'use client';

import { useState } from 'react';
import { SearchIcon, XIcon, BotIcon } from 'lucide-react';

interface EmailSetupProps {
  onBack: () => void;
  onNext: () => void;
}

const EmailSetup: React.FC<EmailSetupProps> = ({ onBack, onNext }) => {
  const [provider, setProvider] = useState('cheerful');
  const [accounts, setAccounts] = useState(['sarah.marketing@brightwave.co', 'john.sales@revotech.com']);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg">
      <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px] flex flex-col">
        {/* Card Header */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">4. Email Setup</h2>
          <p className="text-gray-600 mt-1">Configure your email provider, accounts, and recipients to launch your campaign.</p>
        </div>

        {/* Card Body */}
        <div className="flex-grow mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              onClick={() => setProvider('cheerful')}
              className={`p-4 border rounded-lg cursor-pointer ${provider === 'cheerful' ? 'bg-gray-100 border-gray-900' : 'border-gray-200'}`}
            >
              <div className="flex items-center">
                <input type="radio" name="provider" checked={provider === 'cheerful'} readOnly className="h-4 w-4 text-black border-gray-300 focus:ring-black" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800">Cheerful (Recommended)</h3>
                  <p className="text-sm text-gray-500">Our email systems with automatic optimization</p>
                </div>
              </div>
            </div>
            <div 
              onClick={() => setProvider('other')}
              className={`p-4 border rounded-lg cursor-pointer ${provider === 'other' ? 'bg-gray-100 border-gray-900' : 'border-gray-200'}`}
            >
              <div className="flex items-center">
                <input type="radio" name="provider" checked={provider === 'other'} readOnly className="h-4 w-4 text-black border-gray-300 focus:ring-black" />
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-800">Other external provider</h3>
                  <p className="text-sm text-gray-500">providers like Instantly, etc. Cheerful will handle replies only.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Add Connect Sending Accounts</label>
            <div className="mt-2 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2 items-center w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg">
                {accounts.map(acc => (
                  <div key={acc} className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded-md flex items-center gap-1">
                    {acc}
                    <button className="text-gray-500 hover:text-black"><XIcon className="w-3 h-3"/></button>
                  </div>
                ))}
                <input type="text" className="flex-grow outline-none bg-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-auto flex justify-between items-center">
          <button onClick={onBack} className="px-10 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">Back</button>
          <button onClick={onNext} className="px-10 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-sm hover:bg-gray-800 flex items-center gap-2">
            <BotIcon className="w-4 h-4" />
            Generate Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSetup;