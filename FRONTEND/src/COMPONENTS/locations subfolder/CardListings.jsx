import { Link } from 'react-router-dom';
import cardData from '../../data/cardListingsData.json';

const CardListings = () => {
  const { cards } = cardData;

  return (
    <section className="w-full bg-zinc-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="group relative h-[600px] rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Background Image with Dark Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-['Abril_Fatface',cursive] mb-4">
                  {card.title}
                </h3>
                
                <p className="text-gray-200 text-base leading-relaxed mb-8 line-clamp-6">
                  {card.description}
                </p>
                
                <Link 
                  to={card.buttonLink}
                  className="
                    inline-block
                    bg-red-600 
                    text-white 
                    font-bold 
                    text-sm 
                    tracking-wider
                    px-8 
                    py-4 
                    rounded-md
                    uppercase
                    w-fit
                    transition-all 
                    duration-300 
                    ease-in-out
                    hover:bg-white 
                    hover:text-black
                    border-2
                    border-transparent
                    hover:border-red-600
                    shadow-lg
                    hover:shadow-xl
                    transform hover:-translate-y-1
                  "
                >
                  {card.buttonText}
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardListings;