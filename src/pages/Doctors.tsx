import React, { useState, useMemo } from 'react';
import { doctors } from '../data/doctors';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Doctors() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(doctors.map(d => d.speciality)))].sort();

  const filteredDoctors = useMemo(() => {
    if (activeFilter === 'All') return doctors;
    return doctors.filter(d => d.speciality === activeFilter);
  }, [activeFilter]);

  const doctorsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Belle Vue Multi Speciality Hospital Doctors",
    "medicalSpecialty": categories.filter(c => c !== 'All').map(c => ({
      "@type": "MedicalSpecialty",
      "name": c
    }))
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16">
      <SEO 
        title="Our Doctors" 
        description="Meet our team of 100+ experienced specialists across all departments at Belle Vue Multi Speciality Hospital."
        schema={doctorsSchema}
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Doctors</h1>
          <p className="text-lg text-gray-600">100+ Experienced Specialists Across All Departments</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doc, i) => (
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay: (i % 10) * 0.05}}
              key={i} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-primary text-2xl font-bold border-2 border-transparent group-hover:border-primary transition-colors">
                  {doc.name.replace('Dr. ', '').split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div className={cn(
                  "absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold shadow-sm whitespace-nowrap",
                  doc.type === 'Panel' ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                )}>
                  {doc.type}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">{doc.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{doc.speciality}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
