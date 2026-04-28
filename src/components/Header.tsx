import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);
  const deptDropdownRef = useRef<HTMLDivElement>(null);

  const tabs = ['HOME', 'DOCTORS', 'SERVICES', 'GALLERY', 'ACHIEVEMENTS', 'CONTACT'];
  
  const departments = [
    "Consulting Chambers",
    "Cath Lab",
    "ICU",
    "Operation Theatres",
    "Diabetic Foot",
    "Radiology",
    "Pathology Lab",
    "Pharmacy",
    "Rooms",
    "Oncology",
    "Dialysis Unit",
    "Geriatric Centre"
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (deptDropdownRef.current && !deptDropdownRef.current.contains(event.target as Node)) {
        setIsDeptDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <button
            onClick={() => setActiveTab('HOME')}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'HOME' ? "text-primary bg-red-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
            )}
          >
            HOME
          </button>
          
          <button
            onClick={() => setActiveTab('DOCTORS')}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'DOCTORS' ? "text-primary bg-red-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
            )}
          >
            DOCTORS
          </button>

          {/* Department Dropdown */}
          <div className="relative" ref={deptDropdownRef}>
            <button
              onClick={() => {
                setActiveTab('DEPARTMENT');
                setIsDeptDropdownOpen(!isDeptDropdownOpen);
              }}
              className={cn(
                "px-4 py-2 text-sm font-semibold rounded-md transition-colors flex items-center space-x-1",
                activeTab === 'DEPARTMENT' ? "text-primary bg-red-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
              )}
            >
              <span>DEPARTMENT</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isDeptDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50">
                {departments.map((dept, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (dept === "Geriatric Centre") {
                        window.open("https://aajicare.in/", "_blank");
                      } else {
                        setActiveTab('DEPARTMENT');
                        // In a real app we might scroll to the specific department
                      }
                      setIsDeptDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-primary transition-colors"
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveTab('SERVICES')}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'SERVICES' ? "text-primary bg-red-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
            )}
          >
            SERVICES
          </button>
          
          <button
            onClick={() => setActiveTab('GALLERY')}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'GALLERY' ? "text-primary bg-red-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
            )}
          >
            GALLERY
          </button>

          <button
            onClick={() => setActiveTab('ACHIEVEMENTS')}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'ACHIEVEMENTS' ? "text-primary bg-red-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
            )}
          >
            ACHIEVEMENTS
          </button>

          <button
            onClick={() => setActiveTab('CONTACT')}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-colors",
              activeTab === 'CONTACT' ? "text-primary bg-red-50" : "text-gray-600 hover:text-primary hover:bg-gray-50"
            )}
          >
            CONTACT
          </button>
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col max-h-[80vh] overflow-y-auto">
          {['HOME', 'DOCTORS'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-3 text-sm font-semibold rounded-md",
                activeTab === tab ? "text-primary bg-red-50" : "text-gray-600 hover:bg-gray-50"
              )}
            >
              {tab}
            </button>
          ))}
          
          {/* Mobile Department Dropdown */}
          <div className="w-full">
            <div
              className={cn(
                "w-full flex items-center justify-between px-4 py-1 rounded-md",
                activeTab === 'DEPARTMENT' ? "bg-red-50" : "hover:bg-gray-50"
              )}
            >
              <button
                onClick={() => {
                  setActiveTab('DEPARTMENT');
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "flex-grow text-left py-2 text-sm font-semibold",
                  activeTab === 'DEPARTMENT' ? "text-primary" : "text-gray-600"
                )}
              >
                DEPARTMENT
              </button>
              <button
                onClick={() => setIsDeptDropdownOpen(!isDeptDropdownOpen)}
                className="p-2"
              >
                <ChevronDown className={cn("w-4 h-4 transition-transform text-gray-600", isDeptDropdownOpen && "rotate-180")} />
              </button>
            </div>
            {isDeptDropdownOpen && (
              <div className="pl-6 pr-4 py-2 space-y-1">
                {departments.map((dept, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (dept === "Geriatric Centre") {
                        window.open("https://aajicare.in/", "_blank");
                      } else {
                        setActiveTab('DEPARTMENT');
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-red-50 rounded-md"
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>

          {['SERVICES', 'GALLERY', 'ACHIEVEMENTS', 'CONTACT'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-3 text-sm font-semibold rounded-md",
                activeTab === tab ? "text-primary bg-red-50" : "text-gray-600 hover:bg-gray-50"
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
