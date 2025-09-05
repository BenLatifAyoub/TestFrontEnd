'use client';

import { useState, ChangeEvent } from 'react';
import { SearchIcon, LinkIcon, UploadCloudIcon, FileTextIcon, Trash2Icon } from 'lucide-react';

// Define a type for our file state
interface UploadingFile {
  id: number;
  name: string;
  progress: number;
  status: 'uploading' | 'complete' | 'error';
}

interface AddCampaignInfoProps {
  onBack: () => void;
  onNext: () => void;
}

const products = [
  { id: 1, name: 'Yeti Cooler', created: '8/25/25' },
  { id: 2, name: 'Yeti Cooler', created: '8/25/25' },
  { id: 3, name: 'Yeti Cooler', created: '8/25/25' },
];

const AddCampaignInfo: React.FC<AddCampaignInfoProps> = ({ onBack, onNext }) => {
  const [activeTab, setActiveTab] = useState('new');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [files, setFiles] = useState<UploadingFile[]>([]);

  // Function to simulate file upload
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const newFile: UploadingFile = {
      id: Date.now(),
      name: selectedFile.name,
      progress: 0,
      status: 'uploading',
    };
    setFiles(prev => [...prev, newFile]);

    const interval = setInterval(() => {
      setFiles(prev => prev.map(f => (f.id === newFile.id && f.progress < 100) ? { ...f, progress: f.progress + 20 } : f));
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setFiles(prev => prev.map(f => (f.id === newFile.id) ? { ...f, progress: 100, status: 'complete' } : f));
    }, 1800);
  };

  const handleDeleteFile = (id: number) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };
  
  const isScanDisabled = (activeTab === 'existing' && !selectedProductId) || (activeTab === 'new' && files.length === 0);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 p-0.5 shadow-lg">
      <div className="bg-white p-8 rounded-[22px] h-[541px] w-[891px] flex flex-col">
        {/* Card Header */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">2. Add Campaign Information</h2>
          <p className="text-gray-600 mt-1">Upload a file or paste a link — we’ll pull the product and campaign details for you.</p>
        </div>

        {/* Card Body (Scrollable) */}
        <div className="flex-grow mt-6 overflow-y-auto pr-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg flex text-sm">
              <button onClick={() => setActiveTab('new')} className={`px-4 py-1.5 rounded-md ${activeTab === 'new' ? 'bg-white shadow' : 'text-gray-600'}`}>New Product</button>
              <button onClick={() => setActiveTab('existing')} className={`px-4 py-1.5 rounded-md ${activeTab === 'existing' ? 'bg-white shadow' : 'text-gray-600'}`}>Existing Products</button>
            </div>
          </div>

          {activeTab === 'new' ? (
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Product URL (optional)</label>
                <div className="mt-1 relative">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="Paste link" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">File Upload</label>
                <div className="mt-1 relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-gray-400 transition-colors">
                  <UploadCloudIcon className="w-8 h-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Drop in your product/campaign info</p>
                  <p className="font-semibold text-blue-600 mt-1 cursor-pointer">Click to upload</p>
                  <p className="text-xs text-gray-500 mt-1">PDF/CSV</p>
                  <input type="file" onChange={handleFileChange} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                </div>
              </div>
              <div className="space-y-3">
                {files.map(file => (
                  <div key={file.id} className="border border-gray-200 rounded-lg p-3 flex items-center gap-4">
                    <FileTextIcon className="w-6 h-6 text-gray-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{file.name}</p>
                      {file.status === 'uploading' && (
                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full" style={{ width: `${file.progress}%` }}></div>
                        </div>
                      )}
                    </div>
                    {file.status === 'complete' && (
                      <button onClick={() => handleDeleteFile(file.id)} className="p-1 text-gray-500 hover:text-red-600">
                        <Trash2Icon className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Summer Yeti Cooler..." className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="mt-4 space-y-2">
                {products.map((product) => (
                  <div key={product.id} onClick={() => setSelectedProductId(product.id)} className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${selectedProductId === product.id ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <span className="font-medium text-gray-800">{product.name}</span>
                    <span className="text-sm text-gray-500">Created {product.created}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="mt-auto pt-6 flex justify-between items-center">
          <button onClick={onBack} className="px-10 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">Back</button>
          <button onClick={onNext} disabled={isScanDisabled} className="px-10 py-2.5 text-sm font-semibold text-white bg-black rounded-lg shadow-sm hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed">Scan</button>
        </div>
      </div>
    </div>
  );
};

export default AddCampaignInfo;