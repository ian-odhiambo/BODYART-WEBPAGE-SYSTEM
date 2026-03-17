import { Link } from 'react-router-dom';

// import images from the assets folder 
import locationImage1 from '../../assets/images/artists/tatoo-studio-hero.jpg'; // Street/entrance shot
import locationImage2 from '../../assets/images/Address/location-2.jpg'; // Studio interior
import locationMapImage from '../../assets/images/Address/location-map.jpg'; // Map/neighborhood

const LocationAddress = () => {
  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/*SECTION 1: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Side - Image Card */}
          <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden group">
            <img 
              src={locationImage1}
              alt="Inked NYC studio entrance on 23rd Street"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Text overlaid on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-['Abril_Fatface',cursive] mb-2">VISIT INKED NYC</h3>
              <p className="text-gray-200 text-lg">ADDRESS, HOURS & DIRECTIONS</p>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              OUR TATTOOS & PIERCINGS STUDIOS
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <p className="text-white font-semibold mb-1">ADDRESS</p>
                <p>Kimathi Street</p>
                <p>Nairobi,  10011</p>
                <p className="text-red-400 mt-2">(585) 501-2911</p>
              </div>
              
              <div>
                <p className="text-white font-semibold mb-1">HOURS OF OPERATION</p>
                <p>Mon – Saturday: 11am – 9pm</p>
                <p>Sunday: 12pm – 8pm</p>
              </div>
              
              {/* Decorative line */}
              <div className="w-16 h-1 bg-red-600"></div>
            </div>
          </div>
        </div>

        {/*  SECTION 2: Text Left */}
        <div className="flex flex-col lg:flex-row-reverse gap-8 mb-16">
          {/* Right Side - Image Card (in reverse order) */}
          <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden group">
            <img 
              src={locationImage2}
              alt="Inked NYC studio interior with artists at work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Text overlaid on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-['Abril_Fatface',cursive] mb-2">ABOUT INKED NYC</h3>
              <p className="text-gray-200">Premier Manhattan Tattoo Studio</p>
            </div>
          </div>
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              ABOUT OUR TATTOOS & PIERCINGS STUDIOS
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Inked NYC is a premier Manhattan tattoo studio and gallery, established by the founders of Inked Magazine. After publishing over 100 issues featuring celebrity artists, models, and musicians, we set out to create a 360° Inked experience for tattoo enthusiasts.
              </p>
              
              <p>
                For years, for some time after building our tattoos and Piercings studios which is a  favorite choices for celebrity clientele whom i dont wish to disclose as per the personal agreement set between our tatoos and piercings studios and them, they  our artists for the kind of body art they specialize in.
              </p>
              
              <p>
                Now, it's your turn to experience the best of our studios. Step into our studio and let our talented tattoo artists bring your vision to life.
              </p>
              
              {/* Button */}
              <div className="pt-4">
                <Link 
                  to="/book"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
                >
                  BOOK A FREE CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Full-width Image */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden group mb-8">
          <img 
            src={locationMapImage}
            alt="Map showing Inked NYC location in Chelsea, Manhattan"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Content overlaid on full-width image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Abril_Fatface',cursive] mb-6">
              WHAT IS TATTOOS & PIERCINGS STUCIOS
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4 text-gray-200 text-base md:text-lg">
              <p>
                What started as conversations between local artists has quickly become reality. We recently came together to open our doors, combining our individual talents to form a studio built on mutual respect and a shared vision of excellence. We invite you to experience a space where community meets high-end tattoo and piercing artistry
              </p>
              
              <p>
                With access to unparalleled talent, we knew that the physical studios needed to reflect the quality and aesthetic that the Inked community has come to know and love. Our vision was to create spaces that felt more like modern art galleries — edgy, refined, and elevated — while staying true to the essence of our studio's bold identity.
              </p>
              
              <p>
                When we opened our first studio on Kimathi Street, we set out to create more than just a tattoo shop. Located in the CBD, this space is the foundation of our vision. As we grow and work toward opening new branches, our commitment remains the same: top-tier artistry and an unforgettable experience for every client.
              </p>
              
              <p>
                Through this collaboration between between and among body artists we have been able to merge the world of cutting-edge tattoo culture with a sophisticated, upscale environment — setting a new standard for the industry.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="w-24 h-1 bg-red-600 mt-8"></div>
          </div>
        </div>

        {/* Optional: Small print/credits */}
        <div className="text-center text-gray-500 text-sm mt-4">
          <p>INK|JEWELLERY|PIERCINGS • Kimathi Street • Nairobi-cbd</p>
        </div>
      </div>
    </section>
  );
};

export default LocationAddress;