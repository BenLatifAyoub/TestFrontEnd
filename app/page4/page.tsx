'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../components/MainLayout';
import StaticProgressIndicator from '../components/ProgressIndicator';
import EmailSetup from '../components/page4-steps/EmailSetup';
import GeneratingEmail from '../components/page4-steps/GeneratingEmail';
import ReviewEmailDraft from '../components/page4-steps/ReviewEmailDraft';

export default function Page4() {
  const [subStep, setSubStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (subStep < 3) {
      setSubStep(prev => prev + 1);
    } else {
      router.push('/');
    }
  };

  const handleBack = () => {
    if (subStep > 1) {
      setSubStep(prev => prev - 1);
    } else {
      router.push('/page3');
    }
  };

  const handleGenerationFinished = () => {
    setSubStep(3);
  };

  return (
    <MainLayout>
      <div className="max-w-4xl flex mt-32 h-full">
        <StaticProgressIndicator currentStep={4} />
        <div className="w-full">
          {/* Active card content for Page 4 */}
          <div>
            {subStep === 1 && <EmailSetup onBack={handleBack} onNext={handleNext} />}
            {subStep === 2 && <GeneratingEmail onFinished={handleGenerationFinished} />}
            {subStep === 3 && <ReviewEmailDraft onBack={handleBack} />}
          </div>
          
          {/* No faded card needed on the final page */}
        </div>
      </div>
    </MainLayout>
  );
}