/*
  # Seed BCN MEP Company Data

  ## Overview
  Replaces existing sample data with BCN MEP specific services, projects, and company information.

  ## Data Includes
  - Electrical services (4 services)
  - Plumbing & Utilities services (4 services)
  - MEP projects with work orders
  - Updated testimonials
  - Updated team members
  - Updated business stats
  - Partner/customer logos
*/

-- Clear existing data
DELETE FROM service_reviews;
DELETE FROM bookings;
DELETE FROM services;
DELETE FROM projects;
DELETE FROM testimonials;
DELETE FROM team_members;

-- Insert Electrical Services
INSERT INTO services (title, description, full_description, category, service_category, price, price_unit, image_url, features, is_featured, order_index)
VALUES
  (
    'Power Distribution & LT/HT Systems',
    'Complete electrical power distribution solutions for industrial and commercial facilities',
    'We design and install comprehensive power distribution systems including Low Tension (LT) and High Tension (HT) infrastructure. Our solutions ensure reliable, safe, and efficient power delivery across your facility with proper load balancing, protection systems, and compliance with electrical codes.',
    'Electrical',
    'Electrical',
    500000,
    'per project',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["LT/HT panel design and installation", "Cable tray and conduit systems", "Busbar trunking systems", "Power factor correction units", "Earth pit and lightning protection", "Load calculation and distribution"]'::jsonb,
    true,
    1
  ),
  (
    'Substation & DG Integration',
    'Turnkey substation setup and diesel generator integration with synchronization',
    'Expert design and installation of electrical substations and DG sets with complete integration, including synchronization panels, AMF panels, and load management systems. We ensure seamless power backup and distribution for uninterrupted operations.',
    'Electrical',
    'Electrical',
    800000,
    'per project',
    'https://images.pexels.com/photos/236093/pexels-photo-236093.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["33KV/11KV substation installation", "DG set installation and commissioning", "Synchronization panel setup", "AMF/ATS panel integration", "Transformer installation", "Protection relay systems"]'::jsonb,
    true,
    2
  ),
  (
    'Lighting & Control Systems',
    'Energy-efficient lighting design with intelligent control and automation',
    'Modern lighting solutions combining energy efficiency with aesthetic appeal. Our systems include LED lighting, occupancy sensors, daylight harvesting, and centralized control systems for optimal illumination and energy savings.',
    'Electrical',
    'Electrical',
    300000,
    'per project',
    'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["LED lighting design and installation", "Emergency lighting systems", "Occupancy and daylight sensors", "DALI/DMX control systems", "Street and outdoor lighting", "Lux level calculations"]'::jsonb,
    true,
    3
  ),
  (
    'Data, CCTV, BMS & Access Control',
    'Integrated low-current systems for security, monitoring, and building automation',
    'Complete low-current infrastructure including structured cabling, CCTV surveillance, Building Management Systems (BMS), and access control. We provide end-to-end solutions for smart building automation and security.',
    'Electrical',
    'Electrical',
    400000,
    'per project',
    'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["Structured cabling (Cat6/Cat6a)", "IP CCTV camera installation", "BMS integration and programming", "Access control and door locks", "Fire alarm systems", "PA and intercom systems"]'::jsonb,
    false,
    4
  );

-- Insert Plumbing & Utilities Services
INSERT INTO services (title, description, full_description, category, service_category, price, price_unit, image_url, features, is_featured, order_index)
VALUES
  (
    'Water Supply & Drainage Systems',
    'Complete internal and external plumbing infrastructure for buildings',
    'Expert design and installation of water supply networks, drainage systems, and sanitary plumbing. We ensure efficient water distribution, proper drainage, and compliance with plumbing codes for residential, commercial, and industrial projects.',
    'Plumbing',
    'Plumbing',
    350000,
    'per project',
    'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["Potable water supply piping", "Hot and cold water systems", "Drainage and sewage networks", "Rainwater harvesting systems", "Plumbing fixtures installation", "Pressure boosting systems"]'::jsonb,
    true,
    5
  ),
  (
    'Fire-Fighting Networks & Sprinklers',
    'Comprehensive fire protection systems with sprinklers and hydrant networks',
    'Life-safety fire protection systems including automatic sprinklers, fire hydrants, hose reels, and fire pumps. Our designs meet NFPA standards and local fire codes to ensure maximum protection for occupants and property.',
    'Plumbing',
    'Plumbing',
    600000,
    'per project',
    'https://images.pexels.com/photos/266487/pexels-photo-266487.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["Sprinkler system design and installation", "Fire hydrant and hose reel networks", "Fire pump room setup", "Wet riser and dry riser systems", "FM200 and gas suppression", "NFPA compliance"]'::jsonb,
    true,
    6
  ),
  (
    'WTP/STP/ETP Installation',
    'Water treatment plant solutions for industrial and commercial applications',
    'Complete turnkey installation of Water Treatment Plants (WTP), Sewage Treatment Plants (STP), and Effluent Treatment Plants (ETP). We provide sustainable water management solutions with proper treatment processes and automation.',
    'Plumbing',
    'Plumbing',
    1200000,
    'per project',
    'https://images.pexels.com/photos/3568542/pexels-photo-3568542.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["WTP design and installation", "STP/ETP plant setup", "RO plant installation", "Chemical dosing systems", "Filtration and treatment units", "Plant automation and monitoring"]'::jsonb,
    false,
    7
  ),
  (
    'HVAC, Cooling Towers & Steam Lines',
    'Mechanical systems for climate control and industrial processes',
    'Complete HVAC solutions including air conditioning, ventilation, cooling towers, and steam distribution. Our mechanical systems ensure optimal indoor climate control and support industrial process requirements.',
    'Plumbing',
    'Plumbing',
    900000,
    'per project',
    'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=800',
    '["Central AC and VRV systems", "AHU and FCU installation", "Cooling tower setup", "Chiller plant installation", "Steam and condensate piping", "Ventilation and exhaust systems"]'::jsonb,
    true,
    8
  );

