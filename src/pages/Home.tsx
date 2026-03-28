import React, { useState } from 'react';
import { HeartPulse, Activity, Stethoscope, Users, Clock, Bed, ShieldCheck, Award, ThumbsUp, Heart, Brain, Bone, Pill } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ImageSliderModal from '../components/ImageSliderModal';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState<number | null>(null);

  const achievementImages = [
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Caner%20%20MOC.jpg", alt: "Achievement 1" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/dr%20Lulla%20dad.jpeg", alt: "Achievement 2" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/miday%2023.jpg", alt: "Achievement 3" }
  ];

  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Belle Vue Multi Speciality Hospital",
    "image": "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue-Logo-Favicon-full.png",
    "url": "https://bellevuehospital.com",
    "telephone": "+91-022-6686-8600",
    "email": "bvmsph@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Link, 1st Floor, Opp. D.N. Nagar Metro Station Gate No. 3, Next to Audi Showroom, Andheri West",
      "addressLocality": "Mumbai",
      "postalCode": "400053",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title="Home" 
        description="Belle Vue Multi Speciality Hospital in Mumbai. Providing compassionate care and advanced medical facilities since 1978."
        schema={hospitalSchema}
      />
      {/* Hero Section */}
      <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Hospital Building" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative container mx-auto px-6 py-32 md:py-48 flex flex-col items-start justify-center">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light border border-primary/30 text-sm font-semibold tracking-wider mb-6">
              ESTABLISHED 1978
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Your Health, <br/><span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
              Trusted healthcare in Mumbai since 1978. Compassionate care by experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActiveTab('CONTACT')}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => setActiveTab('DOCTORS')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all"
              >
                Our Doctors
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <motion.section initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="bg-white border-b border-gray-100 relative z-10 -mt-12 mx-4 md:mx-12 rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {[
            { icon: Award, label: "Experience", value: "45+ Years" },
            { icon: Users, label: "Specialist Doctors", value: "100+" },
            { icon: Clock, label: "Emergency Care", value: "24/7" },
            { icon: Bed, label: "ICU Beds", value: "11-Bed" }
          ].map((stat, i) => (
            <div key={i} className="p-8 flex flex-col items-center text-center bg-white hover:bg-gray-50 transition-colors">
              <stat.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Vision / Mission / Motto */}
      <motion.section initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                "To evolve as a benchmark in quality healthcare available to one and all."
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                "To ensure accessible and affordable quality healthcare by compassionate medical professionals to all."
              </p>
            </div>
            <div className="bg-primary p-10 rounded-2xl shadow-md text-white">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Motto (ICARE)</h3>
              <ul className="space-y-2 font-medium">
                <li>Integrity</li>
                <li>Compassion</li>
                <li>Accountability</li>
                <li>Respect</li>
                <li>Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Specialities */}
      <motion.section initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Specialities</h2>
            <p className="text-lg text-gray-600">Comprehensive medical care across multiple disciplines, equipped with state-of-the-art technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Cardiac Care", desc: "Cath Lab with Philips FD-10 machine" },
              { icon: Activity, title: "Oncology", desc: "Cancer care including Chemotherapy" },
              { icon: Activity, title: "Diabetic Foot", desc: "One of Mumbai's most experienced units" },
              { icon: Bone, title: "Orthopedics", desc: "Bone & Joint Replacement Surgery" },
              { icon: Brain, title: "Neurology", desc: "Neuro Physician & Neuro Surgery" },
              { icon: Pill, title: "General Medicine", desc: "OPD, IPD & Emergency Services" }
            ].map((spec, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-16 h-16 bg-gray-50 group-hover:bg-primary rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <spec.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical Team" 
                className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Belle Vue?</h2>
              <p className="text-lg text-gray-600 mb-10">
                We combine decades of experience with modern medical technology to provide the best possible care for our patients.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Comprehensive Care",
                  "Advanced Facilities",
                  "Experienced Doctors",
                  "Personalized Attention",
                  "Affordable Care",
                  "Positive Patient Experiences"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <ThumbsUp className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Medical Director Spotlight */}
              <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center space-x-6">
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden shrink-0 border-2 border-primary">
                  <img 
                    src="https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Doctors/VijayNLulla-2.jpg" 
                    alt="Dr. Vijay N. Lulla" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Dr. Vijay N. Lulla</h4>
                  <p className="text-primary font-medium">Medical Director & Clinical Cardiologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Achievements Preview */}
      <motion.section initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-lg text-gray-600">Celebrating excellence in healthcare and our commitment to the community.</p>
            </div>
            <button 
              onClick={() => setActiveTab('ACHIEVEMENTS')}
              className="hidden md:block text-primary font-semibold hover:underline"
            >
              View All Achievements →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievementImages.map((item, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border border-gray-100 cursor-pointer"
                onClick={() => setSelectedAchievementIndex(i)}
              >
                <div className="aspect-w-4 aspect-h-3 w-full h-64 bg-gray-200">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={() => setActiveTab('ACHIEVEMENTS')}
              className="text-primary font-semibold hover:underline"
            >
              View All Achievements →
            </button>
          </div>
        </div>
      </motion.section>

      <ImageSliderModal 
        images={achievementImages}
        initialIndex={selectedAchievementIndex ?? 0}
        isOpen={selectedAchievementIndex !== null}
        onClose={() => setSelectedAchievementIndex(null)}
      />

      {/* Featured Doctors Preview */}
      <motion.section initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Specialists</h2>
              <p className="text-lg text-gray-600">Meet some of our top medical professionals.</p>
            </div>
            <button 
              onClick={() => setActiveTab('DOCTORS')}
              className="hidden md:block text-primary font-semibold hover:underline"
            >
              View All Doctors →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sanjay Rajdev", spec: "Cardiologist", img: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Doctors/Dr-Sanjay-Rajdev.png" },
              { name: "Dr. Haresh Mehta", spec: "Interventional Cardiologist", img: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Doctors/Dr-Haresh-Mehta.jpg" },
              { name: "Dr. Asadullah Baig", spec: "Orthopedic Surgeon", img: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Doctors/Dr-Asadullah-Baig.jpg" },
              { name: "Dr. Jessy Thomas", spec: "Diabetic Foot Surgeon", img: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Doctors/Dr-Jessy-Thomas.jpg" }
            ].map((doc, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-inner overflow-hidden border-2 border-primary/20">
                  {doc.img ? (
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                  ) : (
                    doc.name.split(' ').map(n => n[0]).join('').replace('.', '').substring(0, 2)
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-sm text-primary font-medium">{doc.spec}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={() => setActiveTab('DOCTORS')}
              className="text-primary font-semibold hover:underline"
            >
              View All Doctors →
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
