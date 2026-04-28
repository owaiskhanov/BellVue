import React, { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { departmentsData } from '../data/departmentsData';

export default function Departments() {
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);

  const selectedDept = departmentsData.find(d => d.id === selectedDeptId);

  useEffect(() => {
    if (selectedDeptId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedDeptId]);

  const departmentsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Belle Vue Multi Speciality Hospital Departments",
    "department": departmentsData.map(d => ({
      "@type": "MedicalClinic",
      "name": d.title,
      "description": d.desc
    }))
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16">
      <SEO 
        title="Departments" 
        description="Explore the state-of-the-art medical departments and facilities at Belle Vue Multi Speciality Hospital."
        schema={departmentsSchema}
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Departments</h1>
          <p className="text-lg text-gray-600">State-of-the-art facilities designed for comprehensive patient care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {departmentsData.map((dept, i) => {
            const CardWrapper = dept.link ? 'a' : 'div';
            const wrapperProps = dept.link 
              ? { href: dept.link, target: "_blank", rel: "noopener noreferrer" } 
              : { onClick: () => setSelectedDeptId(dept.id!) };

            return (
              <motion.div 
                initial={{opacity:0, y:20}} 
                whileInView={{opacity:1, y:0}} 
                viewport={{once:true}} 
                transition={{duration:0.4, delay: i * 0.05}}
                key={i} 
              >
                <CardWrapper 
                  {...wrapperProps}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full cursor-pointer"
                >
                  <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                    <img 
                      src={dept.image} 
                      alt={dept.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <dept.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{dept.title}</h3>
                      {dept.link && <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm flex-1">{dept.desc}</p>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Department Modal */}
      <AnimatePresence>
        {selectedDept && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedDeptId(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden z-10"
            >
              <button 
                className="absolute top-4 right-4 z-20 text-gray-500 hover:text-gray-900 bg-white/80 backdrop-blur-md hover:bg-gray-100 rounded-full p-2 transition-all"
                onClick={() => setSelectedDeptId(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-2/5 h-64 md:h-auto shrink-0 bg-gray-100 relative">
                <img 
                  src={selectedDept.image}
                  alt={selectedDept.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="w-12 h-12 bg-primary/90 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <selectedDept.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  {selectedDept.title}
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed text-sm lg:text-base">
                  {selectedDept.sections?.map((section, idx) => (
                    <p key={idx}>
                      <strong className="text-gray-900 font-semibold block mb-1">{section.title}</strong>
                      {section.content}
                    </p>
                  ))}
                  
                  {selectedDept.conclusion && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-500 italic max-w-xl text-sm">
                        {selectedDept.conclusion}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
