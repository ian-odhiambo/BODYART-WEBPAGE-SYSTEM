const PierceGuideline = () => {
  return (
    <section className="w-full bg-zinc-900 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/*  SECTION A: Image Left / Text Right  */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1768825159293-222e85f3ec05?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdmVsJTIwcGllcmNpbmdzfGVufDB8fDB8fHww" 
              alt="Piercing healing process with jewelry"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              WHAT TO EXPECT DURING HEALING
            </h2>
            
            <ul className="space-y-4 text-gray-300">
              <li><span className="text-white font-bold">Swelling:</span> Swelling is common for the first 3–7 days, with some cases lasting up to two weeks.</li>
              <li><span className="text-white font-bold">Discharge:</span> Increased saliva production, minor bleeding, or slight bruising can occur. A whitish or clear discharge is expected—it is not pus but part of the healing process.</li>
              <li><span className="text-white font-bold">Soreness:</span> The area may be sore when eating or speaking, and some tenderness is normal.</li>
              <li><span className="text-white font-bold">Sensitivity:</span> The piercing site may feel sore when touched or if it comes into contact with clothing, pillows, or other surfaces.</li>
              <li><span className="text-white font-bold">Discoloration or Itching:</span> Some piercings may look slightly bruised, pink, or feel itchy as they heal. These are common signs of skin regeneration. It is important to avoid excessive scratching, as it could lead to an open wound, increasing the risk of infection.</li>
              <li><span className="text-white font-bold">Scar Formation:</span> In some cases, long-term temporary piercings, such as dermal piercings, may leave minor scars once removed. Proper aftercare can help minimize their appearance.</li>
            </ul>
          </div>
        </div>

        {/*  SECTION B: Full-Width Content  */}
        <div className="bg-zinc-800/50 rounded-xl p-8 md:p-12 border border-zinc-700">
          <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
            GENERAL PIERCING AFTERCARE GUIDELINES
          </h2>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            At our studios, we follow best practices recommended by the Association of Professional Piercers  
            to ensure optimal healing and safety. But to ensure a successful healing process, at-home aftercare 
            is essential. Here are some steps you can take:
          </p>
          
          <ul className="space-y-3 text-gray-300 list-disc pl-5">
            <li><span className="text-white font-bold">Clean Twice Daily:</span> Use a saline solution or a dedicated body piercing cleaner to clean the area. Avoid harsh soaps, benzalkonium chloride, hydrogen peroxide, alcohol, or rubbing alcohol as they can dry out the skin and delay healing.</li>
            <li><span className="text-white font-bold">Avoid Touching:</span> Do not rotate, twist, or frequently touch your piercing with unclean hands. This introduces bacteria and slows healing. Always wash your hands thoroughly with antibacterial soap before handling your body piercing (though you should avoid handling it as much as possible).</li>
            <li><span className="text-white font-bold">Keep it Dry:</span> Avoid submerging fresh piercings in pools, hot tubs, or natural bodies of water to prevent infections.</li>
            <li><span className="text-white font-bold">Choose Clothing Wisely:</span> For body piercings like navel piercings, opt for loose-fitting clothing to avoid irritation from fabric rubbing.</li>
            <li><span className="text-white font-bold">Monitor for Healing Progress:</span> Some mild redness, swelling, or clear discharge is normal, but excessive pain, warmth, or thick yellow-green discharge may indicate an infection. If unsure, consult a professional piercer.</li>
            <li><span className="text-white font-bold">Injury Prevention:</span> Be mindful of accidental bumps or snags that could cause injury to the piercing site, leading to prolonged healing or additional irritation. Avoid sleeping on fresh piercings or engaging in activities that put pressure on the area.</li>
          </ul>
          
          <p className="text-gray-400 text-lg mt-6 italic">
            Want to learn more about what to do after a new body piercing? Stay tuned for more care tips and industry insights on the Inked NYC blog.
          </p>
        </div>

        {/* SECTION C: Text Left / Image Right  */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              ORAL PIERCING AFTERCARE
            </h2>
            
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Proper care is essential for oral piercings to heal without complications. Follow these steps:
            </p>
            
            <h3 className="text-white text-xl font-bold mb-3 text-red-400">WHAT TO EXPECT DURING HEALING</h3>
            <ul className="space-y-2 text-gray-300 list-disc pl-5 mb-6">
              <li>Swelling is common for the first 3–7 days, with some cases lasting up to two weeks.</li>
              <li>Increased saliva production, minor bleeding, or slight bruising can occur.</li>
              <li>The area may be sore when eating or speaking, and some tenderness is normal.</li>
              <li>A whitish or clear discharge is expected—it is not pus but part of the healing process.</li>
            </ul>
            
            <h3 className="text-white text-xl font-bold mb-3 text-red-400">HOW TO CARE FOR YOUR ORAL PIERCING</h3>
            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              <li><span className="text-white font-bold">Rinse Regularly:</span> Use an alcohol-free, antibacterial mouthwash after eating or drinking anything besides water. You can also rinse with a sea salt solution (1/4 teaspoon of non-ionized salt in 8 oz of warm distilled water) 2-3 times daily.</li>

              <li><span className="text-white font-bold">Maintain Oral Hygiene:</span> Brush your teeth gently with a soft-bristled toothbrush twice a day. Replace your toothbrush frequently.</li>
              <li><span className="text-white font-bold">Avoid Spicy, Acidic, or Hot Foods:</span> These can cause irritation. Avoid smoking or drinking alcohol, as they can slow healing and increase swelling.</li>

              <li><span className="text-white font-bold">Minimize Movement:</span> Try not to click the jewelry against your teeth, and avoid chewing gum or biting nails to prevent irritation.</li>
            </ul>
            
            {/* Jewelry */}
            <div className="mt-6 text-gray-400 font-bold text-lg">
              CUSTOM JEWELRY
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1650050594038-55b4c4a86cc2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJsYWNrcyUyMHdpdGglMjBsaXAlMjBwaWVyY2luZ3N8ZW58MHx8MHx8fDA%3D" 
              alt="Oral piercing jewelry and care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* Full-Width Content  */}
        <div className="space-y-8">
          {/* Ear & Facial Piercing */}
          <div className="bg-zinc-800/50 rounded-xl p-8 md:p-12 border border-zinc-700">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              EAR & FACIAL PIERCING AFTERCARE
            </h2>
            
            <ul className="space-y-3 text-gray-300 list-disc pl-5">
              <li><span className="text-white font-bold">Clean with Saline:</span> Use a saline solution twice daily with a clean cotton swab, gauze, or paper towel.</li>
              <li><span className="text-white font-bold">Do Not Sleep on the Piercing:</span> Sleeping on a fresh ear or facial piercing can cause irritation, swelling, and longer healing times. Try using a travel pillow to keep pressure off the piercing.</li>
              <li><span className="text-white font-bold">Avoid Contact With Hair Care Products:</span> Keep shampoos, conditioners, and sprays away from fresh piercings, as these can cause buildup or irritation.</li>
              <li><span className="text-white font-bold">Be Mindful of Makeup:</span> Avoid applying cosmetics directly on or around healing piercings, as makeup products can introduce bacteria and clog the area, leading to irritation or delayed healing.</li>
              <li><span className="text-white font-bold">Handle with Care:</span> Be cautious when brushing hair or putting on clothing to avoid snagging your piercing.</li>
            </ul>
          </div>

          {/* Navel & Body Piercing */}
          <div className="bg-zinc-800/50 rounded-xl p-8 md:p-12 border border-zinc-700">
            <h2 className="text-white text-3xl md:text-4xl font-['Abril_Fatface',cursive] mb-6">
              NAVEL & BODY PIERCING AFTERCARE
            </h2>
            
            <ul className="space-y-3 text-gray-300 list-disc pl-5">
              <li><span className="text-white font-bold">Clean with Saline:</span> Apply a saline solution twice daily using a clean cotton pad.</li>
              <li><span className="text-white font-bold">Avoid Tight Clothing:</span> Clothing that rubs against a navel piercing or nipple piercing can cause irritation and prolong healing. Opt for loose, breathable fabrics.</li>
              <li><span className="text-white font-bold">Be Mindful of Exercise:</span> Avoid excessive stretching, bending, or contact sports that could put pressure on the piercing.</li>
              <li><span className="text-white font-bold">Keep the Area Dry:</span> Do not soak in bathtubs or hot tubs while your body piercing heals.</li>
            </ul>
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

export default PierceGuideline;