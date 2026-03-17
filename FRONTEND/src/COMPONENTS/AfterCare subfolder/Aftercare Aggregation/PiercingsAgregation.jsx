import PiercersCareHero from '../piercings/PiercersCareHero';
import PierceGuideline from '../piercings/PierceGuideline';
import PierceAccordion from '../piercings/PierceAccordion';
import PierceGuideline2 from '../piercings/PierceGuideline2';
import CallToAction from '../../Default subcomponents/CallToAction';

const PiercingsAgregation = () => {
    const ctaConfig = {
    ctaBackgroundImage: "https://images.unsplash.com/photo-1539867470483-9b25dc424c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob29ncmFwaXklMjBvZiUyMHRhdG9vc3xlbnwwfHwwfHx8MA%3D%3D",
    ctaOverlayOpacity: 0.6,
    ctaHeading: "Ready To Get Inked?",
    ctaText: "Our talented tattoo artists and piercers are here to bring your vision to life. Contact us today to book an appointment and experience the best in body art.",
    ctaButtonText: "BOOK NOW",
    ctaButtonLink: "/book",
  };

  return (
  <>
    <PiercersCareHero/>
    <PierceGuideline/>
    <PierceAccordion/>
    <PierceGuideline2/>
    <CallToAction config={ctaConfig}/>
  </>
    
    
  )
}

export default PiercingsAgregation