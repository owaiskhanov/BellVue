import React from 'react';
import { Hospital, Pill, Activity, AlertCircle, Droplets, Bed, Scissors, Stethoscope, TestTube, Scan, ShoppingBag, Ambulance, Shield, Brush, FolderOpen, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    { icon: Hospital, title: "IPD & OPD", desc: "Comprehensive inpatient and outpatient care" },
    { icon: Pill, title: "General Medicine", desc: "Expert diagnosis and treatment for common illnesses" },
    { icon: Activity, title: "Onco Surgery / Medicine", desc: "Advanced cancer care and chemotherapy" },
    { icon: AlertCircle, title: "24×7 Emergency", desc: "Round-the-clock emergency medical services" },
    { icon: Droplets, title: "Dialysis Center", desc: "Fully equipped dialysis unit for renal care" },
    { icon: Bed, title: "Patient Rooms", desc: "Gen Wards, Semi Deluxe, Deluxe & Suite Rooms" },
    { icon: Scissors, title: "Laminar OT", desc: "Clean Room Operation Theatre for major surgeries" },
    { icon: Stethoscope, title: "Operating Theatres", desc: "Fully equipped for minor and major procedures" },
    { icon: TestTube, title: "Pathology", desc: "In-house diagnostic services and lab testing" },
    { icon: Scan, title: "Imaging Centre", desc: "ECG, Stress Test, Sonography, X-ray" },
    { icon: ShoppingBag, title: "Pharmacy & Store", desc: "24/7 access to medicines and medical supplies" },
    { icon: Ambulance, title: "Ambulance Services", desc: "Rapid response medical transport" },
    { icon: Shield, title: "Security", desc: "Round-the-clock security for patient safety" },
    { icon: Brush, title: "Infection Control", desc: "Strict housekeeping and hygiene protocols" },
    { icon: FolderOpen, title: "Medical Records", desc: "Secure and organized patient history management" },
    { icon: CheckCircle, title: "Quality Control", desc: "Adherence to highest medical standards" }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Belle Vue Multi Speciality Hospital Services",
    "availableService": services.map(s => ({
      "@type": "MedicalTest",
      "name": s.title,
      "description": s.desc
    }))
  };

  return (
    <div className="w-full bg-white min-h-screen py-16">
      <SEO 
        title="Services" 
        description="Comprehensive medical and support services provided by Belle Vue Multi Speciality Hospital."
        schema={servicesSchema}
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">A wide range of medical and support services to ensure your well-being.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay: i * 0.05}}
              key={i} 
              className="flex items-start space-x-4 p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
