const TattoGuideline = () => {
  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/*first section Image Left / Text Right (Screenshots 1-3) ===== */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
            <img 
              src="https://plus.unsplash.com/premium_photo-1707093168819-585dd5331013?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvJTIwb2YlMjBzYW1vYW4lMjB0cmliYWwlMjB0YXR0b3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Tattoo aftercare with bandage and products"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay - adjust opacity as needed */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              IMMEDIATE TATTOO AFTERCARE: THE FIRST 48 HOURS
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              After completing your tattoo, your tattoo artist will cover it with a bandage, plastic wrap, 
              or saniderm-style film to protect it from bacteria and external contaminants. Here's what you 
              need to do:
            </p>
            
            {/* Traditional Bandage Section */}
            <div className="mb-6">
              <h3 className="text-white text-xl font-bold mb-3 text-red-400">
                IF YOUR TATTOO ARTIST USED A TRADITIONAL BANDAGE:
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>Leave the adhesive bandage on for 2-4 hours to allow your skin to begin healing.</li>
                <li>After removing the bandage, gently wash your skin with warm water and unscented soap to cleanse the wound (avoid anything with fragrances or exfoliants).</li>
                <li>Pat your skin dry with a clean paper towel—never rub! Avoid washcloths or towels as these can harbor bacteria.</li>
                <li>Apply a thin layer of an aftercare balm, such as Aquaphor or A+D, to keep the skin hydrated and maintain moisture.</li>
                <li>Repeat this process 2-3 times per day for the next two days.</li>
              </ul>
            </div>
            
            {/* Saniderm/Tegaderm Section */}
            <div>
              <h3 className="text-white text-xl font-bold mb-3 text-red-400">
                IF YOUR TATTOO ARTIST USED TEGADERM OR SANIDERM FILM:
              </h3>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>Leave the protective adhesive dressing on for 4-5 days, unless otherwise directed by your tattoo artist.</li>

                <li>You may notice fluid buildup (excess ink, blood plasma) under the adhesive—this is completely normal.</li>

                <li>Do not attempt to drain the liquid. If the film breaks or unseals, remove it, clean the tattoo, and apply a new piece of film.</li>

                <li>When removing, do so in the shower for easier removal.</li>

                <li>After removing the film, continue aftercare by applying an unscented lotion for the next 2-3 weeks.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* second dection of the guideline: Text Left / Image Right (Screenshots 4-5) ===== */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              THE FIRST TWO WEEKS: DAILY CARE & HEALING
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Your tattoo is an open wound, so it will go through several healing stages in the first 
              couple of weeks, including scabbing and peeling. Follow these essential care steps:
            </p>
            
            <ul className="space-y-4 text-gray-300">
              <li>
                <span className="text-white font-bold">Use a Mild Cleanser:</span> Use mild soap and water 
                or a tattoo-friendly cleanser to gently wash your tattoo a couple times a day.
              </li>
              <li>
                <span className="text-white font-bold">Apply Lotion Regularly:</span> Once you stop using 
                the aftercare balm (after the first 2 days), switch to a thin layer of unscented lotion 
                2-3 times a day to maintain moisture and prevent itching.
              </li>
              <li>
                <span className="text-white font-bold">Avoid Sun Exposure:</span> Do not apply sunscreen to 
                a healing tattoo. Once fully healed, use a high-SPF sunscreen to prevent fading and sunburn.
              </li>
              <li>
                <span className="text-white font-bold">Do Not Pick or Scratch:</span> As your tattoo heals, 
                it will peel and flake—this is normal. Never scratch or pick at the flakes, as this can cause 
                ink fallout, scarring, and patchy healing.
              </li>
              <li>
                <span className="text-white font-bold">Avoid Soaking in Water:</span> Showers are fine, but 
                baths, pools, hot tubs, and oceans should be avoided until the tattoo is fully healed.
              </li>
              <li>
                <span className="text-white font-bold">No Shaving Over the Tattoo:</span> If your tattoo is 
                in a shaved area, wait until the dermis has fully healed before shaving.
              </li>
              <li>
                <span className="text-white font-bold">Wear Loose Clothing:</span> Tight clothing can cause 
                irritation and disrupt the healing process.
              </li>
            </ul>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1707395293453-26231b245d51?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlc2hseSUyMHRhdG9vZWQlMjBza2lufGVufDB8fDB8fHww" 
              alt="Healing tattoo with lotion application"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* some decorative color to spice things up! */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>Follow these guidelines for vibrant, healthy tattoo healing</p>
          <div className="w-16 h-0.5 bg-red-600/50 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default TattoGuideline;