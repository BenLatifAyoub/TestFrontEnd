'use client';

import Link from 'next/link';
import { UploadCloudIcon, BoldIcon, ItalicIcon, UnderlineIcon, ListIcon, SparklesIcon, ChevronDown } from 'lucide-react';

interface ReviewEmailDraftProps {
  onBack: () => void;
}

const ReviewEmailDraft: React.FC<ReviewEmailDraftProps> = ({ onBack }) => {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg">
      <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px] flex flex-col">
        {/* Card Header */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">4. Review Email Draft</h2>
          <p className="text-gray-600 mt-1">Cheerful has drafted an email for you. Feel free to edit as you please.</p>
        </div>

        {/* Card Body (Scrollable) */}
        <div className="flex-grow mt-6 space-y-4 overflow-y-auto pr-4">
          <div>
            <label className="text-sm font-medium text-gray-700">To</label>
            <div className="mt-2 flex items-center justify-center text-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
              <UploadCloudIcon className="w-6 h-6 text-gray-500 mr-2" />
              <span className="text-sm font-semibold text-blue-600 cursor-pointer">Click to upload CSV of Recipients</span>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject Line</label>
            <input 
              type="text" 
              id="subject"
              defaultValue="Hey {name}, a gift from Yeti for just you"
              className="mt-2 w-full p-2.5 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email Body</label>
            <div className="mt-2 border border-gray-300 rounded-lg">
              <div className="p-2 border-b border-gray-300 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded hover:bg-gray-200"><BoldIcon className="w-4 h-4"/></button>
                  <button className="p-2 rounded hover:bg-gray-200"><ItalicIcon className="w-4 h-4"/></button>
                  <button className="p-2 rounded hover:bg-gray-200"><UnderlineIcon className="w-4 h-4"/></button>
                  <button className="p-2 rounded hover:bg-gray-200"><ListIcon className="w-4 h-4"/></button>
                   <button className="flex items-center gap-1 p-2 rounded hover:bg-gray-200 text-sm"># Merge Tags <ChevronDown className="w-4 h-4" /></button>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1.5 rounded-lg hover:bg-purple-200">
                  <SparklesIcon className="w-4 h-4" />
                  Cheerify
                </button>
              </div>
              <textarea
                rows={5} // Adjusted rows to better fit within the fixed height
                className="w-full p-4 outline-none resize-none"
                defaultValue={`Hi {name},\n\nI've been really enjoying your content on {channel_name} and your honest gear reviews. Your authentic approach and the way you connect with your audience is exactly why I'm reaching out.`}
              />
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-auto pt-6 flex justify-between items-center">
          <button onClick={onBack} className="px-10 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">Back</button>
          <Link href="/">
              <button className="px-10 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg shadow-sm hover:opacity-90">
                  Launch!
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewEmailDraft;