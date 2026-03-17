import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [scrolled, setScrolled] = useState(false);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false); // Close mobile menu on desktop
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
   
    {
      title: 'LOCATIONS',
      path: '/locations',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Nairobi Branch', path: '/locations/Nairobi' },
        { name: 'Nairobi Branch', path: '/locations/Nairobi' },
        { name: 'Nairobi Branch', path: '/locations/Nairobi' }
      ]
    },
    {
      title: 'ARTISTS & PIERCERS',
      path: '/artists',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Specialists in Nairobi Branch', path: '/artists/Nairobi' },
        { name: 'Specialists in Nairobi Branch', path: '/artists/Nairobi' },
        { name: 'Specialists in Nairobi Branch', path: 'artists/Nairobi' }
      ]
    },
    {
      title: 'PIERCING',
      path: '/piercing',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Body Piercing', path: '/piercing/body' },
        { name: 'Jewelry', path: '/piercing/jewelry' }
      ]
    },
{
      title: 'THE STUDIO',
      path: '/studio',
      hasDropdown: false,
      dropdownItems: []
    },
    {
      title: 'FAQS',
      path: '/locations',
      hasDropdown: false,
      dropdownItems: []
    },
    {
      title: 'AFTERCARE',
      path: '/aftercare',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Tattoo Aftercare', path: '/aftercare/tattoo' },
        { name: 'Piercing Aftercare', path: '/aftercare/piercing' }
      ]
    },
     {
      title: 'BLOG',
      path: '/blog',
      hasDropdown: false
    },
    {
      title: 'BOOK NOW',
      path: '/book',
      hasDropdown: false,
      isButton: true
    }
  ];

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
      setHoveredItem(null);
    }
  };

  const handleDropdownItemHover = (index) => {
    if (!isMobile) {
      setHoveredItem(index);
    }
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdownOpen({});
  };

  // Mobile dropdown toggle
  const MobileDropdownToggle = ({ item, index }) => (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => toggleMobileDropdown(index)}
        className="w-full flex justify-between items-center px-4 py-3 text-white text-lg tracking-wide hover:bg-black/30 transition-colors"
      >
        {item.title}
        <span className={`text-xs transition-transform duration-300 ${mobileDropdownOpen[index] ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {/* Mobile Dropdown Items */}
      {mobileDropdownOpen[index] && (
        <div className="bg-black/40 pl-6">
          {item.dropdownItems.length > 0 ? (
            item.dropdownItems.map((dropdownItem, idx) => (
              <Link
                key={idx}
                to={dropdownItem.path}
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-300 text-base hover:text-white hover:bg-black/30 transition-colors border-l-2 border-transparent hover:border-red-600"
              >
                {dropdownItem.name}
              </Link>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500 text-sm italic">
              Coming soon
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <nav 
      className={`fixed top-0 w-full z-50 font-['Bebas_Neue','Oswald',sans-serif] transition-all duration-300
        ${scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b-4 border-red-600/80' 
          : 'bg-black/70 backdrop-blur-sm border-b-4 border-red-600'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col leading-tight hover:opacity-80 transition-opacity">
            <span className="font-['Abril_Fatface',cursive] text-2xl sm:text-3xl lg:text-4xl text-white tracking-wider uppercase drop-shadow-[2px_2px_0_#c41e3a] lg:drop-shadow-[3px_3px_0_#c41e3a]">
              Inked
            </span>
            <span className="text-[10px] sm:text-xs text-gray-300/90 tracking-widest hidden xs:block">
              TATTOOS | PIERCING | JEWELRY
            </span>
          </Link>

          {/* Desktop Navigation Menu (lg screens and up) */}
          <ul className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
            {navItems.map((item, index) => (
              <li 
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <>
                    {item.path ? (
                      <Link 
                        to={item.path}
                        className="text-white/90 hover:text-white text-base xl:text-lg tracking-wide transition-colors flex items-center gap-1 px-2 py-2 whitespace-nowrap"
                      >
                        {item.title}
                        <span className="text-xs">▼</span>
                      </Link>
                    ) : (
                      <button className="text-white/90 hover:text-white text-base xl:text-lg tracking-wide transition-colors flex items-center gap-1 px-2 py-2 whitespace-nowrap">
                        {item.title}
                        <span className="text-xs">▼</span>
                      </button>
                    )}
                    
                    {/* Desktop Dropdown Menu */}
                    {activeDropdown === index && item.dropdownItems.length > 0 && (
                      <ul className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md min-w-[200px] py-2 rounded-b-lg shadow-xl border-t-2 border-red-600">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <Link
                              to={dropdownItem.path}
                              className={`block px-4 py-3 text-white/90 text-base tracking-wide transition-all duration-200
                                ${hoveredItem === idx 
                                  ? 'bg-red-600/80 pl-6 text-white' 
                                  : 'hover:bg-black/60 hover:pl-6 hover:text-white'
                                }`}
                              onMouseEnter={() => handleDropdownItemHover(idx)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Empty dropdown to indicate  */}
                    {activeDropdown === index && item.dropdownItems.length === 0 && (
                      <div className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-md min-w-[150px] py-2 rounded-b-lg shadow-xl border-t-2 border-red-600">
                        <div className="px-4 py-2 text-gray-400 text-sm">Coming soon</div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white/90 hover:text-white text-base xl:text-lg tracking-wide transition-colors px-2 py-2 whitespace-nowrap
                      ${item.isButton 
                        ? 'bg-red-600/90 hover:bg-red-600 px-4 xl:px-6 py-2 rounded-md font-bold text-white' 
                        : 'hover:text-white'
                      }`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (below lg screens) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white/90 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white/90 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white/90 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown (below lg screens) */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 md:top-20 bg-black/95 backdrop-blur-md border-t border-white/10 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="py-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <MobileDropdownToggle item={item} index={index} />
                  ) : (
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-4 py-3 text-white/90 text-lg tracking-wide transition-colors border-b border-white/10 last:border-b-0
                        ${item.isButton 
                          ? 'bg-red-600/90 hover:bg-red-600 font-bold text-center mx-4 my-2 rounded-md text-white' 
                          : 'hover:bg-black/40'
                        }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
