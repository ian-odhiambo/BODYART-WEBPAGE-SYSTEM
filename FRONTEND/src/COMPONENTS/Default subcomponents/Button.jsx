import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  text, 
  linkTo, 
  variant = 'primary', 
  size = 'medium',
  hasAnimation = false,
  onClick,
  className = '',
  ...props 
}) => {
  
  // Button variant styles
  const variants = {
    primary: 'bg-red-600 hover:bg-red-700 text-white',
    secondary: 'bg-zinc-700 hover:bg-zinc-600 text-white',
    outline: 'bg-transparent border-2 border-red-600 text-white hover:bg-red-600/20'
  };

  // Button size styles
  const sizes = {
    small: 'text-base px-6 py-3',
    medium: 'text-lg px-8 py-4',
    large: 'text-xl md:text-2xl px-10 py-5'
  };

  // Animation classes
  const animationClass = hasAnimation ? 'hover:animate-bounce-on-hover' : '';

  // Base button classes
  const buttonClasses = `
    ${variants[variant]} 
    ${sizes[size]} 
    ${animationClass}
    font-bold rounded-md 
    transition-all duration-300 
    shadow-lg hover:shadow-xl
    inline-block text-center
    ${className}
  `;

  // If onClick is provided, render a button element
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={buttonClasses}
        {...props}
      >
        {text}
      </button>
    );
  }

  // Otherwise render a Link component
  return (
    <Link 
      to={linkTo}
      className={buttonClasses}
      {...props}
    >
      {text}
    </Link>
  );
};

export default Button;