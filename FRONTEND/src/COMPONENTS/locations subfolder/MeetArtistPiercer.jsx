import React, { useState, useRef, useEffect } from 'react';

// ===== IMPORT ARTIST PROFILE IMAGES =====
// Update these paths to match your actual image locations
import artist1Profile from '../../assets/images/artists/artist1-profile.jpg';
import artist2Profile from '../../assets/images/artists/artist2-prophile.jpg';
import artist3Profile from '../../assets/images/artists/artist3-prophile.jpg';
import artist4Profile from '../../assets/images/artists/artist4-prophile.jpg';
import artist5Profile from '../../assets/images/artists/artist5-prophile.jpg';
import artist6Profile from '../../assets/images/artists/artist6-prophile.jpg';
import artist7Profile from '../../assets/images/artists/artist7-prophile.jpg';
import artist8Profile from '../../assets/images/artists/artist8-prophile.jpg';

// ===== IMPORT ARTIST WORK SAMPLES =====
// Format: artistId_work1.jpg, artistId_work2.jpg, etc.
// Note: Only artist1 work samples currently exist. Artists 2-4 use artist1 as placeholder.
import artist1work1 from '../../assets/images/artists-work/artist1-skull.jpg';
import artist1work2 from '../../assets/images/artists-work/artist1-floral.jpg';
import artist1work3 from '../../assets/images/artists-work/artist1-dragon.jpg';
import artist1work4 from '../../assets/images/artists-work/artist1-tribal.jpg';

import artist2work1 from '../../assets/images/artists-work/artist2-skull.jpg';
import artist2work2 from '../../assets/images/artists-work/artist2-floral.jpg';
import artist2work3 from '../../assets/images/artists-work/artist2-dragon.jpg';
import artist2work4 from '../../assets/images/artists-work/artist2-tribal.jpg';

import artist3work1 from '../../assets/images/artists-work/artist3-skull.jpg';
import artist3work2 from '../../assets/images/artists-work/artist3-floral.jpg';
import artist3work3 from '../../assets/images/artists-work/artist3-dragon.jpg';
import artist3work4 from '../../assets/images/artists-work/artist3-tribal.jpg';

import artist4work1 from '../../assets/images/artists-work/artist4-skull.jpg';
import artist4work2 from '../../assets/images/artists-work/artist4-floral.jpg';
import artist4work3 from '../../assets/images/artists-work/artist4-dragon.jpg';
import artist4work4 from '../../assets/images/artists-work/artist4-tribal.jpg';

// ===== ARTIST DATA STRUCTURE =====
// Complete artist information including profiles and work samples
const artistsData = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Tattoo Artist",
    specialty: "Black & Grey Realism",
    profileImage: artist1Profile,
    workSamples: [artist1work1, artist1work2, artist1work3, artist1work4],
    contact: {
      email: "marcus.chen@inkednyc.com",
      instagram: "@marcuschen.ink",
      availability: "Booking for April 2024",
      phone: "(212) 555-0123"
    }
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "Tattoo Artist",
    specialty: "Neo-Traditional",
    profileImage: artist2Profile,
    workSamples: [artist2work1, artist2work2, artist2work3, artist2work4],
    contact: {
      email: "sarah.r@inkednyc.com",
      instagram: "@sarahrodriguez.art",
      availability: "Walk-ins welcome",
      phone: "(212) 555-0124"
    }
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Tattoo Artist",
    specialty: "Japanese Traditional",
    profileImage: artist3Profile,
    workSamples: [artist3work1, artist3work2, artist3work3, artist3work4],
    contact: {
      email: "j.wilson@inkednyc.com",
      instagram: "@jameswilson.tattoo",
      availability: "Available next week",
      phone: "(212) 555-0125"
    }
  },
  {
    id: 4,
    name: "Elena Martinez",
    role: "Piercer",
    specialty: "Fine Jewelry & Curations",
    profileImage: artist4Profile,
    workSamples: [artist4work1, artist4work2, artist4work3, artist4work4],
    contact: {
      email: "elena.m@inkednyc.com",
      instagram: "@elena.piercings",
      availability: "Appointment only",
      phone: "(212) 555-0126"
    }
  },
  {
    id: 5,
    name: "David Kim",
    role: "Tattoo Artist",
    specialty: "Fine Line & Dotwork",
    profileImage: artist5Profile,
    workSamples: [artist1work1, artist1work2, artist1work3, artist1work4], // Placeholder
    contact: {
      email: "david.kim@inkednyc.com",
      instagram: "@davidkim.ink",
      availability: "Booking now",
      phone: "(212) 555-0127"
    }
  },
  {
    id: 6,
    name: "Jessica Taylor",
    role: "Tattoo Artist",
    specialty: "Watercolor",
    profileImage: artist6Profile,
    workSamples: [artist2work1, artist2work2, artist2work3, artist2work4], // Placeholder
    contact: {
      email: "jessica.t@inkednyc.com",
      instagram: "@jessicataylor.art",
      availability: "Limited spots",
      phone: "(212) 555-0128"
    }
  },
  {
    id: 7,
    name: "Mike Thompson",
    role: "Piercer",
    specialty: "Advanced Body Piercing",
    profileImage: artist7Profile,
    workSamples: [artist3work1, artist3work2, artist3work3, artist3work4], // Placeholder
    contact: {
      email: "mike.t@inkednyc.com",
      instagram: "@mikethompson.pierce",
      availability: "Walk-ins Fri-Sun",
      phone: "(212) 555-0129"
    }
  },
  {
    id: 8,
    name: "Lisa Park",
    role: "Tattoo Artist",
    specialty: "Blackwork",
    profileImage: artist8Profile,
    workSamples: [artist4work1, artist4work2, artist4work3, artist4work4], // Placeholder
    contact: {
      email: "lisa.park@inkednyc.com",
      instagram: "@lisapark.tattoo",
      availability: "Booking May 2024",
      phone: "(212) 555-0130"
    }
  }
];

