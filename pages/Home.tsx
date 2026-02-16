
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronLeft, 
  TrendingUp,
  Target,
  Settings,
  Building2,
  Zap,
  MapPin
} from 'lucide-react';
import { SERVICES, HERO_SLIDES } from '../constants.tsx';

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
      {/* High-Impact Text-Only Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-slate-950 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
          {/* Geometric Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        {HERO_SLIDES.map((slide: any, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0'
            }`}
          >
            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl text-left">
                {/* Welcome / Kicker Tag */}
                {slide.welcome && (
                  <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-100 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                    <span className="h-[3px] w-16 bg-amber-500"></span>
                    <span className="text-amber-500 font-outfit font-black text-sm sm:text-xl uppercase tracking-[0.4em]">
                      {slide.welcome}
                    </span>
                  </div>
                )}

                {/* Main Headline - Portal Style */}
                <div className="mb-8 sm:mb-10">
                  <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-outfit font-bold text-white leading-[0.95] tracking-tighter transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                    {slide.title.split(' ').map((word: string, i: number) => (
                      <span key={i} className="inline-block mr-[0.15em] last:mr-0">
                        {word === 'Industrial' || word === 'Regional' || word === 'Technical' || word === 'Precision' || word === 'Global' ? (
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 drop-shadow-sm">{word}</span>
                        ) : word}
                      </span>
                    ))}
                  </h1>
                </div>
                
                {/* Subtitle / Excerpt */}
                <div className="max-w-3xl overflow-hidden">
                  <p className={`text-xl sm:text-2xl md:text-3xl text-slate-400 mb-12 font-light leading-relaxed transition-all duration-1000 delay-500 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    {slide.subtitle}
                  </p>
                </div>
                
                {/* Action Row */}
                <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <Link 
                    to="/services" 
                    className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-slate-950 transition-all duration-300 bg-amber-500 rounded-sm hover:bg-white shadow-2xl overflow-hidden uppercase tracking-widest text-sm"
                  >
                    <span className="relative z-10 flex items-center">
                      Our Expertise
                      <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-12 py-6 font-black text-white border-2 border-white/20 rounded-sm hover:bg-white/10 hover:border-white transition-all duration-300 uppercase tracking-widest text-sm"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Context Label */}
            <div className={`absolute bottom-32 right-4 sm:right-12 z-20 transition-all duration-1000 delay-700 hidden lg:block ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
               <div className="flex flex-col items-end gap-3">
                 <div className="text-amber-500 font-black text-sm uppercase tracking-[0.5em] border-b-2 border-amber-500 pb-2">{slide.caption}</div>
                 <div className="flex items-center gap-3 text-white/30 text-xs font-bold tracking-[0.3em] uppercase">
                   <MapPin size={14} className="text-amber-500/50" />
                   {slide.locationTag}
                 </div>
               </div>
            </div>
          </div>
        ))}
        
        {/* Modern Slider Navigation */}
        <div className="absolute bottom-12 left-4 right-4 sm:left-12 sm:right-12 z-30 flex justify-between items-center border-t border-white/10 pt-8">
          <div className="flex items-center gap-6">
            <span className="text-amber-500 font-outfit font-black text-xl tracking-tighter">0{currentSlide + 1}</span>
            <div className="w-32 sm:w-64 h-[1px] bg-white/10 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-[8000ms] ease-linear"
                style={{ width: '100%', key: currentSlide }}
              ></div>
            </div>
            <span className="text-white/20 font-outfit font-bold text-xl tracking-tighter">0{HERO_SLIDES.length}</span>
          </div>
          
          <div className="flex gap-4">
            <button onClick={prevSlide} className="group p-5 bg-white/5 hover:bg-amber-500 text-white hover:text-slate-950 rounded-full transition-all duration-500 border border-white/5">
              <ChevronLeft size={24} className="group-active:scale-90" />
            </button>
            <button onClick={nextSlide} className="group p-5 bg-white/5 hover:bg-amber-500 text-white hover:text-slate-950 rounded-full transition-all duration-500 border border-white/5">
              <ChevronRight size={24} className="group-active:scale-90" />
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-24 sm:py-40 bg-white overflow-hidden">
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
                <div className="text-4xl font-bold text-amber-500 mb-2 font-outfit">RC 831090</div>
                <div className="text-xs uppercase tracking-[0.4em] font-black opacity-60">Registered Identity</div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-xs font-black uppercase tracking-widest">About the Company</span>
                <h2 className="text-4xl sm:text-6xl font-outfit font-bold text-slate-900 leading-[1.1]">
                  Driving <span className="text-amber-500">Industrialization</span> Across West Africa
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Interrand Engineering Ltd is a premier subsidiary of the Interrand Group, founded with a clear mandate to catalyze structural growth through technical, professional, and financial expertise.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Our expansion to Ghana in 2012 marked a major milestone, solidifying our capacity to compete globally and deliver long-term value across regional borders.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Scale</h4>
                    <p className="text-sm text-slate-500">Supporting critical economic sectors at scale.</p>
                  </div>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Target size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Precision</h4>
                    <p className="text-sm text-slate-500">Disciplined execution and technical mastery.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center text-slate-900 font-black hover:text-amber-600 transition-all border-b-4 border-slate-900 hover:border-amber-500 pb-2 group text-xl uppercase tracking-widest">
                  Learn Our Full Story <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 sm:py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-32">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-6">Expertise</h2>
            <h3 className="text-4xl sm:text-7xl font-outfit font-bold text-slate-900 mb-8 leading-tight">Integrated Engineering Services</h3>
            <p className="text-xl sm:text-2xl text-slate-500 font-light leading-relaxed">
              We deploy specialized technical mastery across critical infrastructure sectors to ensure operational efficiency and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {SERVICES.map((s) => {
              const IconMap: any = { Building2, Settings, Zap, Factory: Building2, Droplets: Building2, Truck: Building2 };
              const Icon = IconMap[s.icon] || Settings;
              return (
                <div key={s.id} className="group bg-white p-12 sm:p-14 rounded-[3rem] border border-slate-100 hover:border-amber-500/20 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4">
                  <div className="w-24 h-24 bg-slate-50 text-amber-500 rounded-[2rem] flex items-center justify-center mb-12 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-amber-500/30">
                    <Icon size={42} />
                  </div>
                  <h4 className="text-3xl font-outfit font-bold text-slate-900 mb-6">{s.title}</h4>
                  <p className="text-slate-500 leading-relaxed mb-12 text-lg font-light">
                    {s.description}
                  </p>
                  <Link to={`/services#${s.id}`} className="inline-flex items-center text-amber-600 font-black text-sm uppercase tracking-widest hover:translate-x-3 transition-transform">
                    Explore Details <ChevronRight className="ml-2" size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-24 sm:py-48 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-4xl sm:text-6xl md:text-8xl font-outfit font-bold mb-12 leading-[1.1] tracking-tighter">
              A Proven Force in <span className="text-amber-500">Cross-Border</span> Infrastructure
            </h3>
            <p className="text-xl sm:text-3xl text-slate-400 mb-24 font-light leading-relaxed max-w-5xl mx-auto">
              With full operational hubs in Nigeria and Ghana, Interrand Engineering delivers technical depth and disciplined delivery to the critical industrial sectors of West Africa.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {[
                { label: 'Year Established', val: '2009' },
                { label: 'Ghana Expansion', val: '2012' },
                { label: 'RC Number', val: '831090' },
                { label: 'Status', val: 'Active' }
              ].map((stat, i) => (
                <div key={i} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500">
                  <div className="text-4xl sm:text-6xl font-black text-amber-500 mb-3 font-outfit group-hover:scale-110 transition-transform">{stat.val}</div>
                  <div className="text-xs sm:text-sm uppercase tracking-[0.4em] text-slate-500 font-black group-hover:text-slate-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-40 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-amber-500 rounded-[4rem] p-16 sm:p-32 text-center shadow-3xl shadow-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-[100px]"></div>
          <div className="relative z-10">
            <h3 className="text-5xl sm:text-7xl md:text-8xl font-outfit font-bold text-slate-900 mb-12 leading-[0.9] tracking-tighter">
              Build the <br className="hidden sm:block" /> Industrial Future
            </h3>
            <p className="text-xl sm:text-3xl text-slate-950/70 mb-20 max-w-4xl mx-auto font-light leading-relaxed">
              Partner with Interrand Engineering for world-class technical execution, disciplined management, and structural innovation that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-16 py-7 bg-slate-900 text-white rounded-sm font-black text-xl uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl hover:scale-105 active:scale-95">
                Start Your Project
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-16 py-7 bg-white/10 text-slate-950 border-2 border-slate-900/10 rounded-sm font-black text-xl uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all backdrop-blur-md">
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
