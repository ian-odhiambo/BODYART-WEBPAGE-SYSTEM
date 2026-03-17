import React, { useState } from 'react';
const PierceAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // configuration of the accordion for its behavior 
  const config = {
    backgroundColor: "zinc-900",
    cardColor: "zinc-800",
    accentColor: "red-600",
    sectionIntro: "FREQUENTLY ASKED QUESTIONS",
    usePlusMinus: true // Using plus/minus icons as shown
  };

  // FAQ ITEMS 
  const items = [
    {
      question: "How long before I can change my jewelry?",
      answer: "You should wait until your piercing is fully healed before changing jewelry. Healing times vary by location: earlobes (6-8 weeks), cartilage (4-12 months), nose/lip (2-3 months), navel (6-12 months). Always consult your piercer before changing jewelry, and ensure your hands are clean and new jewelry is sterile."
    },
    {
      question: "Can I go swimming with a fresh piercing?",
      answer: "No, avoid swimming in pools, hot tubs, lakes, or oceans for at least the initial healing period. Bodies of water contain bacteria that can cause serious infections. Stick to showers only until your piercer confirms your piercing is fully healed."
    },
    {
      question: "Why does my piercing have a bump?",
      answer: "Piercing bumps (hypertrophic scars or irritation bumps) are common and usually caused by trauma, improper jewelry, or aftercare issues. They often appear as small, firm bumps next to the piercing. Continue gentle saline cleaning, avoid touching, and ensure your jewelry is high-quality. If persistent, consult your piercer."
    },
    {
      question: "Is my piercing infected?",
      answer: "Signs of infection include: excessive redness spreading beyond the piercing site, intense swelling, throbbing pain, hot feeling, yellow/green discharge with foul odor, or fever. If you suspect infection, do not remove the jewelry (this can trap infection). Contact your piercer and seek medical attention immediately."
    },
    {
      question: "Can I get multiple piercings at once?",
      answer: "Yes, you can get multiple piercings in one session depending on placement and your pain tolerance. However, healing multiple piercings simultaneously requires extra aftercare attention. Your piercer will advise on how many is safe based on your anatomy and health."
    },
    {
      question: "What aftercare products do you recommend and offer at your studios?",
      answer: "We recommend sterile saline solution sprays specifically formulated for piercings (0.9% sodium chloride with no additives). At our studios, we carry professional piercing aftercare sprays, gentle cleansers, and high-quality jewelry from trusted brands like BVLA, Buddha Jewelry, and Industrial Strength."
    }
  ];

  return (
    <section className={`w-full bg-${config.backgroundColor} py-16 md:py-24 px-4`}>
      <div className="max-w-4xl mx-auto">
        
        {/*  SECTION HEADER  */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-4">
            {config.sectionIntro}
          </h2>
          <div className={`w-24 h-1 bg-${config.accentColor} mx-auto`}></div>
        </div>

        {/*  ACCORDION ITEMS  */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`bg-${config.cardColor}/80 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-600 transition-colors`}
            >
              {/* Accordion Header - Clickable */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group hover:bg-zinc-800 transition-colors"
              >
                <span className="text-white text-lg md:text-xl font-medium flex items-center gap-3">
                  {/* Plus/Minus Icons */}
                  {openAccordion === index ? (
                    <span className={`text-${config.accentColor} text-2xl leading-none font-bold`}>−</span>
                  ) : (
                    <span className="text-gray-400 text-2xl leading-none group-hover:text-red-400 font-bold">+</span>
                  )}
                  {item.question}
                </span>
              </button>

              {/* Accordion Content - with smooth animation */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-gray-300 text-base md:text-lg border-t border-zinc-700 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* footer note */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>
            Have a different question?{' '}
            <span className={`text-${config.accentColor} hover:text-red-400 cursor-pointer font-medium`}>
              Contact our piercing team
            </span>
          </p>
        </div>

        {/* some small print */}
        <div className="text-center text-gray-600 text-xs mt-6">
          <p>We're here to help with all your piercing aftercare questions</p>
        </div>
      </div>
    </section>
  );
};

export default PierceAccordion;