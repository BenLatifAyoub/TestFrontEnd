'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../components/MainLayout';
import StaticProgressIndicator from '../components/ProgressIndicator';
import AddCampaignInfo from '../components/page2-steps/AddCampaignInfo';
import GatheringInfo from '../components/page2-steps/GatheringInfo';
import ReviewCampaignInfo from '../components/page2-steps/ReviewCampaignInfo';

export default function Page2() {
  const [subStep, setSubStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (subStep < 3) {
      setSubStep(prev => prev + 1);
    } else {
      router.push('/page3');
    }
  };

  const handleBack = () => {
    if (subStep > 1) {
      setSubStep(prev => prev - 2);
    } else {
      router.push('/');
    }
  };

  const handleGatheringFinished = () => {
    setSubStep(3);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl flex mt-32 h-full">
        <StaticProgressIndicator currentStep={2} />
        <div className="w-full">
          {/* This is the active card area */}
          <div>
            {subStep === 1 && <AddCampaignInfo onBack={handleBack} onNext={handleNext} />}
            {subStep === 2 && <GatheringInfo onFinished={handleGatheringFinished} />}
            {subStep === 3 && <ReviewCampaignInfo onBack={handleBack} onNext={handleNext} />}
            {subStep === 4 && <div className="p-8 bg-white rounded-lg">Sub-Step 4</div>}
          </div>
          
          {/* Faded Upcoming Step Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm mt-32 opacity-50">
            <h2 className="text-2xl font-semibold text-gray-900">3. Add Integrations</h2>
            <p className="text-gray-600 mt-1">Connect your tools to save time and reduce manual work</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}