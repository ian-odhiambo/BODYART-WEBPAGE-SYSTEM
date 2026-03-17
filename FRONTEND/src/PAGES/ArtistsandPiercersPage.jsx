import ArtistPiercerMain from "../COMPONENTS/ArtistPiercerMain";
import HeroArtPiercer from "../COMPONENTS/artists-piercers subfolder/HeroArtPiercer";
import OurTatooists from "../COMPONENTS/artists-piercers subfolder/OurTatooists";
import OurPiercers from "../COMPONENTS/artists-piercers subfolder/OurPiercers";
import CallToAction from "../COMPONENTS/Default subcomponents/CallToAction";

const ArtistsandPiercersPage = ({ type }) => {
   const ctaConfig = {
    ctaBackgroundImage: "https://images.unsplash.com/photo-1539867470483-9b25dc424c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob29ncmFwaXklMjBvZiUyMHRhdG9vc3xlbnwwfHwwfHx8MA%3D%3D",
    ctaOverlayOpacity: 0.6,
    ctaHeading: "Ready To Get Inked?",
    ctaText: "Our talented tattoo artists and piercers are here to bring your vision to life. Contact us today to book an appointment and experience the best in body art.",
    ctaButtonText: "BOOK NOW",
    ctaButtonLink: "/book",
  };

   if (!type) {
// Main "Artists & Piercers" nav click - show ArtistPiercerMain (Hero + Accordion + CTA)
    return <ArtistPiercerMain/>;
  }
  return (
    <main className="min-h-screen bg-zinc-900">

      <HeroArtPiercer/>
      <OurTatooists/>
      <CallToAction config={ctaConfig} />
      <OurPiercers/>
      <CallToAction config={ctaConfig} />

    </main>
    
  );
};

export default ArtistsandPiercersPage;