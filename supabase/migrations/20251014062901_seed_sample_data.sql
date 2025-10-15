/*
  # Seed Sample Data for Business Website

  ## Overview
  Populates the database with sample data for services, projects, testimonials, team members, stats, and partners.

  ## Sample Data Includes
  - 6 Services across different categories
  - 6 Projects with various categories
  - 4 Testimonials
  - 4 Team members
  - 4 Business statistics
  - 4 Partner logos
  - 3 Service reviews
*/

-- Insert sample services
INSERT INTO services (title, description, full_description, category, price, price_unit, image_url, features, is_featured, order_index)
VALUES
  (
    'Web Development',
    'Custom responsive websites built with modern technologies',
    'We create stunning, responsive websites that work seamlessly across all devices. Our web development services include custom design, CMS integration, e-commerce solutions, and ongoing maintenance. We use the latest technologies like Next.js, React, and Tailwind CSS to deliver fast, secure, and scalable websites.',
    'Development',
    50000,
    'starting from',
    'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First Approach", "Custom CMS", "Analytics Integration"]'::jsonb,
    true,
    1
  ),
  (
    'Mobile App Development',
    'Native and cross-platform mobile applications',
    'Transform your ideas into powerful mobile applications. We develop both native iOS/Android apps and cross-platform solutions using React Native and Flutter. Our apps are user-friendly, performant, and designed to engage your audience effectively.',
    'Development',
    80000,
    'starting from',
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["iOS & Android", "Cross-Platform", "Push Notifications", "Offline Support", "App Store Optimization", "Cloud Integration"]'::jsonb,
    true,
    2
  ),
  (
    'Digital Marketing',
    'Grow your business with targeted digital marketing strategies',
    'Boost your online presence with our comprehensive digital marketing services. We offer SEO, social media marketing, content marketing, email campaigns, and PPC advertising. Our data-driven approach ensures maximum ROI and measurable results.',
    'Marketing',
    30000,
    'per month',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["SEO & SEM", "Social Media Marketing", "Content Strategy", "Email Campaigns", "Analytics & Reporting", "Brand Building"]'::jsonb,
    true,
    3
  ),
  (
    'UI/UX Design',
    'Beautiful and intuitive user interfaces',
    'Create memorable user experiences with our professional UI/UX design services. We focus on user research, wireframing, prototyping, and visual design to ensure your product is both beautiful and functional. Our designs are backed by usability testing and industry best practices.',
    'Design',
    40000,
    'per project',
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["User Research", "Wireframing", "Interactive Prototypes", "Visual Design", "Usability Testing", "Design Systems"]'::jsonb,
    false,
    4
  ),
  (
    'E-Commerce Solutions',
    'Complete online store setup and management',
    'Launch your online store with our comprehensive e-commerce solutions. We build custom e-commerce platforms with secure payment gateways, inventory management, order tracking, and customer management. Whether you need a simple online store or a complex marketplace, we have you covered.',
    'Development',
    70000,
    'starting from',
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Customer Dashboard", "Multi-Currency Support", "Analytics"]'::jsonb,
    false,
    5
  ),
  (
    'Cloud Solutions',
    'Scalable cloud infrastructure and deployment',
    'Migrate to the cloud or optimize your existing infrastructure with our cloud solutions. We provide cloud architecture design, migration services, DevOps automation, and ongoing support. We work with AWS, Google Cloud, and Azure to ensure your applications are secure, scalable, and cost-effective.',
    'Technology',
    60000,
    'starting from',
    'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["Cloud Architecture", "Migration Services", "DevOps Automation", "Security & Compliance", "Cost Optimization", "24/7 Support"]'::jsonb,
    false,
    6
  ) ON CONFLICT DO NOTHING;

