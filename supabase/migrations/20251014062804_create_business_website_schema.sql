/*
  # Business Website Database Schema

  ## Overview
  Complete database schema for a modern business website with services, projects, testimonials, bookings, and contact management.

  ## New Tables

  ### 1. services
  - `id` (uuid, primary key)
  - `title` (text) - Service name
  - `description` (text) - Short description
  - `full_description` (text) - Detailed description for service details page
  - `category` (text) - Service category for filtering
  - `price` (numeric) - Price in INR
  - `price_unit` (text) - e.g., "per project", "per month"
  - `image_url` (text) - Main service image
  - `gallery_images` (jsonb) - Array of additional images/videos
  - `features` (jsonb) - Array of service highlights
  - `is_featured` (boolean) - Display on homepage
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. projects
  - `id` (uuid, primary key)
  - `title` (text) - Project name
  - `description` (text) - Project description
  - `category` (text) - Project category for filtering
  - `image_url` (text) - Main project image
  - `gallery_images` (jsonb) - Array of project images
  - `client_name` (text) - Client name (optional)
  - `completion_date` (date) - Project completion date
  - `technologies` (jsonb) - Array of technologies used
  - `is_featured` (boolean) - Display on homepage
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz)

  ### 3. testimonials
  - `id` (uuid, primary key)
  - `client_name` (text) - Client name
  - `client_position` (text) - Client position/company
  - `content` (text) - Testimonial content
  - `rating` (integer) - Rating out of 5
  - `avatar_url` (text) - Client avatar
  - `is_featured` (boolean) - Display on homepage
  - `created_at` (timestamptz)

  ### 4. team_members
  - `id` (uuid, primary key)
  - `name` (text) - Team member name
  - `position` (text) - Job title
  - `bio` (text) - Short bio
  - `image_url` (text) - Profile image
  - `social_links` (jsonb) - Social media links
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz)

  ### 5. bookings
  - `id` (uuid, primary key)
  - `service_id` (uuid, foreign key) - References services table
  - `name` (text) - Client name
  - `email` (text) - Client email
  - `phone` (text) - Client phone
  - `message` (text) - Additional requirements
  - `status` (text) - "pending", "confirmed", "completed", "cancelled"
  - `created_at` (timestamptz)

  ### 6. contact_inquiries
  - `id` (uuid, primary key)
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `phone` (text) - Sender phone
  - `subject` (text) - Inquiry subject
  - `message` (text) - Inquiry message
  - `status` (text) - "new", "read", "responded"
  - `created_at` (timestamptz)

  ### 7. newsletter_subscribers
  - `id` (uuid, primary key)
  - `email` (text, unique) - Subscriber email
  - `is_active` (boolean) - Subscription status
  - `subscribed_at` (timestamptz)

  ### 8. service_reviews
  - `id` (uuid, primary key)
  - `service_id` (uuid, foreign key) - References services table
  - `client_name` (text) - Reviewer name
  - `rating` (integer) - Rating out of 5
  - `comment` (text) - Review content
  - `created_at` (timestamptz)

  ### 9. business_stats
  - `id` (uuid, primary key)
  - `stat_key` (text, unique) - e.g., "projects_completed", "happy_clients"
  - `stat_value` (text) - Stat value
  - `stat_label` (text) - Display label
  - `order_index` (integer) - Display order

  ### 10. partners
  - `id` (uuid, primary key)
  - `name` (text) - Partner name
  - `logo_url` (text) - Partner logo
  - `website_url` (text) - Partner website
  - `order_index` (integer) - Display order

  ## Security
  - Enable RLS on all tables
  - Public read access for display data (services, projects, testimonials, team, stats, partners)
  - Authenticated insert for bookings, inquiries, and subscriptions
  - No public write access to prevent spam
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  full_description text NOT NULL,
  category text NOT NULL,
  price numeric NOT NULL,
  price_unit text DEFAULT 'per project',
  image_url text NOT NULL,
  gallery_images jsonb DEFAULT '[]'::jsonb,
  features jsonb DEFAULT '[]'::jsonb,
  is_featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  gallery_images jsonb DEFAULT '[]'::jsonb,
  client_name text DEFAULT '',
  completion_date date,
  technologies jsonb DEFAULT '[]'::jsonb,
  is_featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_position text NOT NULL,
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  avatar_url text DEFAULT '',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  bio text DEFAULT '',
  image_url text NOT NULL,
  social_links jsonb DEFAULT '{}'::jsonb,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  is_active boolean DEFAULT true,
  subscribed_at timestamptz DEFAULT now()
);

-- Create service_reviews table
CREATE TABLE IF NOT EXISTS service_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id uuid REFERENCES services(id) ON DELETE CASCADE,
  client_name text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create business_stats table
CREATE TABLE IF NOT EXISTS business_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stat_key text UNIQUE NOT NULL,
  stat_value text NOT NULL,
  stat_label text NOT NULL,
  order_index integer DEFAULT 0
);

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  website_url text DEFAULT '',
  order_index integer DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Public can view services"
  ON services FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view team members"
  ON team_members FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view service reviews"
  ON service_reviews FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view business stats"
  ON business_stats FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view partners"
  ON partners FOR SELECT
  TO anon
  USING (true);

-- RLS Policies for public insert (bookings, inquiries, subscriptions)
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can create contact inquiries"
  ON contact_inquiries FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(is_featured);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_bookings_service ON bookings(service_id);
CREATE INDEX IF NOT EXISTS idx_reviews_service ON service_reviews(service_id);