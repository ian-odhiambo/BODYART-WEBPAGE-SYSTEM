const BookingsHero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      
    
      {/* Unsplash image for the background) */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Inked NYC tattoo studio interior"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay - adjust opacity (50-70%) for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* my centered content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Abril_Fatface',cursive] max-w-5xl leading-tight">
          BOOK YOUR TATTOO & PIERCING APPOINTMENT AT TATTOOS AND PIERCINGS STUDIOS
          <span className="block text-red-500 mt-2">TATTOO & PIERCINGS STUDIOS</span>
        </h1>
        
        {/*  decorative line */}
        <div className="w-24 h-1 bg-red-600 mt-8"></div>
      </div>
    </section>
  );
};

export default BookingsHero;