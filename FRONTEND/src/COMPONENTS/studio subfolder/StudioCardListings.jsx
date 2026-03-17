import { Link } from 'react-router-dom';


// Heading, paragraph, three  cards, and a button

const StudioCardListings = () => {
  // CARD DATA 
  const cards = [
    {
      id: 1,
      title: "CUSTOM TATTOO DESIGNS",
      description: "Our tattoo artists collaborate with you to create one-of-a-kind tattoos that reflect your vision and individuality."
    },
    {
      id: 2,
      title: "VERSATILE STYLES",
      description: "From black-and-grey realism to vibrant color work, our team offers a variety of techniques and aesthetics."
    },
    {
      id: 3,
      title: "WORLD-CLASS EXPERTISE",
      description: "With years of experience, our tattoo artists bring precision and artistry to every piece."
    }
  ];

  return (
    <section className="w-full bg-zinc-900 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/*  HEADING  */}
        <h2 className="text-white text-4xl md:text-5xl font-['Abril_Fatface',cursive] mb-6 max-w-4xl mx-auto leading-tight">
          MEET THE TALENTED ARTISTS BEHIND TATTOOs & PIERCINGS STUDIOS
        </h2>
        
        {/*  PARAGRAPH */}
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          Our studio was founded on a simple but powerful vision: a group of dedicated body artists coming together to build something of their own. We are not a rotating roster of outside talent—we are a permanent collective of artists who chose to establish this space as our creative home. Together, we offer a diverse range of styles, from fine-line work to hyper-realism, ensuring that every client finds the perfect artist for their vision
        </p>
        
        {/*  THREE CARDS GRID  */}
        {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-zinc-800/80 rounded-xl p-8 
                         border border-zinc-700 hover:border-red-600/50
                         transition-all duration-300 
                         hover:shadow-2xl hover:shadow-red-600/5
                         hover:-translate-y-1 text-left"
            >
              {/* Decorative red  line at top of card */}
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              
              {/* Card Title */}
              <h3 className="text-white text-xl font-bold mb-4 
                           tracking-wide group-hover:text-red-400">
                {card.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* ===== BUTTON ===== */}
        <Link 
          to="/artists"
          className="inline-block bg-red-600 hover:bg-red-700 
                     text-white font-bold text-lg 
                     px-10 py-4 rounded-md 
                     transition-all duration-300 
                     hover:scale-105 hover:shadow-xl
                     shadow-lg"
        >
          VIEW NYC ARTISTS & PIERCERS
        </Link>
      </div>
    </section>
  );
};

export default StudioCardListings;