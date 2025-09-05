'use client';

import { useEffect } from 'react';
import { BotIcon } from 'lucide-react';

interface GeneratingEmailProps {
  onFinished: () => void;
}

const GeneratingEmail: React.FC<GeneratingEmailProps> = ({ onFinished }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 5000); // Simulate 5-second generation time
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg">
      <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px] flex flex-col items-center justify-center text-center">
        <div className="relative flex items-center justify-center w-24 h-24">
          <div className="absolute w-full h-full bg-purple-100 rounded-full animate-ping opacity-50"></div>
          <div className="absolute w-20 h-20 bg-orange-100 rounded-full animate-ping opacity-50 delay-1000"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-purple-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
            <BotIcon className="w-10 h-10 text-white" />
          </div>
        </div>
        <p className="mt-8 text-lg font-semibold text-gray-800">Generating your Email</p>
        <div className="mt-4 flex space-x-2">
          <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default GeneratingEmail;