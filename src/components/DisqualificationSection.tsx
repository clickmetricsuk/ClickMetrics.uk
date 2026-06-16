export function DisqualificationSection() {
  return (
    <section className="bg-jet-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-graphite-600">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 tracking-tight leading-heading">
            This is not for everyone
          </h2>

          <div className="space-y-6 text-silver-200 text-lg leading-body">
            <p>
              If you're spending under £1,000 per month on Google Ads, this is not a fit.
            </p>
            <p>
              If you're looking for the cheapest management option, this isn't it.
            </p>
            <p>
              This is for business owners who are already investing significantly in Google Ads and know the potential is there, but need someone who will take accountability for results rather than just run reports.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-silver-400 text-sm tracking-tight">
              Retainer starts at £500+ per month. No long-term contracts.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="#apply"
              className="inline-block bg-silver-100 text-jet-950 px-8 py-4 font-semibold tracking-tight hover:bg-silver-200 transition-colors"
            >
              Request a strategy review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
