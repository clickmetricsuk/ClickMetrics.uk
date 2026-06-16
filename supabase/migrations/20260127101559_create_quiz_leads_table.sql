/*
  # Create quiz_leads table for Google Ads qualification quiz

  1. New Tables
    - `quiz_leads`
      - `id` (uuid, primary key) - Unique identifier
      - `q1_ads_handling` (text) - How Google Ads is currently handled
      - `q2_campaign_structure` (text) - Campaign structure understanding
      - `q3_biggest_frustration` (text) - Main frustration with Google Ads
      - `q4_manager_involvement` (text) - Current manager involvement level
      - `q5_impact_of_proper_management` (text) - Expected impact of proper management
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone number
      - `status` (text, default: 'new') - Lead status
      - `created_at` (timestamptz, default: now()) - Submission timestamp
      - `updated_at` (timestamptz, default: now()) - Last update timestamp

  2. Security
    - Enable RLS on `quiz_leads` table
    - Add policy for service role to insert quiz submissions
*/

CREATE TABLE IF NOT EXISTS quiz_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  q1_ads_handling text NOT NULL,
  q2_campaign_structure text NOT NULL,
  q3_biggest_frustration text NOT NULL,
  q4_manager_involvement text NOT NULL,
  q5_impact_of_proper_management text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE quiz_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for quiz submissions"
  ON quiz_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);