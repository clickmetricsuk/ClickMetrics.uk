/*
  # Fix quiz_leads RLS policy security issue

  1. Security Changes
    - Drop the existing overly permissive RLS policy on `quiz_leads` table
    - Create a new restrictive policy that validates required fields
    - Ensure all required fields (quiz answers, name, email, phone) are provided and not empty
    
  2. Policy Details
    - Policy name: "Allow valid public quiz submissions"
    - Applies to: INSERT operations for anonymous users
    - Validation: Checks that all required fields are present and not empty strings
    - Required fields: q1_ads_handling, q2_campaign_structure, q3_biggest_frustration, q4_manager_involvement, q5_impact_of_proper_management, name, email, phone
    
  3. Security Benefits
    - Prevents empty or incomplete submissions
    - Validates email format
    - Ensures data quality while maintaining public access
*/

-- Drop the existing insecure policy
DROP POLICY IF EXISTS "Allow public insert for quiz submissions" ON quiz_leads;

-- Create a new restrictive policy that validates required fields
CREATE POLICY "Allow valid public quiz submissions"
  ON quiz_leads
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure all quiz answers are provided and not empty
    q1_ads_handling IS NOT NULL AND length(trim(q1_ads_handling)) > 0 AND
    q2_campaign_structure IS NOT NULL AND length(trim(q2_campaign_structure)) > 0 AND
    q3_biggest_frustration IS NOT NULL AND length(trim(q3_biggest_frustration)) > 0 AND
    q4_manager_involvement IS NOT NULL AND length(trim(q4_manager_involvement)) > 0 AND
    q5_impact_of_proper_management IS NOT NULL AND length(trim(q5_impact_of_proper_management)) > 0 AND
    -- Ensure contact information is provided and not empty
    name IS NOT NULL AND length(trim(name)) > 0 AND
    email IS NOT NULL AND length(trim(email)) > 0 AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    phone IS NOT NULL AND length(trim(phone)) > 0
  );