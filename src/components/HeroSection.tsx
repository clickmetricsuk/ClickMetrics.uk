declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'media-id'?: string;
        seo?: string;
        aspect?: string;
      }, HTMLElement>;
    }
  }
}

export function HeroSection() {
  return (
    <section className="bg-jet-950 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[3fr_1.25fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-silver-100 tracking-tighter leading-heading -mt-4">
                Your Google Ads are bleeding money. You just don't see where.
              </h1>
              <p className="text-xl text-silver-300 leading-body">
                For business owners spending £1,000+ monthly who know their campaigns should perform better but can't get clarity or accountability from their current setup.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-silver-200 font-medium">In the 15 minute strategy review, you'll leave with:</p>
              <ul className="space-y-3 text-silver-200">
                <li className="flex items-start gap-3">
                  <span className="text-silver-400 mt-1">•</span>
                  <span>A clear breakdown of where spend is being wasted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-silver-400 mt-1">•</span>
                  <span>What to pause, fix, or double down on immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-silver-400 mt-1">•</span>
                  <span>Whether your account can realistically be profitable — or not</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 text-center">
              <a
                href="#apply"
                className="inline-block bg-silver-100 text-jet-950 px-8 py-4 font-semibold tracking-tight hover:bg-silver-200 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-6">
            <div className="relative w-full bg-jet-900 border border-graphite-600 overflow-hidden">
              <wistia-player
                media-id="54ltlxwu8q"
                seo="false"
                aspect="0.5625"
                style={{ display: 'block', width: '100%' }}
              />
            </div>

            <div className="text-center">
              <a
                href="#apply"
                className="inline-block bg-silver-100 text-jet-950 px-8 py-4 font-semibold tracking-tight hover:bg-silver-200 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
