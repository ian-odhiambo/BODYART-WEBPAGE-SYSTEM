import React, { useRef, useEffect, useCallback } from 'react';

import artist1Profile from '../../assets/images/artists/artist1-profile.jpg';
import artist2Profile from '../../assets/images/artists/artist2-prophile.jpg';
import artist3Profile from '../../assets/images/artists/artist3-prophile.jpg';
import artist4Profile from '../../assets/images/artists/artist4-prophile.jpg';
import artist5Profile from '../../assets/images/artists/artist5-prophile.jpg';
import artist6Profile from '../../assets/images/artists/artist6-prophile.jpg';
import artist7Profile from '../../assets/images/artists/artist7-prophile.jpg';
import artist8Profile from '../../assets/images/artists/artist8-prophile.jpg';

import work1Arm from '../../assets/images/artists-work/artist1-arm.jpg';
import work1Back from '../../assets/images/artists-work/artist1-back.png';
import work1Breast from '../../assets/images/artists-work/artist1-breast.jpg';
import work1Chest from '../../assets/images/artists-work/artist1-chest.jpg';
import work1Dragon from '../../assets/images/artists-work/artist1-dragon.jpg';
import work1Fingers from '../../assets/images/artists-work/artist1-fingers.jpg';
import work1Floral from '../../assets/images/artists-work/artist1-floral.jpg';
import work1Skull from '../../assets/images/artists-work/artist1-skull.jpg';
import work1Throat from '../../assets/images/artists-work/artist1-throat.jpg';
import work1Tribal from '../../assets/images/artists-work/artist1-tribal.jpg';

import work2Dragon from '../../assets/images/artists-work/artist2-dragon.jpg';
import work2Floral from '../../assets/images/artists-work/artist2-floral.jpg';
import work2Skull from '../../assets/images/artists-work/artist2-skull.jpg';
import work2Tribal from '../../assets/images/artists-work/artist2-tribal.jpg';

import work3Dragon from '../../assets/images/artists-work/artist3-dragon.jpg';
import work3Floral from '../../assets/images/artists-work/artist3-floral.jpg';
import work3Skull from '../../assets/images/artists-work/artist3-skull.jpg';
import work3Tribal from '../../assets/images/artists-work/artist3-tribal.jpg';

import work4Dragon from '../../assets/images/artists-work/artist4-dragon.jpg';
import work4Floral from '../../assets/images/artists-work/artist4-floral.jpg';
import work4Skull from '../../assets/images/artists-work/artist4-skull.jpg';
import work4Tribal from '../../assets/images/artists-work/artist4-tribal.jpg';

// ===== ARTIST DATA WITH ALL IMAGE PATHS EXPLICITLY LISTED =====
// Easy to see, edit, and customize
const artists = [
  {
    id: 1,
    name: "DEANNA BARRICELLA",
    profile: artist1Profile,
    works: [
      work1Arm,
      work1Back,
      work1Breast,
      work1Chest,
      work1Dragon,
      work1Fingers,
      work1Floral,
      work1Skull,
      work1Throat,
      work1Tribal
    ]
  },
  {
    id: 2,
    name: "ARTIST 2 NAME",
    profile: artist2Profile,
    works: [
      work2Dragon,
      work2Floral,
      work2Skull,
      work2Tribal,
      work1Chest,
      work1Throat,
      work1Arm,
      work1Fingers,
      work1Back,
      work1Breast
    ]
  },
  {
    id: 3,
    name: "ARTIST 3 NAME",
    profile: artist3Profile,
    works: [
      work3Dragon,
      work3Floral,
      work3Skull,
      work3Tribal,
      work1Chest,
      work1Throat,
      work1Arm,
      work1Fingers,
      work1Back,
      work1Breast
    ]
  },
  {
    id: 4,
    name: "ARTIST 4 NAME",
    profile: artist4Profile,
    works: [
      work4Dragon,
      work4Floral,
      work4Skull,
      work4Tribal,
      work1Chest,
      work1Throat,
      work1Arm,
      work1Fingers,
      work1Back,
      work1Breast
    ]
  },
  {
    id: 5,
    name: "ARTIST 5 NAME",
    profile: artist5Profile,
    works: [
      work1Arm,
      work1Back,
      work1Breast,
      work1Chest,
      work1Dragon,
      work1Fingers,
      work1Floral,
      work1Skull,
      work1Throat,
      work1Tribal
    ]
  },
  {
    id: 6,
    name: "ARTIST 6 NAME",
    profile: artist6Profile,
    works: [
      work1Arm,
      work1Back,
      work1Breast,
      work1Chest,
      work1Dragon,
      work1Fingers,
      work1Floral,
      work1Skull,
      work1Throat,
      work1Tribal
    ]
  },
  {
    id: 7,
    name: "ARTIST 7 NAME",
    profile: artist7Profile,
    works: [
      work1Arm,
      work1Back,
      work1Breast,
      work1Chest,
      work1Dragon,
      work1Fingers,
      work1Floral,
      work1Skull,
      work1Throat,
      work1Tribal
    ]
  },
  {
    id: 8,
    name: "ARTIST 8 NAME",
    profile: artist8Profile,
    works: [
      work2Dragon,
      work2Floral,
      work2Skull,
      work2Tribal,
      work1Chest,
      work1Throat,
      work1Arm,
      work1Fingers,
      work1Back,
      work1Breast
    ]
  }
];

const OurTattooists = () => {
  const carouselRefs = useRef(artists.map(() => React.createRef()));

  const scroll = useCallback((ref, direction) => {
    if (ref.current) {
      const scrollAmount = 220;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const intervals = carouselRefs.current.map((ref, index) => {
      const interval = setInterval(() => scroll(ref, 'right'), 3000);
      return interval;
    });

    // Pause on hover any carousel
    const handleMouseEnter = () => {
      intervals.forEach(clearInterval);
    };

    const handleMouseLeave = () => {
      intervals.forEach((interval, index) => {
        const newInterval = setInterval(() => scroll(carouselRefs.current[index], 'right'), 3000);
        intervals[index] = newInterval;
      });
    };

    const carouselContainer = document.querySelector('.OurTattooists .overflow-x-auto');
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', handleMouseEnter);
      carouselContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      intervals.forEach(clearInterval);
      if (carouselContainer) {
        carouselContainer.removeEventListener('mouseenter', handleMouseEnter);
        carouselContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [scroll]);

  return (
    <section className="OurTattooists w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div key={artist.id} className="space-y-4">
              <div className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer">
                <img 
                  src={artist.profile}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {artist.name}
                  </span>
                </div>
              </div>

              <div className="relative">
                <button 
                  onClick={() => scroll(carouselRefs.current[index], 'left')}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-zinc-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                >
                  ←
                </button>

                <div 
                  ref={carouselRefs.current[index]}
                  className="overflow-x-auto scroll-smooth hide-scrollbar"
                >
                  <div className="flex gap-3">
                    {artist.works.map((work, idx) => (
                      <div 
                        key={idx}
                        className="flex-shrink-0 w-[200px] h-[150px] rounded-lg overflow-hidden border border-zinc-700 hover:border-red-600 transition-colors"
                      >
                        <img 
                          src={work}
                          alt={`${artist.name} work ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => scroll(carouselRefs.current[index], 'right')}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-zinc-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default OurTattooists;