-- Insert sample projects
INSERT INTO projects (title, description, category, image_url, client_name, completion_date, technologies, is_featured, order_index)
VALUES
  (
    'E-Commerce Platform for Fashion Brand',
    'Built a complete online shopping platform with payment integration, inventory management, and customer dashboard.',
    'E-Commerce',
    'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800',
    'StyleHub Fashion',
    '2024-08-15',
    '["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"]'::jsonb,
    true,
    1
  ),
  (
    'Healthcare Mobile App',
    'Developed a patient management app with appointment booking, telemedicine features, and health records.',
    'Mobile App',
    'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=800',
    'HealthCare Plus',
    '2024-07-20',
    '["React Native", "Node.js", "MongoDB", "WebRTC"]'::jsonb,
    true,
    2
  ),
  (
    'Real Estate Portal',
    'Created a property listing platform with advanced search, virtual tours, and agent management.',
    'Web Development',
    'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
    'PropertyFinder',
    '2024-06-10',
    '["Next.js", "Supabase", "Mapbox", "Cloudinary"]'::jsonb,
    true,
    3
  ),
  (
    'Restaurant Management System',
    'Built a comprehensive system for menu management, online ordering, and table reservations.',
    'Web Development',
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Foodie Delights',
    '2024-05-25',
    '["React", "Express", "PostgreSQL", "Stripe"]'::jsonb,
    false,
    4
  ),
  (
    'Educational Learning Platform',
    'Developed an online learning platform with video courses, quizzes, and progress tracking.',
    'E-Learning',
    'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=800',
    'EduTech Academy',
    '2024-09-01',
    '["Next.js", "AWS", "Video.js", "Stripe"]'::jsonb,
    false,
    5
  ),
  (
    'Fitness Tracking App',
    'Created a mobile app for workout tracking, nutrition logging, and fitness goals.',
    'Mobile App',
    'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
    'FitLife',
    '2024-04-18',
    '["Flutter", "Firebase", "HealthKit", "Google Fit"]'::jsonb,
    false,
    6
  ) ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_position, content, rating, is_featured)
VALUES
  (
    'Rajesh Kumar',
    'CEO, StyleHub Fashion',
    'The team delivered an exceptional e-commerce platform that exceeded our expectations. Our online sales have increased by 200% since launch. Their attention to detail and professionalism is outstanding.',
    5,
    true
  ),
  (
    'Priya Sharma',
    'Founder, HealthCare Plus',
    'Working with this team was a fantastic experience. They understood our healthcare requirements perfectly and delivered a secure, user-friendly mobile app. Highly recommended!',
    5,
    true
  ),
  (
    'Amit Patel',
    'Director, PropertyFinder',
    'Our real estate portal has transformed how we do business. The platform is fast, reliable, and our customers love the virtual tour feature. Great work!',
    5,
    true
  ),
  (
    'Sneha Reddy',
    'Owner, Foodie Delights',
    'The restaurant management system has streamlined our operations significantly. Online orders have tripled and table management is now effortless. Thank you!',
    4,
    false
  ) ON CONFLICT DO NOTHING;

-- Insert sample team members
INSERT INTO team_members (name, position, bio, image_url, order_index)
VALUES
  (
    'Arjun Mehta',
    'Founder & CEO',
    'Tech entrepreneur with 10+ years of experience in building digital solutions. Passionate about creating innovative products that solve real problems.',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    1
  ),
  (
    'Neha Singh',
    'Head of Design',
    'Award-winning designer specializing in UI/UX. Believes in creating beautiful, intuitive experiences that users love.',
    'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    2
  ),
  (
    'Vikram Joshi',
    'Lead Developer',
    'Full-stack developer with expertise in modern web technologies. Loves solving complex technical challenges.',
    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    3
  ),
  (
    'Ananya Kapoor',
    'Marketing Director',
    'Digital marketing expert with proven track record of driving growth. Data-driven strategist focused on ROI.',
    'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    4
  ) ON CONFLICT DO NOTHING;

-- Insert business stats
INSERT INTO business_stats (stat_key, stat_value, stat_label, order_index)
VALUES
  ('projects_completed', '150+', 'Projects Completed', 1),
  ('happy_clients', '100+', 'Happy Clients', 2),
  ('years_experience', '10+', 'Years Experience', 3),
  ('team_members', '25+', 'Team Members', 4) ON CONFLICT DO NOTHING;

-- Insert partner logos
INSERT INTO partners (name, logo_url, order_index)
VALUES
  ('TechCorp', 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=200', 1),
  ('InnovateLabs', 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=200', 2),
  ('Digital Solutions Inc', 'https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=200', 3),
  ('CloudTech Systems', 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=200', 4) ON CONFLICT DO NOTHING;

-- Insert sample service reviews
INSERT INTO service_reviews (service_id, client_name, rating, comment)
SELECT 
  s.id,
  'Karan Malhotra',
  5,
  'Excellent web development service! The team was professional and delivered exactly what we needed.'
FROM services s
WHERE s.title = 'Web Development'
LIMIT 1
ON CONFLICT DO NOTHING;

INSERT INTO service_reviews (service_id, client_name, rating, comment)
SELECT 
  s.id,
  'Divya Iyer',
  5,
  'Our mobile app turned out better than we imagined. Great communication throughout the project.'
FROM services s
WHERE s.title = 'Mobile App Development'
LIMIT 1
ON CONFLICT DO NOTHING;

INSERT INTO service_reviews (service_id, client_name, rating, comment)
SELECT 
  s.id,
  'Rohit Desai',
  4,
  'Digital marketing campaign significantly improved our online visibility. Very satisfied with the results.'
FROM services s
WHERE s.title = 'Digital Marketing'
LIMIT 1
ON CONFLICT DO NOTHING;