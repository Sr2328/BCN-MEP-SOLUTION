import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Service = {
  id: string;
  title: string;
  description: string;
  full_description: string;
  category: string;
  service_category: string;
  price: number;
  price_unit: string;
  image_url: string;
  gallery_images: string[];
  features: string[];
  is_featured: boolean;
  order_index: number;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  gallery_images: string[];
  client_name: string;
  completion_date: string;
  technologies: string[];
  is_featured: boolean;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_position: string;
  content: string;
  rating: number;
  avatar_url: string;
  is_featured: boolean;
};

export type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio: string;
  image_url: string;
  social_links: Record<string, string>;
  order_index: number;
};

export type BusinessStat = {
  id: string;
  stat_key: string;
  stat_value: string;
  stat_label: string;
  order_index: number;
};

export type Partner = {
  id: string;
  name: string;
  logo_url: string;
  website_url: string;
};

export type CoreValue = {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  order_index: number;
};

export type Facility = {
  id: string;
  category: string;
  title: string;
  description: string;
  items: string[];
  order_index: number;
};

export type ActivityArea = {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  order_index: number;
};

export type WorkOrder = {
  id: string;
  project_id: string;
  order_number: string;
  work_type: string;
  completion_status: string;
  document_url: string;
};
