import CallToAction from '../COMPONENTS/Default subcomponents/CallToAction';
import Appointment from '../COMPONENTS/piercings subfolder/Appointment';
import ChooseUs from '../COMPONENTS/piercings subfolder/ChooseUs';
import HeroPiercings from '../COMPONENTS/piercings subfolder/HeroPiercings';
import PiercingsAccordion from '../COMPONENTS/piercings subfolder/PiercingsAccordion';
import PiercingPageMain from '../COMPONENTS/PiercingsPageMain';

const PiercingPage = ({ type }) => {

   const ctaConfig = {
    ctaBackgroundImage: "https://images.unsplash.com/photo-1539867470483-9b25dc424c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob29ncmFwaXklMjBvZiUyMHRhdG9vc3xlbnwwfHwwfHx8MA%3D%3D",
    ctaOverlayOpacity: 0.6,
    ctaHeading: "Ready To Get Inked?",
    ctaText: "Our talented tattoo artists and piercers are here to bring your vision to life. Contact us today to book an appointment and experience the best in body art.",
    ctaButtonText: "BOOK NOW",
    ctaButtonLink: "/book",
  };

   if (!type) {
    //condition evaluation if you click on Piercing nav without selecting dropdown options. Show PiercingPageMain (Hero + Accordion + CallToAction)
    return <PiercingPageMain/>;
  }
  return (
     <main className="min-h-screen bg-zinc-900">

      <HeroPiercings/>
      <ChooseUs/>
      <PiercingsAccordion/>
      <Appointment/>
      <CallToAction config={ctaConfig} />

     </main>
   


  );
};

export default PiercingPage;