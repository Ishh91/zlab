/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `company` (text, nullable) — submitter's company name
  - `service` (text, nullable) — which service they're interested in
  - `budget` (text, nullable) — estimated budget range
  - `message` (text, not null) — the project description / inquiry
  - `status` (text, not null, default 'new') — tracking status for internal use
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public can submit inquiries).
- No SELECT/UPDATE/DELETE for anon or authenticated — submissions are
  managed server-side only, protecting submitters' data.

3. Notes
- This is a marketing-site contact form with no sign-in screen, so the
  anon-key client must be able to insert. Reads are intentionally blocked
  at the database level so submitted inquiries are not exposed publicly.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  budget text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);
