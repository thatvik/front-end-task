import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Nutrition');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for the carousel
  const carouselImages = [
    { src: '/images/carousel-1.png', alt: 'People cooking healthy food' },
    { src: '/images/carousel-2.png', alt: 'Person doing yoga' },
    { src: '/images/carousel-3.png', alt: 'Person on beach' },
    { src: '/images/carousel-4.png', alt: 'Doctor with patient' }
  ];

  // Rectangle images for the second column
  const rectangleImages = [
    { src: '/images/Rectangle 3468481 (1).png', alt: 'Lifestyle image 1' },
    { src: '/images/Rectangle 3468482 (1).png', alt: 'Lifestyle image 2' },
    { src: '/images/Rectangle 3468485 (1).png', alt: 'Lifestyle image 3' },
    { src: '/images/Rectangle 3468487 (1).png', alt: 'Lifestyle image 4' }
  ];

  // Lifestyle pillars data
  const pillars = [
    {
      id: 'Nutrition',
      title: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
      metric: '121/80',
      unit: 'mmHg',
      image: '/images/Rectangle 144.png'
    },
    {
      id: 'Physical activity',
      title: 'Physical activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
      metric: '32',
      unit: 'minutes',
      image: '/images/Rectangle 152.png'
    },
    {
      id: 'Restorative sleep',
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep is essential for cognitive function and physical health.',
      metric: '8',
      unit: 'hours',
      image: '/images/Rectangle 154.png'
    },
    {
      id: 'Stress management',
      title: 'Stress management',
      description: 'Managing stress effectively helps prevent chronic conditions and improves overall wellbeing.',
      metric: '15',
      unit: 'minutes',
      image: '/images/Rectangle 156.png'
    },
    {
      id: 'Social connection',
      title: 'Social connection',
      description: 'Strong social connections contribute to better health outcomes and longevity.',
      metric: '3',
      unit: 'friends',
      image: '/images/Rectangle 158.png'
    },
    {
      id: 'Substance abuse',
      title: 'Substance abuse',
      description: 'Avoiding harmful substances is crucial for maintaining long-term health and preventing disease.',
      metric: '0',
      unit: 'drinks',
      image: '/images/Rectangle 160.png'
    }
  ];

  // We're using CSS animations for the carousel now, so we don't need the auto-rotate effect
  // The currentSlide state is kept for potential future use

  return (
    <div className="App min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-4 px-4 md:px-8 flex justify-between items-center bg-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)' }}>
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/images/provital-logo-gradient.svg" alt="ProVital Logo" className="h-10 w-auto" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end space-x-6">
          <a href="#" className="nav-item">List your practice</a>
          <a href="#" className="nav-item">For Employers</a>
          <a href="#" className="nav-item">Courses</a>
          <a href="#" className="nav-item">Books</a>
          <a href="#" className="nav-item">Speakers</a>
          <a href="#" className="nav-item">Doctors</a>
          <div className="relative group">
            <button className="nav-item flex items-center">
              Login / Signup
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-menu-item">
                <p className="text-sm font-medium">Doctor</p>
                <div className="flex space-x-2 mt-1">
                  <a href="#" className="text-blue-500 text-sm">Login</a>
                  <a href="#" className="text-blue-500 text-sm">Sign up</a>
                </div>
              </div>
              <div className="dropdown-menu-item">
                <p className="text-sm font-medium">Patients</p>
                <div className="flex space-x-2 mt-1">
                  <a href="#" className="text-blue-500 text-sm">Login</a>
                  <a href="#" className="text-blue-500 text-sm">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20 md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">List your practice</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">For Employers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">Books</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">Speakers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 py-2">Doctors</a>
              <div className="border-t border-gray-200 pt-2">
                <p className="text-sm font-medium py-1">Doctor</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-500 text-sm">Login</a>
                  <a href="#" className="text-blue-500 text-sm">Sign up</a>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-sm font-medium py-1">Patients</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-500 text-sm">Login</a>
                  <a href="#" className="text-blue-500 text-sm">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section with Image Carousel */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row relative">
            {/* Image Carousel - Moved to left side */}
            <div className="md:w-1/2 relative overflow-hidden" style={{ height: '400px' }}>
              <div className="grid grid-cols-2 gap-3 h-full">
                {/* Column 1: Carousel images moving from top to bottom */}
                <div className="relative overflow-hidden rounded-[20px]">
                  <div className="absolute inset-0 flex flex-col animate-slide-down" style={{ height: '200%' }}>
                    {carouselImages.map((image, index) => (
                      <div key={`col1-${index}`} className="h-1/4 w-full flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover rounded-[20px]"
                        />
                      </div>
                    ))}
                    {/* Duplicate carousel images to create seamless loop */}
                    {carouselImages.map((image, index) => (
                      <div key={`col1-dup-${index}`} className="h-1/4 w-full flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover rounded-[20px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Column 2: Rectangle images moving from bottom to top */}
                <div className="relative overflow-hidden rounded-[20px]">
                  <div className="absolute inset-0 flex flex-col animate-slide-up" style={{ height: '200%' }}>
                    {rectangleImages.map((image, index) => (
                      <div key={`col2-${index}`} className="h-1/4 w-full flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover rounded-[20px]"
                        />
                      </div>
                    ))}
                    {/* Duplicate rectangle images to create seamless loop */}
                    {rectangleImages.map((image, index) => (
                      <div key={`col2-dup-${index}`} className="h-1/4 w-full flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover rounded-[20px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content - Moved to right side */}
            <div className="md:w-1/2 z-10 mb-8 md:mb-0 md:pl-8">
              <h1 className="text-4xl font-semibold mb-4" style={{ fontSize: '36px', fontWeight: 600, lineHeight: 1.3 }}>
                Book an appointment with <br />
                <span style={{ background: 'linear-gradient(90deg, #00B2FF, #9B51E0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>lifestyle medicine</span> experts
              </h1>
              <p className="mb-8" style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.5, marginBottom: '32px' }}>
                Optimize your lifestyle and reverse chronic diseases.
              </p>
            </div>

            {/* Search Form - Overlapping the carousel */}
            <div className="bg-white rounded-[20px] shadow-lg p-6 animate-float absolute bottom-0 left-0 right-0 mx-auto md:w-3/4 transform md:translate-y-1/4 z-20">
              <div className="flex flex-wrap md:flex-nowrap gap-3">
                <div className="flex items-center border border-[#E5E7EB] rounded-[16px] px-3 w-full md:w-1/3" style={{ height: '48px', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)' }}>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Condition, procedure, speciality..." className="ml-2 w-full outline-none text-sm h-full" />
                </div>
                
                <div className="flex items-center border border-[#E5E7EB] rounded-[16px] px-3 w-full md:w-1/3" style={{ height: '48px', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)' }}>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input type="text" placeholder="City, state, or zipcode" className="ml-2 w-full outline-none text-sm h-full" />
                </div>
                
                <div className="flex items-center border border-[#E5E7EB] rounded-[16px] px-3 w-full md:w-1/3" style={{ height: '48px', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)' }}>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <input type="text" placeholder="Insurance carrier" className="ml-2 w-full outline-none text-sm h-full" />
                </div>
                
                <button className="w-full md:w-auto text-white rounded-[16px] flex items-center justify-center font-medium" style={{ backgroundColor: '#00B2A9', height: '48px', padding: '0 24px' }}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find now
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative Wave */}
          <div className="gradient-strip"></div>
        </section>

        {/* Lifestyle Pillars Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="section-title">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">HOW IT WORKS</h2>
              <div className="flex items-center">
                <h3 className="text-2xl font-semibold highlight-orange">Lifestyle as medicine:</h3>
                <span className="ml-2 text-2xl text-gray-700 font-normal">The six pillars</span>
              </div>
            </div>
            
            {/* Pillar Tabs */}
            <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
              {pillars.map(pillar => (
                <button
                  key={pillar.id}
                  className={`pillar-button ${activeTab === pillar.id ? 'active' : 'inactive'}`}
                  onClick={() => setActiveTab(pillar.id)}
                >
                  {pillar.title}
                </button>
              ))}
            </div>
            
            {/* Pillar Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pillar-cards-container">
              {pillars.filter(pillar => pillar.id === activeTab).map(pillar => (
                <div key={pillar.id} className="pillar-card">
                  <div className="relative">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="pillar-card-image"
                    />
                    <div className="vitals-chip">
                      <svg className="w-5 h-5 text-teal-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{pillar.metric}</span>
                      <span className="text-xs text-gray-500 ml-1">{pillar.unit}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="card-title">{pillar.title}</h4>
                    <p className="card-description">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
