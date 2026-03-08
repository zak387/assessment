-- Run this in your Supabase SQL editor

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assessments table
CREATE TABLE IF NOT EXISTS assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  answers JSONB NOT NULL,
  scores JSONB NOT NULL,
  total_score INTEGER NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('high_risk', 'moderate', 'low_risk')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anon insert on leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anon insert on assessments"
  ON assessments FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous reads (for results page)
CREATE POLICY "Allow anon select on assessments"
  ON assessments FOR SELECT
  TO anon
  USING (true);
