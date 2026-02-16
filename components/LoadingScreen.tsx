
import React, { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo.tsx';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900 transition-opacity duration-1000 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative mb-12 animate-pulse">
        <BrandLogo size="xl" isLight className="scale-110 sm:scale-125" />
      </div>
      
      <div className="w-64 sm:w-80 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-amber-500 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Shimmer effect for progress bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
      </div>
      
      <div className="mt-6 flex flex-col items-center gap-1">
        <span className="text-amber-500 font-outfit font-bold text-xs uppercase tracking-[0.4em] ml-2">Technically Driven Excellence</span>
        <span className="text-white/30 font-mono text-[10px] tracking-widest">{progress}%</span>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
