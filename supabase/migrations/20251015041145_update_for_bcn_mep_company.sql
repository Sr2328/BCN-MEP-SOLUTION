/*
  # Update Database Schema for BCN MEP Company

  ## Overview
  Updates the existing schema to support MEP (Mechanical, Electrical & Plumbing) company structure with electrical and plumbing service categories, work orders, and customer logos.

  ## Changes Made

  ### 1. Add service_category field to services table
  - Adds category field to differentiate between "Electrical" and "Plumbing" services
  - Updates existing services to use proper categories

  ### 2. Add core_values table
  - Stores company core values with icons
  - Fields: id, title, description, icon_name, order_index

  ### 3. Add facilities table
  - Stores infrastructure and human resources information
  - Fields: id, category (Infrastructure/Human Resources), title, description, items (jsonb array)

  ### 4. Add work_orders table
  - Enhanced project tracking with work order details
  - Fields: project_id, order_number, work_type, completion_status, document_url

  ### 5. Add activity_areas table
  - Stores different areas of activity/project types
  - Fields: id, title, description, icon_name

  ## Security
  - All new tables have RLS enabled
  - Public read access for display data
  - No public write access
*/

-- Add service_category to services if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'services' AND column_name = 'service_category'
  ) THEN
    ALTER TABLE services ADD COLUMN service_category text DEFAULT 'General';
  END IF;
END $$;

-- Create core_values table
CREATE TABLE IF NOT EXISTS core_values (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create facilities table
CREATE TABLE IF NOT EXISTS facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  items jsonb DEFAULT '[]'::jsonb,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create work_orders table
CREATE TABLE IF NOT EXISTS work_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  order_number text NOT NULL,
  work_type text NOT NULL,
  completion_status text DEFAULT 'Completed',
  document_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create activity_areas table
CREATE TABLE IF NOT EXISTS activity_areas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE core_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE work_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_areas ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Public can view core values"
  ON core_values FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view facilities"
  ON facilities FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view work orders"
  ON work_orders FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view activity areas"
  ON activity_areas FOR SELECT
  TO anon
  USING (true);

-- Insert BCN MEP core values
INSERT INTO core_values (title, description, icon_name, order_index)
VALUES
  ('Knowledge', 'Expertise in integrated MEPF solutions with cutting-edge technology', 'GraduationCap', 1),
  ('Leadership', 'Leading the industry with innovative MEP design and execution', 'Crown', 2),
  ('Supervision', 'Rigorous quality control and project oversight', 'Eye', 3),
  ('Acceptability', 'Client-focused solutions meeting highest standards', 'CheckCircle2', 4),
  ('Novelty', 'Innovative approaches to complex MEP challenges', 'Lightbulb', 5),
  ('Honesty', 'Transparent communication and ethical practices', 'Shield', 6),
  ('Agility', 'Rapid response and flexible project execution', 'Zap', 7)
ON CONFLICT DO NOTHING;

-- Insert facilities data
INSERT INTO facilities (category, title, description, items, order_index)
VALUES
  (
    'Infrastructure',
    'World-Class Infrastructure',
    'Our state-of-the-art facilities enable us to deliver exceptional MEP solutions',
    '["Modern design office with advanced CAD/BIM software", "Fully equipped workshop for fabrication and testing", "Material storage and inventory management systems", "Quality control laboratories", "Project management and coordination centers"]'::jsonb,
    1
  ),
  (
    'Human Resources',
    'Expert Team',
    'Our skilled professionals bring decades of combined MEP experience',
    '["Certified electrical engineers and designers", "Licensed plumbing and HVAC specialists", "Experienced project managers and supervisors", "Skilled technicians and field workers", "Safety officers and quality inspectors"]'::jsonb,
    2
  )
ON CONFLICT DO NOTHING;

-- Insert activity areas
INSERT INTO activity_areas (title, description, icon_name, order_index)
VALUES
  ('Industrial Projects', 'Complete MEP solutions for manufacturing facilities, warehouses, and industrial complexes', 'Factory', 1),
  ('Commercial Buildings', 'Office towers, shopping centers, and hospitality projects with integrated systems', 'Building2', 2),
  ('Residential Complexes', 'High-rise apartments and gated communities with modern utilities', 'Home', 3),
  ('Healthcare Facilities', 'Hospitals and medical centers with specialized MEP requirements', 'Heart', 4),
  ('Educational Institutions', 'Schools, colleges, and universities with sustainable infrastructure', 'BookOpen', 5),
  ('Infrastructure Projects', 'Water treatment plants, substations, and utility installations', 'Wrench', 6)
ON CONFLICT DO NOTHING;

-- Update existing services to use MEP categories
UPDATE services 
SET service_category = 'Electrical', 
    category = 'Electrical'
WHERE title LIKE '%Development%' OR title LIKE '%App%' OR title LIKE '%Marketing%';

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_service_category ON services(service_category);
CREATE INDEX IF NOT EXISTS idx_work_orders_project ON work_orders(project_id);
CREATE INDEX IF NOT EXISTS idx_core_values_order ON core_values(order_index);
CREATE INDEX IF NOT EXISTS idx_facilities_category ON facilities(category);
CREATE INDEX IF NOT EXISTS idx_activity_areas_order ON activity_areas(order_index);