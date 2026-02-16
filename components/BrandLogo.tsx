
import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isLight = false, size = 'md' }) => {
  const [imageError, setImageError] = useState(false);

  // Using a professional placeholder for the logo. 
  // User can replace this URL with their actual logo.png or svg
  const logoUrl = "https://interrandgroup.com/wp-content/uploads/2021/05/logo-interrand.png";

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-32'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-5xl sm:text-6xl'
  };

  if (!imageError) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img 
          src={logoUrl} 
          alt="Interrand Engineering" 
          className={`${sizeClasses[size]} w-auto object-contain transition-all duration-500 ${isLight ? 'brightness-0 invert' : ''}`}
          onError={() => setImageError(true)}
        />
        {/* If the image logo is just a mark, we show the text alongside */}
        <div className={`flex flex-col leading-none font-outfit font-bold tracking-tighter ${isLight ? 'text-white' : 'text-slate-900'} ${size === 'xl' ? 'hidden' : 'block'}`}>
          <span className={`${textSizes[size === 'sm' ? 'sm' : 'md']}`}>INTERRAND</span>
          <span className="text-amber-500">ENGINEERING</span>
        </div>
      </div>
    );
  }

  // Fallback Typographic Logo
  return (
    <div className={`font-outfit font-black tracking-tighter leading-none flex flex-col ${isLight ? 'text-white' : 'text-slate-900'} ${className}`}>
      <span className={textSizes[size]}>INTERRAND</span>
      <span className={`text-amber-500 ${size === 'xl' ? 'mt-[-0.1em]' : ''} ${textSizes[size]}`}>ENGINEERING</span>
    </div>
  );
};

export default BrandLogo;
