'use client';

import { useState } from 'react';
import Link from 'next/link';
import MainLayout from '../components/MainLayout';
import StaticProgressIndicator from '../components/ProgressIndicator';
import { SparklesIcon, PencilIcon, Trash2Icon, InfoIcon } from 'lucide-react';

// A simple component for the Google Sheets icon
const GoogleSheetIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0H5C4.46957 0 3.96086 0.210714 3.58579 0.585786C3.21071 0.960859 3 1.46957 3 2V22C3 22.5304 3.21071 23.0391 3.58579 23.4142C3.96086 23.7893 4.46957 24 5 24H19C19.5304 24 20.0391 23.7893 20.4142 23.4142C20.7893 23.0391 21 22.5304 21 22V8L14 0Z" fill="#E9F5EC"/>
        <path d="M14 0V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H21L14 0Z" fill="#B8DBC6"/>
        <path d="M15.5 11H8.5C8.22386 11 8 11.2239 8 11.5V18.5C8 18.7761 8.22386 19 8.5 19H15.5C15.7761 19 16 18.7761 16 18.5V11.5C16 11.2239 15.7761 11 15.5 11Z" fill="#1E854A"/>
        <path d="M8 12H16V14H8V12Z" fill="white"/>
    </svg>
);

// A simple component for the Shopify icon
const ShopifyIcon = () => (
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.47 4.1C18.18 3.82 17.81 3.65 17.42 3.65H6.58C5.55 3.65 4.75 4.45 4.75 5.48V6.37H17.42C17.94 6.37 18.39 6.82 18.39 7.34V13.88C18.39 14.7 17.7 15.39 16.88 15.39H15.11C15.51 14.99 15.74 14.45 15.74 13.84C15.74 12.62 14.76 11.64 13.54 11.64C12.32 11.64 11.34 12.62 11.34 13.84C11.34 14.45 11.57 14.99 11.97 15.39H7.2V7.4C7.2 6.83 6.74 6.37 6.17 6.37H3V5.48C3 4.96 3.45 4.51 3.97 4.51H4.75V4.1H3.97C3.15 4.1 2.46 4.79 2.46 5.61V17.94C2.46 18.76 3.15 19.45 3.97 19.45H16.88C18.06 19.45 19.03 18.48 19.03 17.26V7.34C19.26 7.34 20.08 7.31 20.6 6.8C21.12 6.28 21.13 5.46 20.61 4.94L18.47 4.1Z" fill="#95BF46"/>
    </svg>
);


const trackingRules = [
    "In \"Email\", verify the influencer's email from the reply is on the row; add if missing. If asked about payment, respond gifting only.",
    "In \"Name\", confirm the influencer's name from the reply; update if blank or mismatched.",
    "In \"Channel Name\", fill in the creator's channel name if provided in the reply."
];

export default function Page3() {
  const [isGoogleSheetEnabled, setIsGoogleSheetEnabled] = useState(false);

  return (
    <MainLayout>
      <div className="max-w-4xl flex mt-32 h-full">
        <StaticProgressIndicator currentStep={3} />
        
        <div className="w-full">
          {/* Active Card: Add Integrations */}
          <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg">
            <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px] flex flex-col">

              {/* Card Header */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">3. Add Integrations</h2>
                <p className="text-gray-600 mt-1">Connect your tools to save time and reduce manual work.</p>
              </div>

              {/* Card Body (Scrollable) */}
              <div className="flex-grow mt-6 space-y-4 overflow-y-auto pr-2">
                  {/* Google Sheet Integration */}
                  <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                              <GoogleSheetIcon />
                              <div>
                                  <h3 className="font-semibold text-gray-800">Google Sheet</h3>
                                  <p className="text-sm text-gray-500">Automatically track campaign results in your Google Sheet.</p>
                              </div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" checked={isGoogleSheetEnabled} onChange={() => setIsGoogleSheetEnabled(!isGoogleSheetEnabled)} className="sr-only peer" />
                              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                          </label>
                      </div>

                      {/* Conditional content for Google Sheet */}
                      {isGoogleSheetEnabled && (
                          <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                              <input 
                                  type="text"
                                  placeholder="https://docs.google.com/spreadsheets/d/..."
                                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              />
                              <p className="text-xs text-gray-500">Tip: Set your sheet permissions to 'Anyone with the link can edit'.</p>
                              
                              <div className="flex justify-between items-center">
                                  <h4 className="font-semibold text-gray-700">What to Track:</h4>
                                  <button className="flex items-center gap-2 text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg hover:bg-purple-100">
                                      <SparklesIcon className="w-4 h-4" />
                                      Regenerate with AI
                                  </button>
                              </div>
                              
                               <div className="space-y-2">
                                  {trackingRules.map((rule, index) => (
                                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-start gap-3 text-sm">
                                          <InfoIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                          <p className="flex-grow">{rule}</p>
                                          <div className="flex gap-1">
                                              <button className="p-1 text-gray-500 hover:text-blue-600"><PencilIcon className="w-4 h-4"/></button>
                                              <button className="p-1 text-gray-500 hover:text-red-600"><Trash2Icon className="w-4 h-4"/></button>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )}
                  </div>

                  {/* Shopify Integration (Disabled) */}
                   <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center opacity-50 cursor-not-allowed">
                      <div className="flex items-center gap-4">
                          <ShopifyIcon />
                          <div>
                              <h3 className="font-semibold text-gray-800">Shopify</h3>
                              <p className="text-sm text-gray-500">Coming soon</p>
                          </div>
                      </div>
                      <div className="w-11 h-6 bg-gray-200 rounded-full relative"><div className="absolute top-0.5 left-[2px] bg-white border-gray-300 border rounded-full h-5 w-5"></div></div>
                  </div>
              </div>

              {/* Card Footer */}
              <div className="mt-auto pt-6 flex justify-between items-center">
                <Link href="/page2">
                  <button className="px-10 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">Back</button>
                </Link>
                <Link href="/page4">
                  <button className="px-10 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-sm hover:bg-gray-800">Next</button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Faded Upcoming Step Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm mt-32 opacity-50">
              <h2 className="text-2xl font-semibold text-gray-900">4. Email Draft</h2>
              <p className="text-gray-600 mt-1">Cheerful has drafted an email for you. Feel free to edit as you please.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}