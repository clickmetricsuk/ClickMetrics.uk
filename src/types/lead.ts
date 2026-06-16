export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  monthly_ad_spend: string;
  biggest_frustration: string;
  ready_to_invest: string;
  message: string;
}

export const AD_SPEND_OPTIONS = [
  { value: 'less-than-1000', label: 'Less than £1,000' },
  { value: '1000-2500', label: '£1,000 - £2,500' },
  { value: '2500-5000', label: '£2,500 - £5,000' },
  { value: '5000-10000', label: '£5,000 - £10,000' },
  { value: '10000+', label: '£10,000+' },
];

export const FRUSTRATION_OPTIONS = [
  { value: 'poor-quality-leads', label: 'Poor quality leads' },
  { value: 'wasted-spend', label: 'Wasted spend with no results' },
  { value: 'no-clarity', label: 'No clarity on what\'s working' },
  { value: 'no-accountability', label: 'Agency lacks accountability' },
  { value: 'not-improving', label: 'Results not improving over time' },
];

export const INVESTMENT_READINESS_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'not-sure', label: 'Not sure' },
];
