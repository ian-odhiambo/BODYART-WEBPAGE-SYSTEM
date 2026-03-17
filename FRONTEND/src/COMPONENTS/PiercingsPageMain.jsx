import Hero from './Default subcomponents/Hero';
import Accordion from './Default subcomponents/Accordion';
import CallToAction from './Default subcomponents/CallToAction';

const PiercingPageMain = () => {
  const accordionItems = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment  by calling, emailing, or visiting our studio. We also offer walk-ins based on artist availability.And a dedicated page for bookings that you can fill in your details like your name, email and phone number and we will definately interact by sending you newsletters from our distinguished piercings and tatoos studios"
    },
    {
      question: "Do you accept walk-ins?",
      answer: "Yes, we accept walk-ins based on artist availability. However, we recommend booking an appointment to ensure a spot, especially on weekends."
    },
    {
      question: "How much does a tattoo cost?",
      answer: "Pricing varies depending on size, detail, placement, and artist. We will be very much glad to share the rate card with our prospectives. We provide free consultations and quotes."
    },
    {
      question: "How should I prepare for my tattoo session?",
      answer: "Get a good night's sleep, eat a meal beforehand, stay hydrated, and avoid alcohol/blood thinners. Wear comfortable clothing that allows access to the tattoo area."
    },
    {
      question: "What is the healing process for tattoos and piercings?",
      answer: "Tattoos typically heal in 2-4 weeks - keep clean, moisturize, avoid sun/soaking. Piercings take 4-12 weeks - clean with saline, avoid touching, don't remove jewelry."
    },
    {
      question: "Do you offer tattoo removal services?",
      answer: "Yes, we offer professional tattoo removal services using advanced laser technology. Schedule a consultation to discuss pricing and expected results."
    }
  ];

  // Configuration object - All your customizable content in one place
  const config = {
    // Hero section
    backgroundImage: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayOpacity: 0.6,
    mainHeading: "FAQ",
    subHeading: "FREQUENTLY ASKED QUESTIONS",
    accentColor: "red-600",
    
    // Accordion section
    sectionIntro: "Below are some frequently asked questions about our tattoo shop services",
    backgroundColor: "zinc-900",
    cardColor: "zinc-800",
    usePlusMinus: true,
    
    // Call to Action section
    ctaBackgroundImage: "https://images.unsplash.com/photo-1539867470483-9b25dc424c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob29ncmFneSUyMG9mJTIwdGF0b29zfGVufDB8fDB8fHww",
    ctaOverlayOpacity: 0.6,
    ctaHeading: "Ready To Get Inked?",
    ctaText: "Our talented tattoo artists and piercers are here to bring your vision to life. Contact us today to book an appointment and experience the best in body art.",
    ctaButtonText: "BOOK NOW",
    ctaButtonLink: "/book",
  };





  return (
    <>
      <Hero config={config} />
      <Accordion config={config} items={accordionItems} />
      <CallToAction config={config} />
    </>
  );
};

export default PiercingPageMain;
