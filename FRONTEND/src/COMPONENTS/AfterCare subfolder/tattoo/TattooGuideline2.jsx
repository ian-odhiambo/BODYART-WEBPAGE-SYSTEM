const TattooGuideline2 = () => {
  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* The first section: Image Left / Text Right (Screenshots 1-2) ===== */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[550px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Long-term tattoo care with moisturizer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              LONG-TERM TATTOO CARE & PRESERVATION
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Once your tattoo has fully healed (about 4 weeks, though exact times can vary), 
              follow these steps to keep it looking sharp and vibrant:
            </p>
            
            <ul className="space-y-3 text-gray-300">
              <li><span className="text-white font-bold">Moisturize Daily:</span> Continue applying unscented lotion regularly to lock in moisture, keep the skin hydrated, and prevent fading.</li>
              <li><span className="text-white font-bold">Sun Protection:</span> Always apply sunscreen (SPF 30 or higher) before exposing your tattoo to direct sunlight.</li>
              <li><span className="text-white font-bold">Avoid Excessive Exfoliation:</span> Harsh scrubs or exfoliants can cause your tattoo to fade prematurely.</li>
              <li><span className="text-white font-bold">Stay Hydrated:</span> Drinking enough water helps maintain your skin health, which directly affects how your tattoo ages.</li>
              <li><span className="text-white font-bold">Follow Good Skin Care Practices:</span> Keeping up with general skin care routines, such as moisturizing and avoiding excessive sun exposure, helps maintain tattoo vibrancy.</li>
              <li><span className="text-white font-bold">Avoid Harsh Chemicals:</span> Products with alcohol, peroxide, or strong acids can degrade tattoo ink over time. Stick with gentle, skin-friendly products.</li>
              <li><span className="text-white font-bold">Check for Touch-Up Needs:</span> Some tattoos, especially those in high-friction areas, may require long-term touch-ups to maintain their clarity and vibrancy.</li>
            </ul>
          </div>
        </div>

        {/* the second section Text Left / Image Right (Screenshots 3-4) ===== */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              THINK YOU NEED TO TOUCH UP YOUR TATTOO?
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              If you notice any inconsistencies or fading after your tattoo has fully healed, 
              you may be eligible for a free touch-up. Contact any of our Inked Studios 
              within 60 days of your appointment to discuss your options. If you live out of 
              state, reach out to inquire about possible exceptions.
            </p>
            
            <div className="bg-zinc-800/50 border-l-4 border-red-600 p-4 mb-6">
              <p className="text-gray-300 italic">
                <span className="text-white font-bold">Note:</span> Hand, neck, foot, finger, and face tattoos are not eligible for 
                complimentary touch-ups due to natural exfoliation in these areas.
              </p>
            </div>
            
            <h3 className="text-white text-2xl font-['Abril_Fatface',cursive] mb-4">
              MAINTAIN YOUR TATTOO FOR THE LONG HAUL
            </h3>
            
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Your tattoo is an investment, and following proper tattoo care instructions 
              ensures it looks great for years to come. Follow these steps carefully, keep 
              your skin hydrated, and protect your ink from sun exposure to maintain its 
              vibrancy. If you have any concerns, don't hesitate to reach out to our tattoo 
              artists for personalized aftercare advice or to schedule a touch-up.
            </p>
            
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              For any questions or concerns, contact any of our Inked Studio locations.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Thinking about adding to your body art? Check out our body piercing services 
              to learn how we can bring your piercing vision to life with care and precision.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[550px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1714787283992-715070658264?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsYWNrJTIwQW1lcmljYW5zJTIwd2l0aCUyMGNvbG9yZnVsJTIwdGF0dG9vZXN8ZW58MHx8MHx8fDA%3D" 
              alt="Tattoo touch-up and consultation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* some decoratios to spice up things */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Proper aftercare ensures your tattoo stays vibrant for years to come</p>
          <div className="w-16 h-0.5 bg-red-600/50 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default TattooGuideline2;