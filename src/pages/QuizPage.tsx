import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { QUIZ_QUESTIONS, QuizAnswers, QuizContactInfo } from '../types/quiz';
import { Footer } from '../components/Footer';

type QuizStep = 'quiz' | 'bridge' | 'contact';

export function QuizPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<QuizStep>('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [contactInfo, setContactInfo] = useState<QuizContactInfo>({
    first_name: '',
    email: '',
    phone: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length + 1; // 6 quiz questions + 1 contact form
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'quiz_started',
        quiz_name: 'google_ads_qualification',
      });
    }
  }, []);

  const handleAnswerSelect = (questionId: keyof QuizAnswers, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'quiz_question_answered',
        quiz_name: 'google_ads_qualification',
        question_number: currentQuestionIndex + 1,
        question_id: questionId,
        answer: value,
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setStep('contact');
      }
    }, 300);
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const submission = {
        ...answers,
        ...contactInfo,
      };

      // Fire-and-forget — don't let CORS or network issues block form submission
      fetch('https://n8n.srv1126577.hstgr.cloud/webhook/7cfa0f75-8955-4520-a6cb-db1d1013f556', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
        mode: 'no-cors',
      }).catch((err) => console.error('n8n webhook error:', err));

      const { error: supabaseError } = await supabase.from('quiz_leads').insert([submission]);
      if (supabaseError) throw supabaseError;

      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'quiz_completed',
          quiz_name: 'google_ads_qualification',
          submission_data: submission,
        });
      }

      navigate('/thank-you-fb');
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
      console.error('Quiz submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'contact') {
    const totalQuestions = QUIZ_QUESTIONS.length + 1;
    const contactProgress = 95;

    return (
      <div className="min-h-screen bg-white flex flex-col">
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <img src="/image copy.png" alt="Click Metrics" className="h-10" />
            <a href="tel:07738530261" className="text-gray-700 hover:text-black font-medium">
              077385 30261
            </a>
          </div>
        </header>
        <div className="flex-grow">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="mb-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-600 shadow-sm">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center leading-tight">
                What Does Professional Google Ads Management Look Like?
              </h1>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-600">
                  Question {totalQuestions} of {totalQuestions}
                </span>
                <span className="text-sm text-gray-500">{Math.round(contactProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-black h-full transition-all duration-500 ease-out"
                  style={{ width: `${contactProgress}%` }}
                />
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-black leading-tight">
                Let's connect to discuss your Google Ads management
              </h2>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="first_name" className="block text-gray-900 mb-2 font-medium">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    required
                    value={contactInfo.first_name}
                    onChange={(e) => setContactInfo({ ...contactInfo, first_name: e.target.value })}
                    className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-900 mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    required
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                    placeholder="+44 7700 000000"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-gray-900 mb-2 font-medium">
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    required
                    value={contactInfo.website}
                    onChange={(e) => setContactInfo({ ...contactInfo, website: e.target.value })}
                    className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                    placeholder="https://www.example.com"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer variant="simplified" />
      </div>
    );
  }

  if (step === 'bridge') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <img src="/image copy.png" alt="Click Metrics" className="h-10" />
            <a href="tel:07738530261" className="text-gray-700 hover:text-black font-medium">
              077385 30261
            </a>
          </div>
        </header>
        <div className="flex-grow">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                  Most businesses don't need more clicks.<br />
                  They need better management.
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Based on your answers, there may be a gap between how your Google Ads are currently being managed and what professional management typically looks like at higher spend levels.
                  </p>
                  <p>
                    A short review conversation can help clarify:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>What's being done vs what should be done</li>
                    <li>Where spend is commonly wasted in accounts like yours</li>
                    <li>Whether improved management would realistically change outcomes</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setStep('contact')}
                className="w-full bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <Footer variant="simplified" />
      </div>
    );
  }

  if (step === 'quiz') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <img src="/image copy.png" alt="Click Metrics" className="h-10" />
            <a href="tel:07738530261" className="text-gray-700 hover:text-black font-medium">
              077385 30261
            </a>
          </div>
        </header>
        <div className="flex-grow">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="mb-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-600 shadow-sm">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center leading-tight">
                What Does Professional Google Ads Management Look Like?
              </h1>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
                <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-black h-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-black leading-tight">
                {currentQuestionIndex + 1}. {currentQuestion.question}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerSelect(currentQuestion.id, option.value)}
                    className="w-full text-left px-5 py-4 border-2 border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-200 text-lg text-gray-900 font-medium group"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer variant="simplified" />
      </div>
    );
  }

  return null;
}
