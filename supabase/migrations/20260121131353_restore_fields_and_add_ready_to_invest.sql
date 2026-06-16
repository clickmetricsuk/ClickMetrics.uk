/*
  # Restore Full Lead Form Fields and Add Investment Readiness

  1. Changes
    - Make `business_name` required again
    - Make `monthly_ad_spend` required again
    - Make `biggest_frustration` required again
    - Make `website` required
    - Add `ready_to_invest` field (text, NOT NULL)
    
  2. Rationale
    - Restoring qualifying questions to better screen leads
    - Adding investment readiness as a key qualification metric
*/

DO $$
BEGIN
  -- Make website NOT NULL if it isn't already (set default empty string for existing records)
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'website' AND is_nullable = 'YES'
  ) THEN
    UPDATE leads SET website = '' WHERE website IS NULL;
    ALTER TABLE leads ALTER COLUMN website SET NOT NULL;
  END IF;

  -- Make business_name NOT NULL if it isn't already (set default empty string for existing records)
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'business_name' AND is_nullable = 'YES'
  ) THEN
    UPDATE leads SET business_name = '' WHERE business_name IS NULL;
    ALTER TABLE leads ALTER COLUMN business_name SET NOT NULL;
  END IF;

  -- Make monthly_ad_spend NOT NULL if it isn't already (set default empty string for existing records)
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'monthly_ad_spend' AND is_nullable = 'YES'
  ) THEN
    UPDATE leads SET monthly_ad_spend = '' WHERE monthly_ad_spend IS NULL;
    ALTER TABLE leads ALTER COLUMN monthly_ad_spend SET NOT NULL;
  END IF;

  -- Make biggest_frustration NOT NULL if it isn't already (set default empty string for existing records)
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'biggest_frustration' AND is_nullable = 'YES'
  ) THEN
    UPDATE leads SET biggest_frustration = '' WHERE biggest_frustration IS NULL;
    ALTER TABLE leads ALTER COLUMN biggest_frustration SET NOT NULL;
  END IF;

  -- Add ready_to_invest column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'ready_to_invest'
  ) THEN
    ALTER TABLE leads ADD COLUMN ready_to_invest text NOT NULL DEFAULT 'not-sure';
  END IF;
END $$;
