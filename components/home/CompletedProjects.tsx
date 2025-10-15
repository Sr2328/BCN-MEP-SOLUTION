'use client';

import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';

const completedProjects = [
  {
    logo: 'https://i.postimg.cc/CKwPH6vm/6646036.png',
    name: 'AVITECH NUTRITION PVT. LTD.',
    location: 'MET Jhajjar',
    contact: 'Mr. Praveen Kumar - 7903206797',
  },
  {
    logo: 'https://i.postimg.cc/CKwPH6vm/6646036.png',
    name: 'BHAGIRATH HEAVY TRANSMISSION (BHT)',
    location: 'Jhajjar',
    contact: 'Mr. Pravesh Mittal - 9871010000',
  },
  {
    logo: 'https://i.postimg.cc/CKwPH6vm/6646036.png',
    name: 'JBM ASSOCIATES WITH SKYTECH ENGINEERS PVT. LTD.',
    location: 'Gujarat',
    contact: 'Kuldeep Yadav - 8800692952',
  },
  {
    logo: 'https://i.postimg.cc/CKwPH6vm/6646036.png',
    name: 'ANAND MANDO MOBILITY PVT. LTD.',
    location: 'Bhiwadi',
    contact: 'Mr. Ajay Yadav - 8924818551',
  },
];

const companyCredentials = [
  { name: 'AS Shoes Accessories Pvt. Ltd.', location: 'MET Jhajjar' },
  { name: 'Manohar Packaging', location: 'MET Jhajjar' },
  { name: 'Robin Stabilizers', location: 'MET Jhajjar' },
  { name: 'Yokohama India Pvt. Ltd.', location: 'Bhiwadi' },
  { name: 'TG MINDA', location: 'Neemrana' },
  { name: 'Rosenberger Pvt. Ltd', location: 'Manesar' },
 
];

export default function ProjectsAndCredentials() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      {/* Completed Projects Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Completed{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Our successful installations reflect precision, reliability, and long-term client trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {completedProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="flex items-center p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Logo */}
              <img
                src={project.logo}
                alt={project.name}
                className="w-16 h-16 object-contain mr-4 flex-shrink-0"
              />
              {/* Text Info */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <FaMapMarker className="text-red-500 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 mt-1">
                  <FaPhone className="text-green-600 mr-2" />
                  <span>{project.contact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company Credentials Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Company{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Credentials
          </span>
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Our partnerships with top-tier organizations reflect our credibility and consistent excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyCredentials.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-blue-700 mb-1">{company.name}</h3>
              <div className="flex items-center text-sm text-gray-700">
                <FaMapMarker className="text-red-500 mr-2" />
                <span>{company.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
