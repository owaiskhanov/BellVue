import React from 'react';
import { Stethoscope, HeartPulse, Bed, Activity, ActivitySquare, Scan, TestTube, Pill, DoorOpen, ShieldAlert, Droplets, Users } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Departments() {
  const departments = [
    { icon: Stethoscope, title: "Consulting Chambers", desc: "Multiple specialist OPD rooms for scheduled consultations" },
    { icon: HeartPulse, title: "Cath Lab", desc: "State-of-the-art Philips FD-10 machine for cardiac procedures" },
    { icon: Bed, title: "ICU", desc: "11 fully equipped beds, 24-hour emergency availability" },
    { icon: Activity, title: "Operation Theatres", desc: "2 OTs (minor + major), Laminar air flow" },
    { icon: ActivitySquare, title: "Diabetic Foot", desc: "Dedicated podiatry and diabetic foot care unit" },
    { icon: Scan, title: "Radiology", desc: "Sonography, Digital X-ray, Echocardiography, Colour Doppler" },
    { icon: TestTube, title: "Pathology Lab", desc: "Comprehensive in-house diagnostic lab" },
    { icon: Pill, title: "Pharmacy", desc: "24/7 pharmacy and medical store on premises" },
    { icon: DoorOpen, title: "Rooms", desc: "VIP Suite, Triple, Twin, Deluxe, Classic Suites" },
    { icon: ShieldAlert, title: "Oncology", desc: "Cancer care + Chemotherapy department" },
    { icon: Droplets, title: "Dialysis Unit", desc: "Fully equipped dialysis centre" },
    { icon: Users, title: "Geriatric Centre", desc: "Elder care centre (linked to aajicare.in)" }
  ];

  const departmentsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Belle Vue Multi Speciality Hospital Departments",
    "department": departments.map(d => ({
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay: i * 0.05}}
              key={i} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <dept.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.title}</h3>
              <p className="text-gray-600 leading-relaxed">{dept.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
