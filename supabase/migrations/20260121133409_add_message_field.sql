/*
  # Add Message Field to Leads Table

  1. Changes
    - Add `message` column to the leads table (text, nullable)
    - This allows leads to provide additional notes or context with their application
    
  2. Notes
    - Field is optional (nullable) to allow existing records to remain valid
*/

DO $$
BEGIN
  -- Add message column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'message'
  ) THEN
    ALTER TABLE leads ADD COLUMN message text;
  END IF;
END $$;