/*
  # Add monthly ad spend field to quiz_leads table

  1. Changes
    - Add `q6_monthly_ad_spend` column to `quiz_leads` table
      - Type: text
      - Used to store the monthly Google Ads spend range selected by the lead

  2. Notes
    - This field captures budget information before personal details
    - No default value as this is a required quiz question
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_leads' AND column_name = 'q6_monthly_ad_spend'
  ) THEN
    ALTER TABLE quiz_leads ADD COLUMN q6_monthly_ad_spend text;
  END IF;
END $$;
