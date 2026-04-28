import React, { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import ImageSliderModal from '../components/ImageSliderModal';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%201.png", label: "Gallery Image 1" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%202.png", label: "Gallery Image 2" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%203.png", label: "Gallery Image 3" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/image%204.png", label: "Gallery Image 4" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%205.png", label: "Gallery Image 5" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%206.png", label: "Gallery Image 6" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%207.png", label: "Gallery Image 7" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%208.png", label: "Gallery Image 8" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%209.png", label: "Gallery Image 9" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%2010.png", label: "Gallery Image 10" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%2011.png", label: "Gallery Image 11" },
    { src: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Gallery/Image%2012.png", label: "Gallery Image 12" }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16">
      <SEO 
        title="Gallery" 
        description="Take a visual tour of Belle Vue Multi Speciality Hospital's facilities, infrastructure, and patient care environments."
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600">Take a visual tour of our facilities and infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div 
              initial={{opacity:0, scale:0.95}} 
              whileInView={{opacity:1, scale:1}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay: i * 0.05}}
              key={i} 
              className="relative group overflow-hidden rounded-2xl shadow-sm cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedIndex(i)}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-bold text-xl">{img.label}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageSliderModal 
        images={images}
        initialIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
      />
    </div>
  );
}
