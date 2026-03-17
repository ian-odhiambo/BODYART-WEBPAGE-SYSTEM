// /**
//  * LocationsPage Component
//  * 
//  * This is the main page component for all location routes.
//  * 
//  * ROUTING LOGIC:
//  * - When user clicks main "Locations" in navbar → Shows LocationsPageMain (Hero + Accordion + CallToAction)
//  * - When user clicks dropdown option (New York, Miami, Las Vegas) → Shows the three new components
//  * 
//  * Routes handled:
//  * - /locations → Shows LocationsPageMain (default)
//  * - /locations/new-york → Shows HeroLocation + CardListings + MeetArtistPiercer
//  * - /locations/miami → Shows HeroLocation + CardListings + MeetArtistPiercer
//  * - /locations/las-vegas → Shows HeroLocation + CardListings + MeetArtistPiercer
//  * 
//  * The 'city' prop is passed from App.jsx routing.
//  */



import LocationsPageMain from '../COMPONENTS/LocationsPageMain';
import HeroLocation from '../COMPONENTS/locations subfolder/HeroLocation';
import CardListings from '../COMPONENTS/locations subfolder/CardListings';
import MeetArtistPiercer from '../COMPONENTS/locations subfolder/MeetArtistPiercer';
import CardListings2 from '../COMPONENTS/locations subfolder/CardListings2';
import LocationAddress from '../COMPONENTS/locations subfolder/LocationAdress';
import CallToAction from '../COMPONENTS/Default subcomponents/CallToAction';



const LocationsPage = ({ city }) => {
  // Call to Action configuration
  const ctaConfig = {
    ctaBackgroundImage: "https://images.unsplash.com/photo-1539867470483-9b25dc424c82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob29ncmFwaXklMjBvZiUyMHRhdG9vc3xlbnwwfHwwfHx8MA%3D%3D",
    ctaOverlayOpacity: 0.6,
    ctaHeading: "Ready To Get Inked?",
    ctaText: "Our talented tattoo artists and piercers are here to bring your vision to life. Contact us today to book an appointment and experience the best in body art.",
    ctaButtonText: "BOOK NOW",
    ctaButtonLink: "/book",
  };

  // If no city prop (main "Locations" nav link), show original LocationsPageMain
  // If city prop exists (dropdown selection), show the three new components
  
  if (!city) {
    //condition evaluation if you click on location and not the options in the dropdown menu. Main "Locations" nav - show original content (Hero + Accordion + CallToAction)
    return <LocationsPageMain />;
  }
  
  // Specific location selected from dropdown (for now , i only have Nairobi)
  // Show the three new components stacked
  return (
    <main className="min-h-screen bg-zinc-900">
      
      <HeroLocation />
      <CardListings />
      <MeetArtistPiercer />
      <CardListings2 />
      <LocationAddress />
      <CallToAction config={ctaConfig} />
      
     

    </main>
  );
};

export default LocationsPage;
