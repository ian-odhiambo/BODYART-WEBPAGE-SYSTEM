const PierceGuideline2 = () => {
  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/*  SECTION A: Image Left / Text Right  */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF0dG9vc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Piercing healing process - what to avoid"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay for the background */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              WHAT TO AVOID DURING HEALING
            </h2>
            
            <ul className="space-y-3 text-gray-300">
              <li><span className="text-white font-bold">Twisting or Rotating Jewelry:</span> This can introduce bacteria and delay healing.</li>
              <li><span className="text-white font-bold">Using Alcohol or Hydrogen Peroxide:</span> These can dry out and damage healing tissue.</li>
              <li><span className="text-white font-bold">Swimming in Public Pools or Oceans:</span> Showers are fine, but submerging in water can increase infection risks.</li>
              <li><span className="text-white font-bold">Sleeping on Your Piercing:</span> This can cause irritation and prolong healing.</li>
              <li><span className="text-white font-bold">Changing Jewelry Too Soon:</span> Always wait until the piercing is fully healed before changing jewelry.</li>
              <li><span className="text-white font-bold">Using Petroleum-Based Products:</span> Petroleum jelly can clog the piercing and trap bacteria.</li>
              <li><span className="text-white font-bold">Using Antibacterial Soap:</span> While cleanliness is important, antibacterial soap can be too harsh and lead to irritation. Use it for hand washing, but stick to a simple saline solution when cleaning your piercing.</li>
            </ul>
          </div>
        </div>

        {/*  SECTION B: Text Left / Image  */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            {/* Signs of Infection Section */}
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-4">
              SIGNS OF INFECTION & WHEN TO SEEK HELP
            </h2>
            
            {/*logo */}
            <div className="mb-4 text-gray-300 font-bold text-lg tracking-wider">
              BVLA • BODY VISION LOS ANGELES
            </div>
            
            <ul className="space-y-3 text-gray-300 mb-8">
              <li><span className="text-white font-bold">Excessive Redness & Swelling</span> that worsens instead of improving.</li>
              <li><span className="text-white font-bold">Thick Yellow or Green Discharge</span> with a foul odor.</li>
              <li><span className="text-white font-bold">Severe Pain or Heat Around the Piercing,</span> which can indicate a potential infection.</li>
              <li><span className="text-white font-bold">Unusual Bumps or Lumps</span> forming around the piercing site.</li>
            </ul>
            
            <p className="text-gray-300 text-lg mb-8 italic border-l-4 border-red-600 pl-4">
              If you experience any of these symptoms with your new body piercing, contact a professional piercer or physician for guidance.
            </p>
            
            {/* Long-term Care Section */}
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-4">
              LONG-TERM PIERCING CARE
            </h2>
            
            <ul className="space-y-3 text-gray-300 mb-6">
              <li><span className="text-white font-bold">Regular Cleaning:</span> Even after healing, using a saline solution or mild soap and water can help keep your piercing clean and free from buildup.</li>
              <li><span className="text-white font-bold">Use High-Quality Jewelry:</span> Titanium, gold, and stainless steel are best for long-term wear.</li>
              <li><span className="text-white font-bold">Downsize Jewelry:</span> Some piercings may require smaller jewelry after swelling subsides to avoid movement and irritation.</li>
              <li><span className="text-white font-bold">Avoid Cheap or Low-Quality Metals:</span> These can cause irritation, reactions, or migration of the piercing.</li>
            </ul>
            
            {/* Healing Times Section */}
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-4">
              PIERCING HEALING TIME ESTIMATES
            </h2>
            
            <p className="text-gray-300 text-lg mb-4">
              Everyone's body heals differently, but here are some general estimates.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
              <p><span className="text-white font-bold">Earlobe piercing:</span> 6-8 weeks</p>
              <p><span className="text-white font-bold">Cartilage & tragus:</span> 4-12 months</p>
              <p><span className="text-white font-bold">Nostril & lip:</span> 2-3 months</p>
              <p><span className="text-white font-bold">Navel piercing:</span> 6-12 months</p>
              <p><span className="text-white font-bold">Tongue piercing:</span> 4-8 weeks</p>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1594054423620-a92ebb04e140?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvcyUyMG9mJTIwYmFuZGFnZXMlMjBhbmQlMjBvdGhlciUyMG1lZGljYWwlMjBlcXVpcG1lbnR8ZW58MHx8MHx8fDA%3D" 
              alt="High-quality piercing jewelry and aftercare"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* decorative footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Follow these guidelines for safe and healthy piercing healing</p>
          <div className="w-16 h-0.5 bg-red-600/50 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default PierceGuideline2;