const MeetArtistPiercer = () => {
  // state management
  const [selectedArtist, setSelectedArtist] = useState(artistsData[0]); // Default to first artist
  const [workScrollPosition, setWorkScrollPosition] = useState(0);
  const workCarouselRef = useRef(null);
  
  // use state for carousel's autoplay
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0); // Track current index for auto-play
  const [isHovering, setIsHovering] = useState(false); // Track hover state for pause functionality
  const carouselIntervalRef = useRef(null); // Reference to interval for cleanup
  const artistCarouselRef = useRef(null); // Reference to artist carousel container

  //auto play functionality
  // Function to move to next artist
  const goToNextArtist = () => {
    const nextIndex = (currentArtistIndex + 1) % artistsData.length;
    setCurrentArtistIndex(nextIndex);
    setSelectedArtist(artistsData[nextIndex]);
    
    // Optional: Smooth scroll the carousel to show the selected artist
    if (artistCarouselRef.current) {
      const cardWidth = 280 + 24; // Card width + gap
      artistCarouselRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Function to go to previous artist (kept for completeness)
  const goToPrevArtist = () => {
    const prevIndex = (currentArtistIndex - 1 + artistsData.length) % artistsData.length;
    setCurrentArtistIndex(prevIndex);
    setSelectedArtist(artistsData[prevIndex]);
    
    if (artistCarouselRef.current) {
      const cardWidth = 280 + 24;
      artistCarouselRef.current.scrollTo({
        left: prevIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // ===== NEW: SETUP AUTO-PLAY INTERVAL =====
  // Start auto-play when component mounts and when not hovering
  useEffect(() => {
    // Clear any existing interval
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
    }

    // Only set new interval if not hovering
    if (!isHovering) {
      carouselIntervalRef.current = setInterval(() => {
        goToNextArtist();
      }, 5000); // Change artist every 5 seconds
    }

    // Cleanup on unmount or when isHovering changes
    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [isHovering, currentArtistIndex]); // Re-run when hover state changes

  //  SYNC SELECTED ARTIST WITH INDEX WHEN MANUALLY CLICKED
  // This ensures the auto-play continues from the correct index after manual selection
  const handleArtistClick = (artist) => {
    const newIndex = artistsData.findIndex(a => a.id === artist.id);
    setCurrentArtistIndex(newIndex);
    setSelectedArtist(artist);
    
    // Reset interval timer on manual click (Option A from requirements)
    // This clears and restarts the interval, giving a full 5 seconds from the click
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
      if (!isHovering) {
        carouselIntervalRef.current = setInterval(() => {
          goToNextArtist();
        }, 5000);
      }
    }
  };

  //this is the scroll function =====
  const scrollWorkLeft = () => {
    if (workCarouselRef.current) {
      workCarouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setWorkScrollPosition(workCarouselRef.current.scrollLeft - 300);
    }
  };

  const scrollWorkRight = () => {
    if (workCarouselRef.current) {
      workCarouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setWorkScrollPosition(workCarouselRef.current.scrollLeft + 300);
    }
  };

  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* header */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-4">
            MEET OUR RESIDENT ARTISTS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Each of our tattoo artists brings their own expertise and artistic touch, 
            making Inked New York a powerhouse of talent. From bold, illustrative pieces 
            to delicate linework, our artists push creative boundaries to craft unforgettable 
            tattoos. Browse our artist profiles and book an appointment to start your tattoo journey.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/*Top carousel consisting of the artist profile */}
        <div 
          className="mb-16"
          onMouseEnter={() => setIsHovering(true)} // NEW: Pause on hover
          onMouseLeave={() => setIsHovering(false)} // NEW: Resume on leave
        >
          <h3 className="text-white text-2xl mb-6 tracking-wider flex items-center gap-3">
            <span className="w-1 h-8 bg-red-600"></span>
            MEET THE ARTISTS & PIERCERS
            {/* stopping the autoplay when the cursor hovers over the carousel */}
            {!isHovering && (
              <span className="text-xs text-gray-400 ml-auto animate-pulse">
                Auto-playing • Hover to pause
              </span>
            )}
          </h3>
          
          {/* Horizontal scrollable artist cards - Added ref for auto-scroll */}
          <div 
            ref={artistCarouselRef}
            className="overflow-x-auto pb-6 hide-scrollbar"
          >
            <div className="flex gap-6 min-w-max">
              {artistsData.map((artist, index) => (
                <div
                  key={artist.id}
                  onClick={() => handleArtistClick(artist)} // UPDATED: Use new handler
                  className={`
                    relative w-[280px] cursor-pointer transition-all duration-300
                    ${selectedArtist.id === artist.id 
                      ? 'scale-105 ring-4 ring-red-600' 
                      : 'hover:scale-102 hover:ring-2 hover:ring-red-400/50'
                    }
                  `}
                >
                  {/* Artist Card - Big size matching screenshot */}
                  <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                    {/* Profile Image Container */}
                    <div className="h-[280px] overflow-hidden">
                      <img 
                        src={artist.profileImage}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Artist Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                      <h4 className="text-white text-xl font-bold">{artist.name}</h4>
                      <p className="text-red-400 text-sm">{artist.role}</p>
                      <p className="text-gray-300 text-xs mt-1">{artist.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* manual navigation arrows for artist carousel */}
          <div className="flex justify-end gap-2 mt-4">
            <button 
              onClick={goToPrevArtist}
              className="w-8 h-8 bg-zinc-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-300 text-sm"
              aria-label="Previous artist"
            >
              ←
            </button>
            <button 
              onClick={goToNextArtist}
              className="w-8 h-8 bg-zinc-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-300 text-sm"
              aria-label="Next artist"
            >
              →
            </button>
          </div>
        </div>

        {/* selected artist details */}
        {selectedArtist && (
          <div className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700">
            
            {/* Artist Info Header */}
            <div className="flex items-center gap-6 mb-8">
              {/* Small profile thumbnail */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-red-600">
                <img 
                  src={selectedArtist.profileImage}
                  alt={selectedArtist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white text-3xl font-['Abril_Fatface',cursive]">
                  {selectedArtist.name}
                </h3>
                <p className="text-red-400 text-lg">{selectedArtist.role} • {selectedArtist.specialty}</p>
              </div>
            </div>

            {/* Two-column layout: Contact Info + Work Samples */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* LEFT COLUMN - Contact Details (Placeholder Structure) */}
              <div className="bg-zinc-900/80 rounded-lg p-6 border border-zinc-700">
                <h4 className="text-white text-xl mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-red-600"></span>
                  Contact & Availability
                </h4>
                
                {/* Contact Details - Populate these later */}
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">{selectedArtist.contact.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <p className="text-white">{selectedArtist.contact.instagram}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">{selectedArtist.contact.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Availability</p>
                    <p className="text-white">{selectedArtist.contact.availability}</p>
                  </div>
                </div>

                {/* Placeholder for additional fields - Add more as needed */}
                <div className="mt-6 pt-6 border-t border-zinc-700">
                  <p className="text-gray-400 text-sm italic">
                    {/* Additional contact fields can go here */}
                    Consultation available upon request
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN (spans 2 columns) - Work Samples Carousel */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white text-xl flex items-center gap-2">
                    <span className="w-1 h-6 bg-red-600"></span>
                    Featured Work
                  </h4>
                  
                  {/* Navigation Arrows  */}
                  <div className="flex gap-2">
                    <button 
                      onClick={scrollWorkLeft}
                      className="w-10 h-10 bg-zinc-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                      aria-label="Previous work"
                    >
                      ←
                    </button>
                    <button 
                      onClick={scrollWorkRight}
                      className="w-10 h-10 bg-zinc-700 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                      aria-label="Next work"
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* Work Samples Carousel - Small Cards */}
                <div 
                  ref={workCarouselRef}
                  className="overflow-x-auto hide-scrollbar"
                >
                  <div className="flex gap-4 min-w-max pb-4">
                    {selectedArtist.workSamples.map((work, index) => (
                      <div 
                        key={index}
                        className="w-[200px] group cursor-pointer"
                      >
                        <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg border border-zinc-700 hover:border-red-600 transition-all duration-300">
                          {/* Work Image */}
                          <div className="h-[200px] overflow-hidden">
                            <img 
                              src={work}
                              alt={`${selectedArtist.name}'s work ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          {/* Optional caption */}
                          <div className="p-3 bg-zinc-900">
                            <p className="text-gray-400 text-xs text-center">
                              {index === 0 ? 'Skull Design' : 
                               index === 1 ? 'Floral Pattern' :
                               index === 2 ? 'Dragon' : 'Skull Series'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom CSS to hide scrollbars but keep functionality */}
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hover\:scale-102:hover {
            transform: scale(1.02);
          }
        `}</style>
      </div>
    </section>
  );
};

export default MeetArtistPiercer;