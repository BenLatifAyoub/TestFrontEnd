'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GiftIcon, DollarSignIcon, MegaphoneIcon } from 'lucide-react';

// Card component can remain the same
const CampaignTypeCard = ({ icon, title, description, selected, onClick }: any) => (
  <div
    onClick={onClick}
    className={`p-6 border rounded-xl text-center cursor-pointer h-full flex flex-col justify-center items-center ${
      selected ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-400'
    }`}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="text-xs text-gray-500 mt-1">{description}</p>
  </div>
);

interface ChooseCampaignTypeProps {
    onBack: () => void;
}

const ChooseCampaignType: React.FC<ChooseCampaignTypeProps> = ({ onBack }) => {
  const [selectedType, setSelectedType] = useState<string>('Seeding/Gifting');

  return (
    // UPDATED: Added gradient border wrapper
    <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg">
      <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px]">
        <h2 className="text-2xl font-semibold text-gray-900">1. Choose Campaign Type</h2>
        <p className="text-gray-600 mt-1">Select the best one that fits your goal.</p>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <CampaignTypeCard
            icon={<GiftIcon className="w-8 h-8 text-gray-500" />}
            title="Seeding/Gifting"
            description="Send free products to creators in exchange for organic content."
            selected={selectedType === 'Seeding/Gifting'}
            onClick={() => setSelectedType('Seeding/Gifting')}
          />
          <CampaignTypeCard
            icon={<DollarSignIcon className="w-8 h-8 text-gray-500" />}
            title="Paid Promotion"
            description="Pay creators for guaranteed content and deliverables."
            selected={selectedType === 'Paid Promotion'}
            onClick={() => setSelectedType('Paid Promotion')}
          />
          <CampaignTypeCard
            icon={<MegaphoneIcon className="w-8 h-8 text-gray-500" />}
            title="Other"
            description="For all other types of creator collaboration campaigns."
            selected={selectedType === 'Other'}
            onClick={() => setSelectedType('Other')}
          />
        </div>

        <div className="mt-36 flex justify-between items-center">
          <button onClick={onBack} className="px-10 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
            Back
          </button>
          <Link href="/page2">
            <button className="px-10 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-sm hover:bg-gray-800">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseCampaignType;