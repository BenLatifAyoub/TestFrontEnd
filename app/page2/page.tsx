import Link from 'next/link';

export default function Page2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Step 2: Page 2</h1>
        <div className="flex gap-4">
          <Link href="/">
            <button className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75">
              Back
            </button>
          </Link>
          <Link href="/page3">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}