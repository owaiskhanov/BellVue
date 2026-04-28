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
            <div className="mt-10 rounded-xl overflow-hidden h-64 border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.754751430035!2d72.829158!3d19.118408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c22e0a2b95%3A0x6a2c20757a79e651!2sBelle%20Vue%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
              ></iframe>
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
