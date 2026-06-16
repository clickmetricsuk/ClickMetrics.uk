export function MechanismSection() {
  return (
    <section className="bg-jet-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-graphite-600">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 tracking-tight leading-heading">
            A different approach
          </h2>

          <div className="space-y-6 text-silver-200 text-lg leading-body">
            <p>
              We start by auditing what's actually happening in your account. Not what the dashboard says. What's really driving cost and what's driving revenue.
            </p>

            <p>
              Then we build structure around decision-making. Every pound spent has a clear purpose. Every campaign has a hypothesis. Every week has a review where we kill what doesn't work.
            </p>

            <p>
              No long-term contracts. No hiding behind vanity metrics. Clear accountability from day one.
            </p>

            <p>
              This is not about adding more campaigns or more keywords. This is about identifying what's broken, fixing it, and then systematically improving what's left.
            </p>
          </div>

          <div className="pt-8 text-center">
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
