import React, { useState } from 'react';

// ===== PIERCINGS ACCORDION COMPONENT =====
// FAQ accordion for the Piercing page
// Matches the exact styling from the screenshot

const PiercingsAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // configuring my accordion
  const config = {
    backgroundColor: "zinc-900",
    cardColor: "zinc-800",
    accentColor: "red-600",
    sectionIntro: "FREQUENTLY ASKED QUESTIONS",
    usePlusMinus: true // Using plus/minus icons to interact with the accordion
  };

  
  const items = [
    {
      question: "Can I get multiple piercings at once?",
      answer: "Yes, you can get multiple piercings in one session, depending on the locations and your pain tolerance. Our piercers will assess your anatomy and discuss the best approach. Keep in mind that healing multiple piercings simultaneously may require extra aftercare attention."
    },
    {
      question: "How painful is body piercing?",
      answer: "Pain levels vary depending on the piercing location and your individual pain tolerance. Most clients describe the sensation as a quick pinch or pressure. Earlobes tend to be least painful, while cartilage, nose, and nipple piercings may be more intense. Our piercers use techniques to minimize discomfort."
    },
    {
      question: "How long does it take for a piercing to heal?",
      answer: "Healing times vary by piercing type: Earlobes heal in 6-8 weeks, cartilage piercings take 4-12 months, lip and nose piercings heal in 2-3 months, navel piercings take 6-12 months, and tongue piercings heal in 4-8 weeks. Full healing depends on your aftercare routine and body."
    },
    {
      question: "What jewelry is best for sensitive skin?",
      answer: "For sensitive skin, we recommend implant-grade titanium, 14k or 18k solid gold, or niobium. These materials are hypoallergenic and less likely to cause reactions. We avoid nickel-containing metals. Our piercers can help you select the best option for your skin type."
    },
    {
      question: "Do you offer jewelry changes and downsizing?",
      answer: "Yes, we offer professional jewelry changes and downsizing services. After your piercing has partially healed (usually 4-8 weeks), we recommend returning for a shorter post to prevent irritation and promote proper healing. We're also happy to help you switch to new jewelry once fully healed."
    },
    {
      question: "What types of piercings do you offer at Inked Studios?",
      answer: "We offer a comprehensive range including ear piercings (lobe, helix, tragus, daith, rook), facial piercings (nostril, septum, eyebrow, lip), oral piercings (tongue, labret), and body piercings (navel, nipple). Our piercers can also accommodate custom placements."
    },
    {
      question: "Do you use piercing guns?",
      answer: "No, we never use piercing guns. All our piercings are performed using sterile, single-use needles. Needles are safer, more precise, and cause less tissue trauma than piercing guns, resulting in faster healing and reduced risk of complications."
    }
  ];

  return (
    <section className={`w-full bg-${config.backgroundColor} py-16 md:py-24 px-4`}>
      <div className="max-w-4xl mx-auto">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className={`w-24 h-1 bg-${config.accentColor} mx-auto`}></div>
        </div>

        {/* ===== ACCORDION ITEMS ===== */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`bg-${config.cardColor}/80 rounded-lg overflow-hidden border border-zinc-700 hover:border-zinc-600 transition-colors`}
            >
              {/* Accordion Header - and it is clickable */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group hover:bg-zinc-800 transition-colors"
              >
                <span className="text-white text-lg md:text-xl font-medium flex items-center gap-3">
                  {/* Plus/Minus Icons - matching screenshot */}
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

        {/*footer note*/}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>
            Have a different question?{' '}
            <span className={`text-${config.accentColor} hover:text-red-400 cursor-pointer font-medium`}>
              Contact our piercing team
            </span>
          </p>
        </div>

        {/* Optional small print */}
        <div className="text-center text-gray-600 text-xs mt-6">
          <p>Walk-ins welcome • Free consultations available</p>
        </div>
      </div>
    </section>
  );
};

export default PiercingsAccordion;