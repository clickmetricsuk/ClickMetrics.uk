declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'media-id'?: string;
        seo?: string;
        aspect?: string;
        autoplay?: string;
        muted?: string;
      }, HTMLElement>;
    }
  }
}

export function VideoSection() {
  return (
    <section className="bg-jet-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 tracking-tight leading-heading">
              How to tell if your Google Ads are quietly bleeding money
            </h2>
            <p className="text-xl text-silver-300 max-w-3xl mx-auto leading-body">
              Watch this breakdown of the most common leaks we find in accounts spending £1,000+ per month.
            </p>
          </div>

          <div className="relative w-full bg-jet-900 border border-graphite-600 overflow-hidden">
            <wistia-player
              media-id="54ltlxwu8q"
              seo="false"
              aspect="0.5625"
              autoplay="true"
              muted="true"
              style={{ display: 'block', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
