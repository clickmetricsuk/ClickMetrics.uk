import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How much do you charge?',
    answer: 'Retainer starts at £500 per month for accounts spending £1,000-£2,500 monthly. Pricing scales with ad spend and complexity. No long-term contracts. No setup fees. You can leave with 30 days notice if we\'re not delivering.',
  },
  {
    question: 'Who is this for?',
    answer: 'Business owners and directors already spending £1,000+ per month on Google Ads who are frustrated with poor results, wasted budget, or lack of accountability. This is not for startups testing the waters or businesses looking for the cheapest option.',
  },
  {
    question: 'What happens after I submit?',
    answer: 'We review your application within 48 hours. If it looks like a fit, we\'ll schedule a 30-minute call to audit your current setup and discuss whether we can help. No pressure. No hard sell. If we don\'t think we can improve your results, we\'ll tell you.',
  },
  {
    question: 'How long until I see results?',
    answer: 'Most clients see measurable improvements within 30-60 days. We focus on quick wins first — pausing waste, fixing obvious errors, improving targeting. Longer-term optimization (testing, scaling, new campaigns) builds from there. If your account is fundamentally broken, we\'ll tell you upfront what\'s realistic.',
  },
  {
    question: 'Do I keep control of my Google Ads account?',
    answer: 'Yes. You own the account, we manage it. You have full access at all times. We work inside your existing account — you\'re never locked in or dependent on us. If you leave, everything stays with you. No agency-owned accounts, no proprietary dashboards you lose access to.',
  },
  {
    question: 'What if my budget is outside your range?',
    answer: 'If you\'re spending under £1,000/month, Google Ads may not be viable yet — the platform needs volume to learn and optimize. If you\'re spending £10,000+/month, we can absolutely help, and pricing adjusts based on account complexity and the level of support required.',
  },
  {
    question: 'How do I know if Google Ads will work for my business?',
    answer: 'That\'s what the strategy review is for. We\'ll look at your current data, your market, your offer, and your margins — and tell you honestly whether Google Ads makes sense. If your product has no search demand, terrible margins, or unrealistic expectations, we\'ll tell you. We only take on clients we believe we can help.',
  },
  {
    question: 'What makes you different from other agencies?',
    answer: 'No BS. No long-term contracts. No inflated promises. We don\'t take on clients we can\'t help. We give you direct access to the person managing your account — no account managers, no junior staff. You get clear reporting, honest feedback, and accountability. If we\'re not delivering, you can leave. Most agencies won\'t offer that.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-jet-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 tracking-tight leading-heading mb-12 text-center">
          Common questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-graphite-600 bg-jet-900"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-jet-800 transition-colors"
              >
                <span className="font-semibold text-silver-100 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-silver-400 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-silver-200 leading-body">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-12 text-center">
          <a
            href="#apply"
            className="inline-block bg-silver-100 text-jet-950 px-8 py-4 font-semibold tracking-tight hover:bg-silver-200 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
