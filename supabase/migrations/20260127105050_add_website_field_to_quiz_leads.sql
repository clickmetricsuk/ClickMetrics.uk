/*
  # Add website field to quiz_leads table

  1. Changes
    - Add `website` (text) column to `quiz_leads` table for storing contact website information

  2. Notes
    - Field is nullable to support existing records
    - New submissions will require this field
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_leads' AND column_name = 'website'
  ) THEN
    ALTER TABLE quiz_leads ADD COLUMN website text;
  END IF;
END $$;