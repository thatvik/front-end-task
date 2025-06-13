import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Nutrition');
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Reference for the pillar cards container
  const cardsContainerRef = React.useRef(null);
  
  // Function to scroll the pillar cards left
  const scrollPillarsLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };
  
  // Function to scroll the pillar cards right
  const scrollPillarsRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Images for the carousel
  const carouselImages = [
    { src: `${process.env.PUBLIC_URL}/images/carousel-1.png`, alt: 'People cooking healthy food' },
    { src: `${process.env.PUBLIC_URL}/images/carousel-2.png`, alt: 'Person doing yoga' },
    { src: `${process.env.PUBLIC_URL}/images/carousel-3.png`, alt: 'Person on beach' },
    { src: `${process.env.PUBLIC_URL}/images/carousel-4.png`, alt: 'Doctor with patient' }
  ];

  // Rectangle images for the second column
  const rectangleImages = [
    { src: `${process.env.PUBLIC_URL}/images/Rectangle 3468481 (1).png`, alt: 'Lifestyle image 1' },
    { src: `${process.env.PUBLIC_URL}/images/Rectangle 3468482 (1).png`, alt: 'Lifestyle image 2' },
    { src: `${process.env.PUBLIC_URL}/images/Rectangle 3468485 (1).png`, alt: 'Lifestyle image 3' },
    { src: `${process.env.PUBLIC_URL}/images/Rectangle 3468487 (1).png`, alt: 'Lifestyle image 4' }
  ];

  // Lifestyle pillars data
  const pillars = [
    {
      id: 'Nutrition',
      title: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
      metric: '121/80',
      unit: 'mmHg',
      image: `${process.env.PUBLIC_URL}/images/Rectangle 144.png`
    },
    {
      id: 'Physical activity',
      title: 'Physical activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
      metric: '32',
      unit: 'minutes',
      image: `${process.env.PUBLIC_URL}/images/Rectangle 152.png`
    },
    {
      id: 'Restorative sleep',
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep is essential for cognitive function and physical health.',
      metric: '8',
      unit: 'hours',
      image: `${process.env.PUBLIC_URL}/images/Rectangle 154.png`
    },
    {
      id: 'Stress management',
      title: 'Stress management',
      description: 'Managing stress effectively helps prevent chronic conditions and improves overall wellbeing.',
      metric: '15',
      unit: 'minutes',
      image: `${process.env.PUBLIC_URL}/images/Rectangle 156.png`
    },
    {
      id: 'Social connection',
      title: 'Social connection',
      description: 'Strong social connections contribute to better health outcomes and longevity.',
      metric: '3',
      unit: 'friends',
      image: `${process.env.PUBLIC_URL}/images/Rectangle 158.png`
    },
    {
      id: 'Substance abuse',
      title: 'Substance abuse',
      description: 'Avoiding harmful substances is crucial for maintaining long-term health and preventing disease.',
      metric: '0',
      unit: 'drinks',
      image: `${process.env.PUBLIC_URL}/images/Rectangle 160.png`
    }
  ];

  // We're using CSS animations for the carousel now, so we don't need the auto-rotate effect
  // The currentSlide state is kept for potential future use

  return (
    <div className="App min-h-screen bg-gray-50">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/images/provital-logo-gradient.svg`} alt="ProVital Logo" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#" className="nav-item">List your practice</a>
          <a href="#" className="nav-item">For Employers</a>
          <a href="#" className="nav-item">Courses</a>
          <a href="#" className="nav-item">Books</a>
          <a href="#" className="nav-item">Speakers</a>
          <a href="#" className="nav-item">Doctors</a>
          <div className="dropdown-container" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <button className="nav-item dropdown-button">
              Login / Signup
              <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-menu-item">
                  <p className="dropdown-label">Doctor</p>
                  <div className="dropdown-links">
                    <a href="#!" className="dropdown-link">Login</a>
                    <a href="#!" className="dropdown-link">Sign up</a>
                  </div>
                </div>
                <div className="dropdown-menu-item">
                  <p className="dropdown-label">Patients</p>
                  <div className="dropdown-links">
                    <a href="#!" className="dropdown-link">Login</a>
                    <a href="#!" className="dropdown-link">Sign up</a>
                  </div>
                </div>
              </div>
            )}
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
                  <a href="#!" className="text-blue-500 text-sm">Login</a>
                  <a href="#!" className="text-blue-500 text-sm">Sign up</a>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-sm font-medium py-1">Patients</p>
                <div className="flex space-x-2">
                  <a href="#!" className="text-blue-500 text-sm">Login</a>
                  <a href="#!" className="text-blue-500 text-sm">Sign up</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section with Image Carousel */}
        <section className="hero-section">
          <div className="hero-container">
            {/* Image Carousel - Left side */}
            <div className="carousel-container">
              <div className="carousel-columns">
                {/* Column 1: Carousel images moving from top to bottom on desktop, horizontal on mobile */}
                <div className="carousel-column">
                  <div className="carousel-animation carousel-down">
                    {carouselImages.map((image, index) => (
                      <div key={`col1-${index}`} className="carousel-item">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="carousel-image"
                          loading="lazy"
                        />
                      </div>
                    ))}
                    {/* Duplicate carousel images to create seamless loop */}
                    {carouselImages.map((image, index) => (
                      <div key={`col1-dup-${index}`} className="carousel-item">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="carousel-image"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Column 2: Rectangle images moving from bottom to top on desktop, horizontal on mobile */}
                <div className="carousel-column">
                  <div className="carousel-animation carousel-up">
                    {rectangleImages.map((image, index) => (
                      <div key={`col2-${index}`} className="carousel-item">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="carousel-image"
                          loading="lazy"
                        />
                      </div>
                    ))}
                    {/* Duplicate rectangle images to create seamless loop */}
                    {rectangleImages.map((image, index) => (
                      <div key={`col2-dup-${index}`} className="carousel-item">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="carousel-image"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content - Right side */}
            <div className="hero-content">
              <h1>
                Book an appointment with <br />
                <span className="gradient-text">lifestyle medicine</span> experts
              </h1>
              <p>
                Optimize your lifestyle and reverse chronic diseases.
              </p>
            </div>

            {/* Search Form - Overlapping the carousel */}
            <div className="search-form">
              <div className="search-inputs">
                <div className="input-group">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Condition, procedure, speciality..." />
                </div>
                
                <div className="input-group">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input type="text" placeholder="City, state, or zipcode" />
                </div>
                
                <div className="input-group">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <input type="text" placeholder="Insurance carrier" />
                </div>
                
                <button className="search-button">
                  <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find now
                </button>
              </div>
              {/* Search form inputs only */}
            </div>
            
            {/* Decorative Wave - Full width */}
            <div className="gradient-strip"></div>
          </div>
        </section>

        {/* Lifestyle Pillars Section */}
        <section className="pillars-section">
          <div className="pillars-container">
            <div className="section-header">
              <h2>HOW IT WORKS</h2>
              <div className="section-title">
                <div className="section-title-text">
                  <h3 className="highlight-orange">Lifestyle as medicine:</h3>
                  <span className="six-pillars-text">The six pillars</span>
                </div>
                <div className="pillar-nav-buttons">
                  <button className="pillar-nav-button pillar-nav-prev" onClick={scrollPillarsLeft} aria-label="Previous pillars">
                    <img src={`${process.env.PUBLIC_URL}/images/arrow-left.svg`} alt="Previous" />
                  </button>
                  <button className="pillar-nav-button pillar-nav-next" onClick={scrollPillarsRight} aria-label="Next pillars">
                    <img src={`${process.env.PUBLIC_URL}/images/arrow-right.svg`} alt="Next" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Pillar Tabs */}
            <div className="pillar-tabs">
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
            <div className="pillar-cards-section">
              <div className="pillar-cards-container" ref={cardsContainerRef}>
                {pillars.map(pillar => (
                  <div 
                    key={pillar.id} 
                    className={`pillar-card ${activeTab === pillar.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(pillar.id)}
                  >
                    <div className="card-image-container">
                      <img 
                        src={pillar.image} 
                        alt={pillar.title} 
                        className="pillar-card-image"
                      />
                      <div className="vitals-chip">
                        <svg className="chip-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span className="metric-value">{pillar.metric}</span>
                        <span className="metric-unit">{pillar.unit}</span>
                      </div>
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">{pillar.title}</h4>
                      <p className="card-description">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="pillar-nav-button pillar-nav-next" onClick={scrollPillarsRight} aria-label="Next pillars">
                <img src={`${process.env.PUBLIC_URL}/images/arrow-right.svg`} alt="Next" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