-- Insert MEP Projects
INSERT INTO projects (title, description, category, image_url, client_name, completion_date, technologies, is_featured, order_index)
VALUES
  (
    'Manufacturing Facility - Complete MEP Works',
    'Turnkey MEP installation for 50,000 sq.ft manufacturing plant including power distribution, DG synchronization, fire-fighting, and HVAC systems.',
    'Industrial',
    'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    'ABC Industries Ltd.',
    '2024-09-15',
    '["11KV Substation", "2x500 KVA DG Sets", "Fire Sprinkler System", "HVAC Package AC", "WTP & STP"]'::jsonb,
    true,
    1
  ),
  (
    'Commercial Complex - Electrical & Plumbing',
    'Complete electrical and plumbing works for multi-story commercial building with BMS integration and VRV air conditioning.',
    'Commercial',
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Skyline Developers',
    '2024-08-20',
    '["LT Panel - 2500A", "VRV AC System", "BMS Integration", "CCTV & Access Control", "Fire Hydrant Network"]'::jsonb,
    true,
    2
  ),
  (
    'Residential Tower - MEP Package',
    'Complete MEP works for 15-story residential tower including all electrical, plumbing, and fire-fighting systems.',
    'Residential',
    'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Green Homes Pvt Ltd',
    '2024-07-10',
    '["LT Distribution", "Plumbing Risers", "Fire Sprinklers", "Solar Water Heaters", "Rainwater Harvesting"]'::jsonb,
    true,
    3
  ),
  (
    'Hospital - Specialized MEP Systems',
    'MEP installation for 100-bed hospital with medical gas pipeline, UPS backup, and HVAC with HEPA filtration.',
    'Healthcare',
    'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
    'City Care Hospital',
    '2024-06-05',
    '["Medical Gas Pipeline", "UPS & DG Backup", "HEPA Filtration", "Emergency Power", "Central Sterilization"]'::jsonb,
    false,
    4
  ),
  (
    'Educational Campus - Infrastructure',
    'Complete MEP infrastructure for educational campus including classrooms, labs, and hostel facilities.',
    'Educational',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
    'National Institute',
    '2024-05-15',
    '["Power Distribution", "Lab Utilities", "Hostel Plumbing", "Campus Lighting", "STP Plant"]'::jsonb,
    false,
    5
  ),
  (
    'Warehouse - Industrial Utilities',
    'High-bay warehouse with heavy power distribution, material handling systems, and fire protection.',
    'Industrial',
    'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    'Logistics Hub India',
    '2024-10-01',
    '["Heavy Power - 3000A", "Crane Power Supply", "High-Bay Lighting", "Fire Detection", "Compressed Air Lines"]'::jsonb,
    false,
    6
  );

-- Insert work orders for projects
INSERT INTO work_orders (project_id, order_number, work_type, completion_status)
SELECT id, 'WO-2024-' || LPAD(order_index::text, 3, '0'), category, 'Completed'
FROM projects;

-- Update testimonials for MEP context
INSERT INTO testimonials (client_name, client_position, content, rating, is_featured)
VALUES
  (
    'Rajesh Kumar',
    'Project Director, ABC Industries Ltd.',
    'BCN MEP delivered our manufacturing facility MEP works on time and within budget. Their technical expertise in power distribution and HVAC systems is exceptional. Highly professional team!',
    5,
    true
  ),
  (
    'Priya Sharma',
    'CEO, Skyline Developers',
    'We have worked with BCN MEP on multiple commercial projects. Their attention to detail and quality of execution is outstanding. The BMS integration they provided is working flawlessly.',
    5,
    true
  ),
  (
    'Amit Patel',
    'Managing Director, Green Homes',
    'BCN MEP completed our residential tower MEP package with excellent quality. Their coordination with civil contractors was seamless and they resolved all site challenges efficiently.',
    5,
    true
  ),
  (
    'Dr. Sneha Reddy',
    'Administrator, City Care Hospital',
    'The specialized MEP systems installed by BCN MEP meet all our healthcare requirements. The medical gas pipeline and HVAC with HEPA filtration are working perfectly.',
    5,
    false
  );

-- Update team members
INSERT INTO team_members (name, position, bio, image_url, order_index)
VALUES
  (
    'Arjun Mehta',
    'Founder & Managing Director',
    'Electrical engineer with 15+ years in MEP design and execution. Leads strategic vision and client relationships.',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    1
  ),
  (
    'Neha Singh',
    'Chief Project Manager',
    'PMP certified project manager specializing in large-scale MEP installations. Ensures on-time delivery and quality.',
    'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    2
  ),
  (
    'Vikram Joshi',
    'Head - Electrical Division',
    'Licensed electrical contractor with expertise in HT/LT systems, substations, and building automation.',
    'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    3
  ),
  (
    'Ananya Kapoor',
    'Head - Plumbing Division',
    'Mechanical engineer specializing in plumbing, fire-fighting, and water treatment systems.',
    'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    4
  );

-- Update business stats
UPDATE business_stats SET stat_value = '200+', stat_label = 'MEP Projects' WHERE stat_key = 'projects_completed';
UPDATE business_stats SET stat_value = '50+', stat_label = 'Corporate Clients' WHERE stat_key = 'happy_clients';
UPDATE business_stats SET stat_value = '4+', stat_label = 'Years of Excellence' WHERE stat_key = 'years_experience';
UPDATE business_stats SET stat_value = '30+', stat_label = 'MEP Specialists' WHERE stat_key = 'team_members';