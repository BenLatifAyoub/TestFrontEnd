'use client';

import { useState } from 'react';
import MainLayout from './components/MainLayout';
import StaticProgressIndicator from './components/ProgressIndicator';
import ChooseCampaignType from './components/steps/ChooseCampaignType';
import CampaignGoal from './components/steps/CampaignGoal';

export default function Page1() {
  const [subStep, setSubStep] = useState(1);

  const handleNextSubStep = () => setSubStep(2);
  const handleBackSubStep = () => setSubStep(1);

  return (
    <MainLayout>
      {/* UPDATED: Set max-w-4xl for 896px width */}
      <div className="max-w-4xl flex mt-32 h-full">
        <StaticProgressIndicator currentStep={1} />
        
        <div className="w-full">
          {subStep === 1 && <CampaignGoal onNext={handleNextSubStep} />}
          {subStep === 2 && <ChooseCampaignType onBack={handleBackSubStep} />}

          {/* UPDATED: Set mt-32 for the 120px gap */}
          <div className="bg-white p-8 rounded-2xl shadow-sm mt-32 opacity-50">
            <h2 className="text-2xl font-semibold text-gray-900">2. Campaign Information</h2>
            <p className="text-gray-600 mt-1">Upload a file or paste a link — we’ll pull the product and campaign details for you.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}