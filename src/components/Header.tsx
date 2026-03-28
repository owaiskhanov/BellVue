import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = ['HOME', 'DOCTORS', 'DEPARTMENT', 'SERVICES', 'GALLERY', 'ACHIEVEMENTS', 'CONTACT'];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="hidden lg:flex justify-between items-center px-6 py-2 bg-gray-50 text-sm text-gray-600 border-b border-gray-200">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>Monday - Sunday: 24:00 hours | +91-022-6686-8600</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>bvmsph@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="truncate max-w-md">The Link, 1st floor, Next to Audi Showroom, Andheri West, Mumbai 400053</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 lg:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => setActiveTab('HOME')}
        >
          <img 
            src="https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue-Logo-Favicon-full.png" 
            alt="Belle Vue Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
                activeTab === tab 
                  ? "text-primary bg-red-50" 
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setActiveTab('CONTACT')}
            className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-sm"
          >
            <span>🩺 MAKE APPOINTMENT</span>
          </button>
          
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-3 text-sm font-semibold rounded-md",
                activeTab === tab 
                  ? "text-primary bg-red-50" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              {tab}
            </button>
          ))}
          <button 
            onClick={() => {
              setActiveTab('CONTACT');
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-4 flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-md font-semibold"
          >
            <span>🩺 MAKE APPOINTMENT</span>
          </button>
        </div>
      )}
    </header>
  );
}
