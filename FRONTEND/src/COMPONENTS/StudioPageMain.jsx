import StudioHeroSection from "./studio subfolder/StudioHeroSection";
import VisitUs from "./studio subfolder/VisitUs";
import StudioCardListings from "./studio subfolder/StudioCardListings";
import StudioAccordion from "./studio subfolder/StudioAccordion";
import StudioShowcase from "./studio subfolder/StudioShowcase";
import CallToAction from './Default subcomponents/CallToAction';



const config = {
    // Call to Action section
    ctaBackgroundImage: "https://images.unsplash.com/photo-1539867470483-9b25dc424c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob29ncmFneSUyMG9mJTIwdGF0b29zfGVufDB8fDB8fHww",
    ctaOverlayOpacity: 0.6,
    ctaHeading: "Ready To Get Inked?",
    ctaText: "Our talented tattoo artists and piercers are here to bring your vision to life. Contact us today to book an appointment and experience the best in body art.",
    ctaButtonText: "BOOK NOW",
    ctaButtonLink: "/book",
}
const StudioPageMain = () => {
  return (
    <>
        <StudioHeroSection/>
        <VisitUs/>
        <StudioCardListings/>
        <StudioAccordion/>
        <StudioShowcase/>
        <CallToAction config={config} />
    </>
  )
}

export default StudioPageMain