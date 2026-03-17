const StudioShowcase = () => {
  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/*  Image Left / Text Right  */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {/* Left - Image */}
          <div className="lg:w-1/2 relative h-[450px] lg:h-[500px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Inked Magazine studio space"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Right - Text */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              THE HOME OF INKED MAGAZINE
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Unlike any other tattoo studio, Inked NYC is also home to the iconic Inked Magazine. 
              Clients at our studio have a unique opportunity to witness behind-the-scenes glimpses 
              of photo shoots, interviews with top artists, and exclusive content creation for the 
              magazine. Getting a tattoo here means stepping into a space where tattoo culture isn't 
              just practiced—it's documented and celebrated.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A LEGACY OF INK: NYC'S PREMIER TATTOO DESTINATION
            </p>
          </div>
        </div>

        {/*Full-Width Text Columns*/}
        <div className="mb-20">
          <div className="bg-zinc-800/50 rounded-xl p-8 md:p-12 border border-zinc-700">
            <h3 className="text-white text-2xl md:text-3xl font-['Abril_Fatface',cursive] mb-6">
              A LEGACY OF INK: NYC'S PREMIER TATTOO DESTINATION
            </h3>
            
            {/* Two-column text layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Our NYC location is our flagship tattoo studio, bringing together some of the top 
                tattoo artists in NYC in a space dedicated to high-end artistry. What began as an 
                iconic publication celebrating tattoo culture has evolved into an internationally 
                recognized brand, now offering an elevated studio experience in the heart of Manhattan.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Known for its expert artists, diverse styles, and commitment to excellence, Inked NYC 
                continues to set the standard for custom tattooing in one of the world's most vibrant 
                cities. TATTOOS TAILORED TO YOU — At Inked NYC, every tattoo is a custom piece of art 
                designed specifically for the client.
              </p>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              Whether it's a small, meaningful symbol or a large-scale sleeve, we take the time to bring 
              your vision to life with unmatched craftsmanship. Our team includes some of the best tattoo 
              artists in New York City, ensuring expert-level precision and creativity in every piece.
            </p>
          </div>
        </div>

        {/*  SECTION C: Text Left / Image Right */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {/* Left - Text */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              OUR SPECIALTIES
            </h2>
            
            {/* Specialties list in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-3 text-gray-300">
                <li><span className="text-white font-bold">Realism</span> – Breathtakingly detailed tattoos that showcase hyper-realistic detail.</li>
                <li><span className="text-white font-bold">Black-and-Grey</span> – A classic, timeless approach using smooth shading and contrast.</li>
                <li><span className="text-white font-bold">Portraits</span> – Our artists bring portraits to life with striking realism.</li>
                <li><span className="text-white font-bold">Fine-Line & Micro</span> – Clean, modern, elegant styles with delicate details.</li>
              </ul>
              <ul className="space-y-3 text-gray-300">
                <li><span className="text-white font-bold">Blackwork</span> – Bold, high-contrast designs that emphasize solid black ink.</li>
                <li><span className="text-white font-bold">Watercolor</span> – Soft, painterly designs that mimic brushstrokes.</li>
                <li><span className="text-white font-bold">3D Tattoos</span> – Optical illusions and hyper-detailed designs.</li>
                <li><span className="text-white font-bold">And More</span> – Whatever your vision, our artists make it reality.</li>
              </ul>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              PROFESSIONAL BODY PIERCING — In addition to world-class tattoo artistry, Inked NYC offers 
              expert body piercing services. Our highly skilled piercers provide a range of piercing options, 
              from classic ear piercings to complex body piercing projects.
            </p>
          </div>
          
          {/* Right - Image */}
          <div className="lg:w-1/2 relative h-[450px] lg:h-[500px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Professional piercing at Inked NYC"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/*  Stacked Headings  */}
        <div className="space-y-12">
          {/* Heading 1 - Largest */}
          <div>
            <h3 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-4">
              ACCESSIBILITY & ATMOSPHERE
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              Clients from across the country choose our studio for its reputation as one of the best tattoo 
              parlors New York City has to offer, known for its artistry, professionalism, and welcoming 
              environment. Our studio blends art, music, and culture, creating a space where every client 
              feels at home.
            </p>
          </div>
          
          {/* Heading 2 - Medium */}
          <div className="pl-4 md:pl-8">
            <h4 className="text-white text-2xl md:text-3xl font-['Abril_Fatface',cursive] mb-4">
              COMFORT & CARE
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              We prioritize client comfort from consultation to aftercare, making sure every client feels 
              at ease throughout the process. With a strong focus on inclusivity, we are committed to providing 
              a welcoming environment for individuals of all backgrounds and needs.
            </p>
          </div>
          
          {/* Heading 3 - Smaller */}
          <div className="pl-8 md:pl-16">
            <h5 className="text-white text-xl md:text-2xl font-['Abril_Fatface',cursive] mb-4">
              AN INCLUSIVE SPACE
            </h5>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Our space is designed with comfort in mind, featuring an open layout that allows easy movement 
              and private rooms for those who prefer a more secluded experience. Whether you're coming in for 
              a consultation, a full sleeve, or a piercing, our goal is to provide an inclusive, comfortable 
              environment that reflects the vibrant tattoo scene in New York City.
            </p>
          </div>
          
          {/* Final Thank You Note */}
          <div className="mt-12 pt-8 border-t border-zinc-700 text-center">
            <p className="text-gray-400 text-lg italic max-w-3xl mx-auto">
              "At the end of the day, Our Tattoos & Piercings Studios is our way of saying thank you to the distinguisged clientelle who have chose and entrusted our body artist to convey it to their precious bodies which are a delicate canva to paint on our thoughts and the meaning they bear like beautiful scars
              
              Thank you for entrusting us with your feedback through interacting with our Booking section, we could'nt have done it without you"              
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioShowcase;