const ChooseUs = () => {
  return (
    <section className="w-full bg-zinc-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        
        {/* Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          
          {/* Left Side - Image Card */}
          <div className="lg:w-1/2 relative h-[500px] rounded-xl overflow-hidden group">
            {/* UNSplash Image - Studio/atmosphere */}
            <img 
              src="https://images.unsplash.com/photo-1627546325713-27bdb275c0a9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwYW1lcmljYW5zJTIwd2l0aCUyMGVhciUyMHBpZXJjaW5nc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Inked NYC piercing studio with professional equipment"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay for text readability - adjust opacity as needed */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Text overlaid on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-['Abril_Fatface',cursive] mb-3">
                EXPERT PIERCERS WITH ATTENTION TO DETAIL
              </h3>
              <p className="text-gray-200 text-lg max-w-xl">
                Our experienced team is highly trained in various piercing techniques, 
                ensuring each body piercing is placed with precision and care.
              </p>
            </div>
          </div>
          
          {/* Right Side - Text Content (matches first screenshot) */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-8">
              WHY CHOOSE OUR STUDIOS FOR YOUR BODY PIERCING?
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                At our studios, we combine expertise, safety, and creativity to provide 
                the best body piercing experience. Here's what sets us apart:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">EXPERT PIERCERS WITH ATTENTION TO DETAIL</h3>
                  <p>
                    Our experienced team is highly trained in various piercing techniques, 
                    ensuring each body piercing is placed with precision and care. We take 
                    the time to assess your anatomy, discuss your goals, and recommend the 
                    best placement for both aesthetics and healing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">HYGIENE & SAFETY FIRST</h3>
                  <p>
                    We maintain the highest sterilization standards by using implant-grade 
                    titanium, gold, and stainless steel jewelry, as well as sterile, single-use 
                    needles for every piercing. Our tattoo and piercing studio follows strict 
                    hygiene protocols to ensure a clean and safe environment for all clients.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">WIDE SELECTION OF PIERCING JEWELRY</h3>
                  <p>
                    Choose from an extensive collection of barbells, labrets, hoops, and studs 
                    in different styles, sizes, and high-quality materials. Whether you're 
                    looking for a classic silver hoop or a bold gold labret, we have options 
                    to suit your taste and lifestyle.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-red-600 mt-8"></div>
          </div>
        </div>

        {/* ===== SECTION 2: Bottom portion (Screenshots 3 & 4 combined) ===== */}
        {/* Text Left, Image Right (opposite orientation) */}
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          
          {/* Right Side - Image Card (reversed order) */}
          <div className="lg:w-1/2 relative h-[500px] rounded-xl overflow-hidden group">
            {/* Unsplash Image - Piercing/jewelry closeup */}
            <img 
              src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Closeup of various body piercing jewelry options"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Text overlaid on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-['Abril_Fatface',cursive] mb-3">
                TYPES OF BODY PIERCINGS WE OFFER
              </h3>
              <p className="text-gray-200 text-lg max-w-xl">
                From subtle to statement-making, our studio offers a full range 
                of piercing options for every style.
              </p>
            </div>
          </div>
          
          {/* Left Side - Text Content (matches third and fourth screenshots) */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-8">
              TYPES OF BODY PIERCINGS WE OFFER
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                From subtle to statement-making, our studio offers a full range of piercing 
                options. Don't see your dream piercing on the list? Our expert piercers can 
                accommodate custom placements and unique requests. Whether you're looking for 
                a rare piercing or a complex project, we're happy to discuss your vision and 
                find the perfect option for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Ear Piercings Column */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-3 text-red-400">EAR PIERCINGS</h3>
                  <ul className="space-y-2">
                    <li><span className="text-white font-semibold">Earlobe Piercing</span> – A timeless classic, perfect for first-time piercings.</li>
                    <li><span className="text-white font-semibold">Cartilage & Helix Piercing</span> – Add dimension and style with these upper-ear placements.</li>
                    <li><span className="text-white font-semibold">Tragus Piercing</span> – A trendy choice that complements any curated ear look.</li>
                  </ul>
                </div>
                
                {/* Facial & Oral Piercings Column */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-3 text-red-400">FACIAL & ORAL PIERCINGS</h3>
                  <ul className="space-y-2">
                    <li><span className="text-white font-semibold">Nostril & Nose Piercing</span> – Whether you prefer a stud or a hoop, our precision piercers will ensure perfect placement.</li>
                    <li><span className="text-white font-semibold">Eyebrow Piercing</span> – A bold look that enhances facial symmetry.</li>
                    <li><span className="text-white font-semibold">Lip & Labret Piercing</span> – A stylish addition to your facial aesthetic.</li>
                    <li><span className="text-white font-semibold">Tongue Piercing</span> – One of the most expressive oral piercings, carefully placed for comfort.</li>
                  </ul>
                </div>
                
                {/* Body Piercings Column - spans full width on mobile, half on desktop */}
                <div className="md:col-span-2 mt-4">
                  <h3 className="text-white text-xl font-bold mb-3 text-red-400">BODY PIERCINGS</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><span className="text-white font-semibold">Navel Piercing</span> – The perfect way to accessorize your belly button.</li>
                    <li><span className="text-white font-semibold">Nipple Piercing</span> – A bold and confident statement, performed with utmost care.</li>
                    <li><span className="text-white font-semibold">Genital Piercing</span> – A private and personalized service, performed with care, precision, and professionalism.</li>
                    <li><span className="text-white font-semibold">Surface & Dermal Piercings</span> – Unique placements for those looking for something distinctive.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-red-600 mt-8"></div>
          </div>
        </div>

        {/* Optional small print - matches previous component patterns */}
        <div className="text-center text-gray-500 text-sm mt-16">
          <p>Walk-ins welcome seven days a week • Free consultations available</p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;