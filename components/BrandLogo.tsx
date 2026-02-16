
import React from 'react';

interface BrandLogoProps {
  className?: string;
  isLight?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isLight = false, size = 'md' }) => {
  // Size mappings for different contexts
  const containerSizes = {
    sm: 'scale-[0.8] origin-left',
    md: 'scale-100',
    lg: 'scale-125',
    xl: 'scale-150'
  };

  // The logo provided in the image features:
  // 1. A red chevron (roof)
  // 2. A red dot (the 'i' dot)
  // 3. Orange "interrand" in lowercase
  // 4. Black "ENGINEERING LTD" below

  return (
    <div className={`flex items-center gap-2 select-none ${containerSizes[size]} ${className}`}>
      <div className="flex flex-col">
        {/* Logo Mark + Main Text */}
        <div className="relative flex items-end">
          {/* The "Roof" Chevron over the 'i' */}
          <div className="absolute -top-3 left-[3px] w-6 h-4 overflow-hidden">
             <div className="w-5 h-5 border-t-[2.5px] border-l-[2.5px] border-[#d71920] rotate-45 transform translate-y-2 translate-x-[2px]"></div>
          </div>
          
          <div className="flex items-baseline leading-none">
            {/* The 'i' with custom red dot */}
            <div className="flex flex-col items-center mr-[1px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#d71920] mb-[2px]"></div>
              <div className={`w-[6px] h-[16px] bg-[#f07e26] rounded-t-[1px]`}></div>
            </div>
            
            {/* The rest of "nterrand" */}
            <span className={`text-2xl font-bold tracking-tighter text-[#f07e26] ${isLight ? 'brightness-125' : ''}`}>
              nterrand
            </span>
          </div>
        </div>
        
        {/* Subtext - Adjusted for Engineering Subsidiary */}
        <div className={`text-[8px] font-black tracking-[0.05em] uppercase mt-[1px] leading-tight ${isLight ? 'text-white' : 'text-slate-900'}`}>
          ENGINEERING LTD
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
