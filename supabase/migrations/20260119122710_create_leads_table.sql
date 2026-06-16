/*
  # Create Leads Management System

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Contact person's full name
      - `business_name` (text) - Name of the business
      - `monthly_ad_spend` (text) - Monthly Google Ads spend bracket
      - `biggest_frustration` (text) - Primary pain point with current ads
      - `email` (text) - Contact email address
      - `phone` (text, nullable) - Optional phone number
      - `status` (text) - Lead status (new, contacted, qualified, unqualified)
      - `created_at` (timestamptz) - Submission timestamp
      - `updated_at` (timestamptz) - Last update timestamp
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert leads (form submission)
    - Add policy for authenticated admin users to read all leads
    
  3. Important Notes
    - Form submissions are public (anon insert only)
    - Only authenticated users can view leads (admin access)
    - Phone field is optional
    - Default status is 'new' for incoming leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business_name text NOT NULL,
  monthly_ad_spend text NOT NULL,
  biggest_frustration text NOT NULL,
  email text NOT NULL,
  phone text,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);