import React, { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ImageSliderModal from '../components/ImageSliderModal';
import { achievementsData } from '../data/achievementsData';

export default function Achievements() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const achievements = achievementsData;

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      <SEO 
        title="Achievements" 
        description="Explore the milestones, awards, and recognitions of Belle Vue Multi Speciality Hospital."
      />
      
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Celebrating excellence in healthcare and our commitment to the community.
          </p>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white border border-gray-100 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="aspect-w-4 aspect-h-3 w-full h-64 bg-gray-200">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageSliderModal 
        images={achievements}
        initialIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
      />
    </div>
  );
}
