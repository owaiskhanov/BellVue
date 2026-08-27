import React from 'react';
import { HeartPulse, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const tabs = ['HOME', 'DOCTORS', 'DEPARTMENT', 'SERVICES', 'GALLERY', 'ACHIEVEMENTS', 'BLOG', 'CONTACT'];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center">
            <img 
              src="https://khssjcstrvidiuubzykw.supabase.co/storage/v1/object/public/BellVue%20Hospital%20Files/Bellvue%20Remake/Bellvue%20Logo.png" 
              alt="Belle Vue Logo" 
              width={200}
              height={64}
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Trusted healthcare in Mumbai since 1983. Evolving as a benchmark in quality healthcare available to one and all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab}>
                <button 
                  onClick={() => setActiveTab(tab)}
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-gray-400">
                <p className="mb-2">The Link, 1st Floor, Opp. D.N. Nagar Metro Station Gate No. 3, Next to Audi Showroom, Andheri West, Mumbai – 400053</p>
                <p className="text-xs text-gray-500 font-medium"><span className="text-gray-400">Serving Areas:</span> Andheri West, Lokhandwala Complex, Versova, Oshiwara, Juhu</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-gray-400">+91-022-6686-8600</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-gray-400">bvmsph@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Local SEO & Keyword Tags */}
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800">
        <p className="text-xs font-semibold text-gray-400 mb-3 tracking-wider uppercase">Popular Searches & Healthcare Landmarks:</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          {[
            { label: "Bellevue Hospital DN Nagar", tab: "BLOG" },
            { label: "Bellevue Hospital Mumbai", tab: "BLOG" },
            { label: "Bellevue Multispeciality Hospital", tab: "HOME" },
            { label: "Bellevue Hospital", tab: "SERVICES" },
            { label: "Belle Vue Multispeciality Hospital", tab: "DEPARTMENT" },
            { label: "Belle Vue", tab: "ABOUT" },
            { label: "Belle Vue Hospital", tab: "CONTACT" },
            { label: "Belle Vue Andheri West", tab: "HOME" },
            { label: "Bellevue Nursing Home", tab: "BLOG" },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveTab(item.tab === 'ABOUT' ? 'HOME' : item.tab);
              }}
              className="bg-gray-800/80 hover:bg-gray-800 hover:text-white px-2.5 py-1 rounded-md transition-colors border border-gray-700/50"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-6 pt-6 border-t border-gray-800/60 text-center text-sm text-gray-500 flex flex-col items-center space-y-2">
        <p>© 2026 Belle Vue Multispecialty Hospital. All Rights Reserved.</p>
        <p>
          Designed and managed by{' '}
          <a 
            href="https://stalite.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors font-medium"
          >
            Stalite Media
          </a>
        </p>
      </div>
    </footer>
  );
}
