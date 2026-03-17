import React from 'react';

// ===== APPOINTMENT COMPONENT =====
// Top section: What to expect during your piercing appointment (Screenshots 1 & 2 combined)
// Bottom section: Aftercare & booking information (Screenshot 3)

const Appointment = () => {
  return (
    <section className="w-full bg-zinc-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
       
        {/* Image Left, Text Right - matching ChooseUs.jsx pattern */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          
          {/* Left Side - Image Card */}
          <div className="lg:w-1/2 relative h-[500px] rounded-xl overflow-hidden group">
            {/* Unsplash Image - Piercing consultation/professional setup */}
            <img 
              src="https://images.unsplash.com/photo-1682084251580-3ada32e58e54?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZ0ZXJjYXJlfGVufDB8fDB8fHww" 
              alt="Professional piercing consultation at Inked NYC studio"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Text overlaid on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-['Abril_Fatface',cursive] mb-3">
                CONSULTATION & SELECTION
              </h3>
              <p className="text-gray-200 text-lg max-w-xl">
                Your piercing journey begins with a one-on-one consultation with our expert piercer.
              </p>
            </div>
          </div>
          
          {/* Right Side - text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-8">
              WHAT TO EXPECT DURING YOUR PIERCING APPOINTMENT
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                When you walk into our Tattoo $ Piercings studio, you can expect a professional, 
                comfortable, and enjoyable experience. Here's how the process works:
              </p>
              
              <div className="space-y-6">
                {/* Consultation & Selection */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-red-400">
                    CONSULTATION & SELECTION
                  </h3>
                  <p>
                    Your piercing journey begins with a one-on-one consultation with our expert piercer. 
                    We'll discuss your desired piercing, assess your anatomy to ensure the best placement, 
                    and guide you through our collection of high-quality jewelry, including titanium, gold, 
                    and silver options. Our goal is to help you choose a style that complements your look 
                    and promotes proper healing.
                  </p>
                </div>
                
                {/* Skin Preparation */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-red-400">
                    SKIN PREPARATION
                  </h3>
                  <p>
                    Before the piercing process begins, the selected area is thoroughly disinfected to 
                    remove any bacteria or debris. Our piercer will mark the placement with precision, 
                    allowing you to approve the final position before moving forward. This step ensures 
                    the piercing is aligned correctly and enhances both aesthetics and healing.
                  </p>
                </div>
                
                {/* The Piercing Process */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-red-400">
                    THE PIERCING PROCESS
                  </h3>
                  <p>
                    Once you're ready, our piercer will use a sterile, single-use needle to complete the 
                    procedure with precision and efficiency. We prioritize a calm and professional environment 
                    to ensure minimal discomfort and optimal results. Whether it's a cartilage, tragus, nose, 
                    or lip piercing, our team ensures a smooth and quick process.
                  </p>
                </div>
                
                {/* Aftercare Instructions */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 text-red-400">
                    AFTERCARE INSTRUCTIONS
                  </h3>
                  <p>
                    Proper aftercare is crucial for healing, and we'll provide you with detailed instructions 
                    tailored to your specific body piercing. From recommended cleaning solutions to common 
                    healing timelines, we'll equip you with everything needed to keep your new piercing looking 
                    and feeling its best. We're also available for follow-up questions and jewelry changes as 
                    your piercing heals.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-red-600 mt-8"></div>
          </div>
        </div>

        {/* ===== BOTTOM SECTION: Aftercare & Booking (Screenshot 3 - full view) ===== */}
        {/* Text Left, Image Right (opposite orientation for visual variety) */}
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          
          {/* Right Side - Image Card */}
          <div className="lg:w-1/2 relative h-[500px] rounded-xl overflow-hidden group">
            {/* Unsplash Image - Aftercare products or jewelry display */}
            <img 
              src="https://images.unsplash.com/photo-1615467720906-13c6ab2c9f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Piercing aftercare products and jewelry collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Text overlaid on image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-['Abril_Fatface',cursive] mb-3">
                AFTERCARE & HEALING
              </h3>
              <p className="text-gray-200 text-lg max-w-xl">
                Proper aftercare is essential for a smooth healing process.
              </p>
            </div>
          </div>
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-8">
              BODY PIERCING AFTERCARE & HEALING TIMES
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Proper aftercare is essential for a smooth healing process. To keep your piercing clean 
                and healthy, it's important to rinse it twice daily with a saline solution and avoid 
                unnecessary touching, twisting, or pressure from sleeping on it. Factors like individual 
                skin type and overall health can influence healing time, but here's a general guideline 
                of what to expect:
              </p>
              
              {/* Healing times list - styled as cards or simple list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
                <div>
                  <p><span className="text-white font-semibold">Earlobe piercing:</span> <span className="text-gray-300">6-8 weeks</span></p>
                  <p><span className="text-white font-semibold">Cartilage & tragus:</span> <span className="text-gray-300">4-12 months</span></p>
                  <p><span className="text-white font-semibold">Lip & nose:</span> <span className="text-gray-300">2-3 months</span></p>
                </div>
                <div>
                  <p><span className="text-white font-semibold">Navel piercing:</span> <span className="text-gray-300">6-12 months</span></p>
                  <p><span className="text-white font-semibold">Tongue piercing:</span> <span className="text-gray-300">4-8 weeks</span></p>
                </div>
              </div>
              
              <p className="text-red-400 italic">
                For more details, don't miss these piercing aftercare instructions.
              </p>
              
              {/* Booking Information Section */}
              <div className="mt-8 pt-6 border-t border-zinc-700">
                <h3 className="text-white text-2xl font-['Abril_Fatface',cursive] mb-4">
                  WALK-INS & BOOKING INFORMATION
                </h3>
                <p className="text-lg mb-4">
                  All body piercing services at Tatoos and Piercings Studios are available on a walk-in basis—just visit our 
                  us whenever you're ready! If you'd like a consultation or have specific 
                  jewelry requests, you can also book an appointment with our expert piercers.
                </p>
                
                {/* Contact details card */}
                <div className="bg-zinc-800/80 rounded-lg p-6 border border-zinc-700 mt-4">
                  <p className="text-white font-bold">Kimathi Street</p>
                  <p className="text-gray-300">Nairobi, Town cbd</p>
                  <p className="text-red-400 mt-2">0700000000</p>
                  <p className="text-gray-300">tatoostudio@example.com</p>
                  <p className="text-gray-300 mt-2">Monday – Saturday, 12 PM – 8 PM</p>
                </div>
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-red-600 mt-8"></div>
          </div>
        </div>

        {/* Footer note - matches previous components */}
        <div className="text-center text-gray-500 text-sm mt-16">
          <p>Walk-ins welcome seven days a week • Free consultations available</p>
        </div>
      </div>
    </section>
  );
};

export default Appointment;