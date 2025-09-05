import { MegaphoneIcon } from 'lucide-react';

interface CampaignGoalProps {
    onNext: () => void;
}

const CampaignGoal: React.FC<CampaignGoalProps> = ({ onNext }) => {
  return (
    // UPDATED: Added gradient border wrapper
    <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg ">
      <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px]">
        <h2 className="text-2xl font-semibold text-gray-900">1. Campaign Type</h2>
        <p className="text-gray-600 mt-1">Select the best one that fits your goal.</p>
        
        <div className="mt-9 w-full  bg-white items-center justify-center">
          <div className="flex items-start gap-4">
            <MegaphoneIcon className="w-6 h-6 text-gray-700 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Other</h3>
              <p className="text-sm text-gray-500">For all other types of creator collaboration campaigns.</p>
            </div>
          </div>
          <textarea
            className="mt-4 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            rows={5}
            placeholder="Tell us what your goal is for this campaign..."
          ></textarea>
        </div>

        <div className="mt-33 flex justify-between items-center">
          <button className="px-10 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
            Back
          </button>
          <button onClick={onNext} className="px-10 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-sm hover:bg-gray-800">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignGoal;