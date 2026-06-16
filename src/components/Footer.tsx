import { Link } from 'react-router-dom';

interface FooterProps {
  variant?: 'full' | 'simplified';
}

export function Footer({ variant = 'full' }: FooterProps) {
  if (variant === 'simplified') {
    return (
      <footer className="bg-jet-900 border-t border-graphite-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-silver-400 text-sm">
              &copy; {new Date().getFullYear()} Click Metrics Ltd. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo(0, 0)}
                className="text-silver-400 text-sm hover:text-silver-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                onClick={() => window.scrollTo(0, 0)}
                className="text-silver-400 text-sm hover:text-silver-100 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-jet-900 border-t border-graphite-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-silver-100">Click Metrics Ltd</h3>
            <p className="text-silver-400 text-sm leading-relaxed">
              Transparent, performance-based Google Ads management for businesses spending £1,000+ per month.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-silver-100">Contact</h3>
            <div className="space-y-2 text-silver-400 text-sm">
              <p>Phone: 077385 30261</p>
              <p>Email: michael@clickmetrics.uk</p>
              <p>
                <a
                  href="http://www.clickmetrics.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-silver-100 transition-colors"
                >
                  www.clickmetrics.uk
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-silver-100">Legal</h3>
            <div className="space-y-2">
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo(0, 0)}
                className="block text-silver-400 text-sm hover:text-silver-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                onClick={() => window.scrollTo(0, 0)}
                className="block text-silver-400 text-sm hover:text-silver-100 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-graphite-600 text-center text-silver-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Click Metrics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
