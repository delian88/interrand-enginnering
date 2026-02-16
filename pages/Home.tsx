
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  Award, 
  Globe, 
  Briefcase, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  Settings,
  Building2,
  Zap,
  Factory,
  MapPin
} from 'lucide-react';
import { SERVICES, HERO_SLIDES, CORE_VALUES } from '../constants.tsx';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="w-full">
      {/* Responsive Hero Slider */}
      <section className="relative h-[85vh] sm:h-screen min-h-[600px] overflow-hidden bg-slate-900">
        {HERO_SLIDES.map((slide: any, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0'
            }`}
          >
            {/* Legibility Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent z-10"></div>
            
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[10s]"
              style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
            />

            {/* Top Corner Badge Caption */}
            <div className={`absolute top-28 right-4 sm:right-12 z-20 transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
               <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                 <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">Active Operations</span>
               </div>
            </div>

            {/* Main Hero Content */}
            <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                {/* Welcome Message (Specific for first slide) */}
                {slide.welcome && (
                  <div className={`text-amber-500 font-outfit font-bold text-lg sm:text-2xl mb-4 transition-all duration-1000 delay-100 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    {slide.welcome}
                  </div>
                )}

                {/* Primary Caption Badge */}
                <div className={`inline-flex items-center px-4 py-1.5 bg-amber-500 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] rounded-sm mb-6 sm:mb-8 shadow-2xl transition-all duration-700 delay-200 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                  {slide.caption}
                </div>
                
                {/* Title */}
                <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-bold text-white mb-6 sm:mb-8 leading-[1.1] sm:leading-tight transition-all duration-1000 delay-400 drop-shadow-lg ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  {slide.title}
                </h1>
                
                {/* Subtitle */}
                <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-10 sm:mb-14 font-light max-w-2xl leading-relaxed opacity-90 transition-all duration-1000 delay-600 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  {slide.subtitle}
                </p>
                
                {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-800 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <Link 
                    to="/services" 
                    className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-amber-600 transition-all flex items-center justify-center group shadow-2xl shadow-amber-500/20"
                  >
                    View Our Services
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 transition-all text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Floating Location Caption */}
            <div className={`absolute bottom-24 right-4 sm:right-12 z-20 transition-all duration-1000 delay-700 hidden lg:flex items-center gap-3 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
               <div className="h-px w-12 bg-amber-500/50"></div>
               <div className="flex items-center text-white/60 text-xs font-bold tracking-widest uppercase">
                 <MapPin size={14} className="text-amber-500 mr-2" />
                 {slide.locationTag}
               </div>
            </div>
          </div>
        ))}
        
        {/* Indicators and Controls */}
        <div className="absolute bottom-10 left-4 right-4 sm:left-12 sm:right-12 z-30 flex justify-between items-end">
          <div className="flex gap-2.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 sm:w-24 bg-amber-500' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="hidden sm:flex gap-4">
            <button onClick={prevSlide} className="p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md border border-white/10 transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md border border-white/10 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-20 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Infrastructure" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Construction" />
                  </div>
                </div>
                <div className="pt-12 sm:pt-20">
                  <div className="aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Technical" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-3xl hidden xl:block">
                <div className="text-4xl font-bold text-amber-500 mb-2">RC 831090</div>
                <div className="text-xs uppercase tracking-[0.3em] font-black opacity-60">Registered Identity</div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-xs font-black uppercase tracking-widest">About the Company</span>
                <h2 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-900 leading-tight">
                  Driving <span className="text-amber-500">Industrialization</span> Across West Africa
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Interrand Engineering Ltd is a premier subsidiary of the Interrand Group, founded with a clear mandate to catalyze structural growth through technical, professional, and financial expertise.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Our expansion to Ghana in 2012 marked a major milestone, solidifying our capacity to compete globally and deliver long-term value across regional borders.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Scale</h4>
                    <p className="text-sm text-slate-500">Supporting critical economic sectors at scale.</p>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Precision</h4>
                    <p className="text-sm text-slate-500">Disciplined execution and technical mastery.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center text-slate-900 font-bold hover:text-amber-600 transition-all border-b-2 border-slate-900 hover:border-amber-500 pb-2 group text-lg">
                  Learn Our Full Story <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Fixed Responsive Grid */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.3em] text-xs mb-6">Expertise</h2>
            <h3 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-900 mb-8">Integrated Engineering Services</h3>
            <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed">
              We deploy specialized technical mastery across critical infrastructure sectors to ensure operational efficiency and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {SERVICES.map((s) => {
              const IconMap: any = { Building2, Settings, Zap, Factory, Droplets: Users, Truck: Briefcase };
              const Icon = IconMap[s.icon] || Settings;
              return (
                <div key={s.id} className="group bg-white p-10 sm:p-12 rounded-[2.5rem] border border-slate-100 hover:border-amber-500/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                  <div className="w-20 h-20 bg-slate-50 text-amber-500 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-amber-500/30">
                    <Icon size={36} />
                  </div>
                  <h4 className="text-2xl font-outfit font-bold text-slate-900 mb-6">{s.title}</h4>
                  <p className="text-slate-500 leading-relaxed mb-10 text-base">
                    {s.description}
                  </p>
                  <Link to={`/services#${s.id}`} className="inline-flex items-center text-amber-600 font-bold text-sm hover:translate-x-2 transition-transform">
                    Explore Details <ChevronRight className="ml-2" size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Impact - Robust Layout */}
      <section className="py-24 sm:py-40 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Industrial" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-outfit font-bold mb-10 leading-tight">
              A Proven Force in <span className="text-amber-500">Cross-Border</span> Infrastructure
            </h3>
            <p className="text-lg sm:text-2xl text-slate-300 mb-20 font-light leading-relaxed max-w-4xl mx-auto">
              With full operational hubs in Nigeria and Ghana, Interrand Engineering delivers technical depth and disciplined delivery to the critical industrial sectors of West Africa.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
              {[
                { label: 'Year Established', val: '2009' },
                { label: 'Ghana Expansion', val: '2012' },
                { label: 'RC Number', val: '831090' },
                { label: 'Status', val: 'Active' }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2 font-outfit">{stat.val}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-black">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 sm:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-amber-500 rounded-[3rem] sm:rounded-[4rem] p-12 sm:p-28 text-center shadow-3xl shadow-amber-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-bold text-white mb-10 leading-tight">
              Build the <br className="hidden sm:block" /> Industrial Future
            </h3>
            <p className="text-lg sm:text-2xl text-amber-50 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Partner with Interrand Engineering for world-class technical execution, disciplined management, and structural innovation that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-2xl font-bold text-lg sm:text-xl hover:bg-slate-800 transition-all shadow-2xl hover:scale-105 active:scale-95">
                Start Your Project
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-12 py-6 bg-white/20 text-white border border-white/40 rounded-2xl font-bold text-lg sm:text-xl hover:bg-white/30 transition-all backdrop-blur-md">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
