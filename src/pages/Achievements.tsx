import React, { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ImageSliderModal from '../components/ImageSliderModal';

export default function Achievements() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const achievements = [
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Caner%20%20MOC.jpg", alt: "Achievement 1" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/dr%20Lulla%20dad.jpeg", alt: "Achievement 2" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/miday%2023.jpg", alt: "Achievement 3" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/miday%2024.jpg", alt: "Achievement 4" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/miday.jpg", alt: "Achievement 5" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Midday%20jonny.jpeg", alt: "Achievement 6" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Midday24.jpg", alt: "Achievement 7" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Newspaper.jpg", alt: "Achievement 8" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/NOmination%202018.jpg", alt: "Achievement 9" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/presco24.png", alt: "Achievement 10" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Shreyas.jpeg", alt: "Achievement 11" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/tee%20foundation%20corona.jpg", alt: "Achievement 12" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Mumbai%20Mirror%20rankings%20(1).jpeg", alt: "Mumbai Mirror Rankings 1" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Mumbai%20Mirror%20rankings%20(2).jpeg", alt: "Mumbai Mirror Rankings 2" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Mumbai%20Mirror%20rankings%20(3).jpeg", alt: "Mumbai Mirror Rankings 3" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Mumbai%20Mirror%20rankings%20(4).jpeg", alt: "Mumbai Mirror Rankings 4" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Achievements/Mumbai%20Mirror%20rankings%20(5).jpeg", alt: "Mumbai Mirror Rankings 5" }
  ];

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
