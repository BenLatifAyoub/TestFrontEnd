import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
}

const StaticProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  const totalSteps = 4;

  return (
    <div className="w-24 flex flex-col items-center mr-8 pt-2 shrink-0">
      <div className="font-semibold text-sm mb-2">{currentStep}/{totalSteps}</div>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <React.Fragment key={step}>
            <div className="relative flex items-center justify-center">
              {isActive && (
                <div className="w-8 h-8 rounded-full bg-black border-2 border-black flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              )}
              {isCompleted && (
                <div className="w-4 h-4 rounded-full flex items-center justify-center bg-black">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
              )}
              {!isActive && !isCompleted && (
                 <div className="w-4 h-4 rounded-full border-2 border-gray-300 bg-white"></div>
              )}
            </div>

            {/* Connecting Line - UPDATED */}
            {index < totalSteps - 1 && (
              <div className={`w-0.5 h-16 ${isCompleted ? 'bg-black' : 'bg-gray-300'}`}></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StaticProgressIndicator;