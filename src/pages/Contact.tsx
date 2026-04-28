import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { doctors } from '../data/doctors';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const specialities = Array.from(new Set(doctors.map(d => d.speciality))).sort();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this to a backend API.
    // For this demo, we'll just show the success state since mailto: links 
    // can break the iframe preview environment.

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', department: '', date: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Belle Vue Multi Speciality Hospital for appointments, inquiries, or emergency services. Available 24/7."
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with us for appointments, inquiries, or emergency services.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{opacity:0, x:-30}} 
            whileInView={{opacity:1, x:0}} 
            viewport={{once:true}} 
            transition={{duration:0.6}}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 h-full flex flex-col"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91-022-6686-8600</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">bvmsph@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">Monday to Sunday, 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Link, 1st Floor, Opp. D.N. Nagar Metro Station Gate No. 3, Next to Audi Showroom, Opp. Star Bazaar, New Link Road Extension, Andheri West, Mumbai – 400053
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 rounded-xl overflow-hidden h-64 border border-gray-200 bg-gray-100 flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
              <MapPin className="w-12 h-12 text-gray-400 mb-4 z-10" />
              <p className="text-gray-600 font-medium mb-4 z-10">Click to view our location on Google Maps</p>
              <a 
                href="https://www.google.com/maps/place/Belle+Vue+Multispeciality+Hospital/@19.118408,72.829158,15z/data=!4m2!3m1!1s0x0:0x6a2c20757a79e651?sa=X&ved=2ahUKEwjH-7qJm-aDAxUQRmwGHXgOAp0Q_BJ6BAgQEAA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="z-10 bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
              >
                Open Google Maps
              </a>
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div 
            initial={{opacity:0, x:30}} 
            whileInView={{opacity:1, x:0}} 
            viewport={{once:true}} 
            transition={{duration:0.6, delay:0.2}}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Book an Appointment</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. Our team will contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-sm font-semibold text-gray-700">Department *</label>
                    <select 
                      id="department" 
                      name="department" 
                      required
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    >
                      <option value="" disabled>Select Department</option>
                      {specialities.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-700">Preferred Date *</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Briefly describe your symptoms or reason for visit..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Book Appointment</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
