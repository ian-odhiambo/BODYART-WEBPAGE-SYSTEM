import Button from './Button';

const CallToAction = ({ config }) => {
  return (
    <section className="relative w-full h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={config.ctaBackgroundImage}
          alt="Tattoo on black skin" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: config.ctaOverlayOpacity }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Abril_Fatface',cursive] mb-6 max-w-3xl">
          {config.ctaHeading}
        </h2>
        
        {/* Description Text */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
          {config.ctaText}
        </p>
        
        {/* CTA Button - Using the Button component */}
        <Button 
          text={config.ctaButtonText}
          linkTo={config.ctaButtonLink}
          variant="primary"
          size="large"
          hasAnimation={true}
        />
        
        {/* Optional Hint Text */}
        <p className="text-gray-400 text-sm mt-6">
          Limited spots available • Book now
        </p>
      </div>

      {/* Custom CSS for hover bounce animation */}
      <style jsx>{`
        @keyframes bounce-on-hover {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;