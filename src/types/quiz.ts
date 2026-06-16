export interface QuizAnswers {
  q1_ads_handling: string;
  q2_campaign_structure: string;
  q3_biggest_frustration: string;
  q4_manager_involvement: string;
  q5_impact_of_proper_management: string;
  q6_monthly_ad_spend: string;
}

export interface QuizContactInfo {
  first_name: string;
  email: string;
  phone: string;
  website: string;
}

export interface QuizSubmission extends QuizAnswers, QuizContactInfo {}

export interface QuizQuestion {
  id: keyof QuizAnswers;
  question: string;
  options: Array<{ value: string; label: string }>;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1_ads_handling',
    question: 'How is your Google Ads currently handled?',
    options: [
      { value: 'managed-internally', label: 'Managed internally' },
      { value: 'managed-by-agency', label: 'Managed by an agency or freelancer' },
      { value: 'previously-managed', label: 'Previously managed, currently paused' },
      { value: 'not-running', label: 'Not running Google Ads right now' },
    ],
  },
  {
    id: 'q2_campaign_structure',
    question: 'What best describes how your campaigns are structured?',
    options: [
      { value: 'clearly-structured', label: 'Clearly structured by intent and profitability' },
      { value: 'some-structure', label: 'Some structure, but mostly broad' },
      { value: 'mostly-automated', label: 'Mostly automated / smart campaigns' },
      { value: 'dont-know', label: "I honestly don't know" },
    ],
  },
  {
    id: 'q3_biggest_frustration',
    question: "What's your biggest frustration with Google Ads right now?",
    options: [
      { value: 'wasted-spend', label: 'Wasted spend with little accountability' },
      { value: 'low-quality-leads', label: 'Leads coming in but not high quality' },
      { value: 'no-visibility', label: "No clear visibility into what's working" },
      { value: 'inconsistent-results', label: 'Inconsistent results month to month' },
      { value: 'not-running-ads', label: 'Not currently running ads' },
    ],
  },
  {
    id: 'q4_manager_involvement',
    question: 'How involved is your current Google Ads manager?',
    options: [
      { value: 'proactive', label: 'Proactive with strategy and recommendations' },
      { value: 'reactive', label: 'Mostly reactive / reporting only' },
      { value: 'barely-hear', label: 'Barely hear from them' },
      { value: 'no-manager', label: 'No manager' },
    ],
  },
  {
    id: 'q5_impact_of_proper_management',
    question: 'If your Google Ads were managed properly, what would that change?',
    options: [
      { value: 'marginal-improvement', label: 'Marginal improvement, nothing major' },
      { value: 'predictable-leads', label: 'More predictable lead flow' },
      { value: 'confidence-to-scale', label: 'Confidence to increase ad spend' },
      { value: 'scale-business', label: 'Ability to scale the business' },
    ],
  },
  {
    id: 'q6_monthly_ad_spend',
    question: 'What is your monthly Google Ads spend?',
    options: [
      { value: 'less-than-1000', label: 'Less than £1,000 PM' },
      { value: '1000-2000', label: '£1,000 - £2,000 PM' },
      { value: '2000-5000', label: '£2,000 - £5,000 PM' },
      { value: '5000-10000', label: '£5,000 - £10,000 PM' },
      { value: '10000-plus', label: '£10,000+ PM' },
    ],
  },
];
