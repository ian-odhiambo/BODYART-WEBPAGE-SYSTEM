import Hero from '../Default subcomponents/Hero';

const BlogHero = () => {
  const config = {
    backgroundImage: "https://plus.unsplash.com/premium_photo-1675504337232-9849874be794?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    overlayOpacity: 0.6,
    mainHeading: "Artist Spotlights",
    subHeading: "Featured Body Art Works",
    accentColor: "red-600",
  };

  return <Hero config={config} />;
};

export default BlogHero;
