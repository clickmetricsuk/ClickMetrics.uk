/*
  # Rename name column to first_name in quiz_leads table

  1. Changes
    - Rename `name` column to `first_name` in `quiz_leads` table
  
  2. Notes
    - This change updates the column name to better reflect that we're collecting first name rather than full name
    - Data is preserved during the rename operation
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quiz_leads' AND column_name = 'name'
  ) THEN
    ALTER TABLE quiz_leads RENAME COLUMN name TO first_name;
  END IF;
END $$;
