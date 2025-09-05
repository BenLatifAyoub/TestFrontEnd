import { SparklesIcon, InfoIcon, PencilIcon, Trash2Icon } from 'lucide-react';

interface ReviewCampaignInfoProps {
  onBack: () => void;
  onNext: () => void;
}

const campaignRules = [
  "This campaign is strictly for gifting; no monetary compensation will be provided without prior payment. Inform the influencer that this opportunity is for gifting only and paid promotions are not being considered at this time.",
  "Only one new Yeti Cooler will be sent per influencer.",
  "If the influencer provides their full postal address, do not repeat the address back in your response.",
  "Confirm the influencer's interest before requesting their shipping details."
];

const ReviewCampaignInfo: React.FC<ReviewCampaignInfoProps> = ({ onBack, onNext }) => {
  return (
    // 1. Gradient border wrapper
    <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg">
      {/* 2. Fixed dimensions and flexbox column layout */}
      <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px] flex flex-col">
        
        {/* Card Header */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">2. Review Campaign Information</h2>
          <p className="text-gray-600 mt-1">We've pulled product info and campaign rules from your files. Review and edit if needed!</p>
        </div>
        
        {/* 3. Scrollable Main Content Area */}
        <div className="flex-grow mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-4">
          {/* Left Column: Product Info */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Product Name</label>
              <p className="mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg">YETI GlacierX 55</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Product Description</label>
              <p className="mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm leading-relaxed">
                Experience unmatched cooling performance with the YETI Tundra 65 Cooler. Built with military-grade construction and up to 3 inches of PermaFrost™ insulation, this premium cooler keeps ice frozen for days, not hours. The rotomolded construction creates an incredibly durable shell that can withstand drops, falls, and whatever adventure throws at it.
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Key Features</label>
              <ul className="mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm space-y-2 list-disc list-inside">
                  <li>Keeps ice up to 4-6 days in normal conditions</li>
                  <li>Bear-proof certified and virtually indestructible</li>
                  <li>Holds up to 54 cans with recommended 2:1 ice-to-can ratio</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Campaign Rules */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Campaign Rules</h3>
              <button className="flex items-center gap-2 text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg hover:bg-purple-100">
                <SparklesIcon className="w-4 h-4" />
                Regenerate with AI
              </button>
            </div>
            {campaignRules.map((rule, index) => (
               <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-start gap-3 text-sm">
                  <InfoIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="flex-grow">{rule}</p>
                  <div className="flex gap-1">
                      <button className="p-1 text-gray-500 hover:text-blue-600"><PencilIcon className="w-4 h-4"/></button>
                      <button className="p-1 text-gray-500 hover:text-red-600"><Trash2Icon className="w-4 h-4"/></button>
                  </div>
               </div>
            ))}
            <button className="w-full text-center py-2.5 border-2 border-dashed border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Add Rule
            </button>
          </div>
        </div>

        {/* 4. Footer with larger buttons, anchored to bottom */}
        <div className="mt-auto pt-6 flex justify-between items-center">
          <button onClick={onBack} className="px-10 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">Back</button>
          <button onClick={onNext} className="px-10 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-sm hover:bg-gray-800">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCampaignInfo;