import React, { useState } from 'react';

// ===== TATTOO AFTERCARE FAQ ACCORDION =====
// Follows the exact pattern from your guide code

const TattooAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // configuration
  const config = {
    backgroundColor: "zinc-900",
    cardColor: "zinc-800",
    accentColor: "red-600",
    sectionIntro: "FREQUENTLY ASKED QUESTIONS",
    usePlusMinus: true // Using plus/minus icons as shown
  };

  // frequently asked questions and their answers
  const items = [
    {
      question: "Is peeling and flaking normal?",
      answer: "Yes, peeling and flaking are completely normal parts of the tattoo healing process. This typically occurs around days 3-5 and can last for up to two weeks. Never pick or scratch at the peeling skin, as this can damage the tattoo and cause ink loss. Let the skin shed naturally and keep it moisturized with a thin layer of unscented lotion."
    },
    {
      question: "What if my tattoo looks faded during healing?",
      answer: "It's normal for tattoos to appear faded or cloudy during the healing process, especially when peeling and flaking occur. This is due to a thin layer of healing skin forming over the tattoo. Once fully healed (usually after 4-6 weeks), the true colors and clarity will return. If it still looks faded after complete healing, consult your artist about a potential touch-up."
    },
    {
      question: "Can I work out with a fresh tattoo?",
      answer: "It's best to avoid intense workouts and excessive sweating for at least 48-72 hours after getting a tattoo. Sweat can irritate the healing wound and introduce bacteria. After the initial healing period, you can gradually return to exercise, but always clean your tattoo thoroughly afterward and avoid activities that stretch or rub the tattooed area."
    },
    {
      question: "Can I sleep on my new tattoo?",
      answer: "Avoid sleeping directly on your new tattoo for at least the first week. Pressure and friction can irritate the healing skin and cause ink to pool or spread unevenly. Try to sleep on the opposite side or in a position that keeps pressure off the tattoo. Consider using clean, soft bedding and wearing loose clothing to protect the area."
    },
    {
      question: "What if my tattoo gets infected?",
      answer: "Signs of infection include excessive redness, swelling, warmth, pus, or worsening pain after the first few days. If you suspect an infection, contact your tattoo artist immediately and seek medical attention. Do not apply over-the-counter antibiotic creams without consulting a doctor. Early treatment is crucial for preventing complications."
    },
    {
      question: "What should I do if I develop an allergy to tattoo ink?",
      answer: "Allergic reactions to tattoo ink are rare but can occur, particularly with red, yellow, and certain colored inks. Symptoms include itching, raised bumps, or persistent irritation. If you suspect an allergy, consult a dermatologist and inform your tattoo artist. They may recommend topical steroids or other treatments, and future tattoos may need to use different ink formulations."
    },
    {
      question: "What aftercare products do you recommend and offer at your studios?",
      answer: "We recommend unscented, gentle products specifically formulated for tattoo aftercare. At our studios, we carry a selection of trusted brands including unscented moisturizers, tattoo-specific balms, and gentle cleansers. Our artists can recommend the best products for your skin type and tattoo placement. We also provide detailed aftercare instructions with every tattoo."
    }
  ];

  return (
    <section className={`w-full bg-${config.backgroundColor} py-16 md:py-24 px-4`}>
      <div className="max-w-4xl mx-auto">
        
        {/* section header */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-4">
            {config.sectionIntro}
          </h2>
          <div className={`w-24 h-1 bg-${config.accentColor} mx-auto`}></div>
        </div>

        {/* Accordion items */}
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

        {/* a footer note*/}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>
            Have a different question?{' '}
            <span className={`text-${config.accentColor} hover:text-red-400 cursor-pointer font-medium`}>
              Contact our team
            </span>
          </p>
        </div>

        {/* some print to spice up things */}
        <div className="text-center text-gray-600 text-xs mt-6">
          <p>We're here to help with all your tattoo aftercare questions</p>
        </div>
      </div>
    </section>
  );
};

export default TattooAccordion;