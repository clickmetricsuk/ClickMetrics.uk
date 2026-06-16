import { useState, FormEvent, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { LeadFormData, AD_SPEND_OPTIONS, FRUSTRATION_OPTIONS, INVESTMENT_READINESS_OPTIONS } from '../types/lead';
import { CheckCircle2, Loader2, ArrowRight, ArrowLeft } from 'lucide-react';

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    website: '',
    monthly_ad_spend: '',
    biggest_frustration: '',
    ready_to_invest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (currentStep > 1 && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  useEffect(() => {
    if (isSubmitted && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isSubmitted]);

  const totalSteps = 3;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await fetch('https://n8n.srv1126577.hstgr.cloud/webhook/7cfa0f75-8955-4520-a6cb-db1d1013f556', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      await supabase
        .from('leads')
        .insert([formData]);

      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'form_submission',
          form_name: 'lead_application',
          form_data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            website: formData.website,
            monthly_ad_spend: formData.monthly_ad_spend,
            biggest_frustration: formData.biggest_frustration,
            ready_to_invest: formData.ready_to_invest,
            message: formData.message,
          }
        });
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);

      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'form_step_completed',
          form_name: 'lead_application',
          step_number: currentStep,
          next_step: nextStep,
        });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedStep1 = formData.name && formData.email && formData.phone;
  const canProceedStep2 = formData.website && formData.monthly_ad_spend && formData.biggest_frustration;
  const canSubmit = formData.ready_to_invest;

  if (isSubmitted) {
    return (
      <section ref={sectionRef} id="apply" className="bg-jet-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-graphite-600">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-silver-200 font-medium">Complete</span>
                <span className="text-silver-400 text-sm">100% complete</span>
              </div>
              <div className="w-full bg-jet-950 h-2 overflow-hidden">
                <div
                  className="bg-yellow-500 h-full transition-all duration-300 ease-in-out"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div className="text-center space-y-6 py-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-4 border-silver-100 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-silver-100" fill="currentColor" />
                </div>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 tracking-tight">
                Application received
              </h2>
              <p className="text-xl text-silver-300 leading-body max-w-xl mx-auto">
                We'll review your details and get back to you within 48 hours to discuss if this is a fit.
              </p>
              <p className="text-silver-400 text-lg">
                Check your inbox for confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="apply" className="bg-jet-900 py-20 px-4 sm:px-6 lg:px-8 border-y border-graphite-600">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-silver-300 leading-body">
              This is a short, practical review focused on identifying wasted spend and immediate next actions — not a sales pitch.
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-100 tracking-tight leading-heading">
              Apply for a strategy review - No Obligation
            </h2>
            <p className="text-xl text-silver-300 leading-body">
              We only work with businesses that meet our criteria. Complete this application to see if we're a fit.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-silver-200 font-medium">Step {currentStep} of {totalSteps}</span>
                <span className="text-silver-400 text-sm">{currentStep === totalSteps ? '95' : Math.round((currentStep / totalSteps) * 100)}% complete</span>
              </div>
              <div className="w-full bg-jet-950 h-2 overflow-hidden">
                <div
                  className="bg-yellow-500 h-full transition-all duration-300 ease-in-out"
                  style={{ width: `${currentStep === totalSteps ? 95 : (currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={currentStep === totalSteps ? handleSubmit : handleNext} className="space-y-6">
              {currentStep === 1 && (
                <>
                  <div>
                    <label htmlFor="name" className="block text-silver-200 mb-2 font-medium">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-silver-200 mb-2 font-medium">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors"
                      placeholder="john@acme.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-silver-200 mb-2 font-medium">
                      Phone number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors"
                      placeholder="+44 7700 000000"
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <label htmlFor="website" className="block text-silver-200 mb-2 font-medium">
                      Website address
                    </label>
                    <input
                      type="text"
                      id="website"
                      required
                      value={formData.website}
                      onChange={(e) => updateField('website', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors"
                      placeholder="https://www.example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="monthly_ad_spend" className="block text-silver-200 mb-2 font-medium">
                      Monthly Google Ads spend
                    </label>
                    <select
                      id="monthly_ad_spend"
                      required
                      value={formData.monthly_ad_spend}
                      onChange={(e) => updateField('monthly_ad_spend', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors"
                    >
                      <option value="">Select your monthly spend</option>
                      {AD_SPEND_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="biggest_frustration" className="block text-silver-200 mb-2 font-medium">
                      Biggest frustration with Google Ads
                    </label>
                    <select
                      id="biggest_frustration"
                      required
                      value={formData.biggest_frustration}
                      onChange={(e) => updateField('biggest_frustration', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors"
                    >
                      <option value="">Select your main frustration</option>
                      {FRUSTRATION_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div>
                    <label htmlFor="ready_to_invest" className="block text-silver-200 mb-2 font-medium">
                      Ready to invest in professional management?
                    </label>
                    <select
                      id="ready_to_invest"
                      required
                      value={formData.ready_to_invest}
                      onChange={(e) => updateField('ready_to_invest', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors"
                    >
                      <option value="">Select an option</option>
                      {INVESTMENT_READINESS_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-silver-200 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full bg-jet-950 border border-graphite-600 text-silver-100 px-4 py-3 focus:outline-none focus:border-silver-400 transition-colors resize-none"
                      placeholder="Any additional information you'd like to share..."
                      rows={4}
                    />
                  </div>
                </>
              )}

              {error && (
                <div className="bg-jet-950 border border-red-900 text-red-400 px-4 py-3">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-jet-950 border border-graphite-600 text-silver-100 px-8 py-4 font-semibold tracking-tight hover:border-silver-400 transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                )}

                <button
                  type="submit"
                  disabled={
                    (currentStep === 1 && !canProceedStep1) ||
                    (currentStep === 2 && !canProceedStep2) ||
                    (currentStep === 3 && (!canSubmit || isSubmitting))
                  }
                  className="flex-1 bg-yellow-500 text-jet-950 px-8 py-4 font-semibold tracking-tight hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {currentStep === totalSteps ? (
                    isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit application'
                    )
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {currentStep === totalSteps && (
                <p className="text-silver-400 text-sm text-center">
                  We'll review your application and respond within 48 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
