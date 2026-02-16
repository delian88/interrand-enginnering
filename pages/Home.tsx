
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
  // Added Settings to the import list to fix the undefined reference in the expertise grid.
  Settings
} from 'lucide-react';
import { SERVICES, HERO_SLIDES, CORE_VALUES } from '../constants';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="w-full">
      {/* Dynamic Hero Slider */}
      <section className="relative h-[90vh] sm:h-screen min-h-[550px] overflow-hidden bg-slate-900">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-110 invisible'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center transform transition-transform duration-[10000ms] scale-110"
              style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)' }}
            />
            <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`max-w-4xl transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="inline-flex items-center px-4 py-1 bg-amber-500 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] rounded-sm mb-6 shadow-xl">
                  Technically Driven Excellence
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-bold text-white mb-6 leading-[1.1] sm:leading-[1.05]">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-slate-200 mb-10 sm:mb-12 font-light max-w-2xl leading-relaxed opacity-90">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/services" 
                    className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-amber-600 transition-all flex items-center justify-center group shadow-2xl shadow-amber-500/20"
                  >
                    Explore Capabilities
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-lg font-bold text-base sm:text-lg hover:bg-white/20 transition-all text-center"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Nav Controls */}
        <div className="hidden md:flex absolute bottom-12 right-12 z-30 space-x-3">
          <button onClick={prevSlide} className="p-4 bg-white/5 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-4 bg-white/5 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 sm:left-12 sm:translate-x-0 z-30 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 sm:w-20 bg-amber-500' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl h-64 w-full object-cover" alt="Industrial site" />
                  <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl h-48 w-full object-cover" alt="Building site" />
                </div>
                <div className="pt-12">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl h-[400px] w-full object-cover" alt="Engineering detail" />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-10 rounded-3xl shadow-3xl hidden xl:block">
                <div className="text-5xl font-bold text-amber-500 mb-2">RC 831090</div>
                <div className="text-sm uppercase tracking-[0.2em] font-bold opacity-70">Official Registration</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-amber-600 font-bold uppercase tracking-widest text-xs px-3 py-1 bg-amber-50 rounded-md">Established 2009</span>
                <h2 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-900 mt-6 mb-8 leading-tight">
                  Driving Industrialization Through <span className="text-amber-500">Technical Mastery</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Interrand Engineering Ltd is a core engineering subsidiary within the Interrand Group, established with a vision for global impact and technically driven excellence. Our primary objective is assisting and supporting the industrialization of critical sectors across the Nigerian and Ghanaian economies.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Economic Growth</h4>
                    <p className="text-sm text-slate-500 leading-snug mt-1">Deploying financial and technical expertise for regional development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Disciplined Delivery</h4>
                    <p className="text-sm text-slate-500 leading-snug mt-1">A structured approach to project execution and engineering standards.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/about" className="inline-flex items-center text-slate-900 font-bold hover:text-amber-600 transition-all border-b-2 border-slate-900 hover:border-amber-500 pb-1 group">
                  Learn About Our History <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid - Optimized for all screens */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">Our Services</h2>
            <h3 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-900">Broad-Spectrum Engineering Solutions</h3>
            <p className="mt-6 text-lg text-slate-500 font-light">
              We deploy professional expertise across critical sectors to ensure high-standard execution and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 hover:border-amber-500/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-slate-50 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  {/* Fixed line 181: Settings is now correctly imported from lucide-react */}
                  <Settings size={32} />
                </div>
                <h4 className="text-2xl font-outfit font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-8 text-sm sm:text-base">
                  {s.description}
                </p>
                <Link to={`/services#${s.id}`} className="inline-flex items-center text-amber-600 font-bold text-sm hover:translate-x-1 transition-transform">
                  View Service Details <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus - Confidence & Capacity */}
      <section className="py-24 sm:py-36 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Industrial grid" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-5xl font-outfit font-bold mb-10 leading-tight">
              A Trusted Partner for <span className="text-amber-500">Regional Infrastructure</span>
            </h3>
            <p className="text-lg sm:text-2xl text-slate-300 mb-16 font-light leading-relaxed">
              Our expansion to Ghana in 2012 signaled our capacity, confidence, and willingness to compete and deliver across borders. We bridge the gap between vision and structural reality.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Established', val: '2009' },
                { label: 'Ghana Active', val: '2013' },
                { label: 'Operational Hubs', val: '2 Countries' },
                { label: 'Project Focus', val: 'Industrialization' }
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1 font-outfit">{stat.val}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-amber-500 rounded-[3rem] p-10 sm:p-24 text-center shadow-3xl shadow-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-6xl font-outfit font-bold text-white mb-8 leading-tight">
              Partner With <br className="hidden sm:block" /> Engineering Leaders
            </h3>
            <p className="text-lg sm:text-2xl text-amber-50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join forces with a management team driven by standards, innovation, and long-term value for a stronger industrial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-2xl">
                Get a Quote
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-10 py-5 bg-white/20 text-white border border-white/30 rounded-xl font-bold text-lg hover:bg-white/30 transition-all backdrop-blur-md">
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
