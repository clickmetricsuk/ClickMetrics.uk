import { useEffect } from 'react';
import { Footer } from '../components/Footer';

declare global {
  interface Window {
    dataLayer: any[];
    fbq?: (command: string, event: string, params?: any) => void;
  }
}

export function ThankYouFB() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const scrollTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'thank_you_page_view',
      'page': {
        'url': window.location.href,
        'title': 'Thank You - Book Call',
        'path': '/thank-you-fb'
      }
    });
    console.log('[ThankYouFB] Pushed thank_you_page_view to dataLayer');

    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      clearTimeout(scrollTimeout);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <img src="/image copy.png" alt="Click Metrics" className="h-10" />
        </div>
      </header>
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-600">
                Complete
              </span>
              <span className="text-sm text-gray-500">100%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-500 ease-out"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-black">
                Book Your 30-Minute Review Call
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Select a time that works best for you
              </p>
            </div>
            <div className="tidycal-embed" data-path="michaelnguyen/30"></div>
          </div>
        </div>
      </div>
      <Footer variant="simplified" />
    </div>
  );
}
