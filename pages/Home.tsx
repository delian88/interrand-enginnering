
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
  MapPin,
  Play,
  Activity
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
      {/* Visual Hero Slider Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-slate-950">
        {HERO_SLIDES.map((slide: any, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0'
            }`}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0">
               <img 
                src={slide.image} 
                alt={slide.title} 
                className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl text-left">
                {/* Welcome / Kicker Tag */}
                {slide.welcome && (
                  <div className={`flex items-center gap-4 mb-6 transition-all duration-700 delay-100 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                    <span className="h-[2px] w-12 bg-amber-500"></span>
                    <span className="text-amber-500 font-outfit font-black text-sm sm:text-lg uppercase tracking-[0.4em]">
                      {slide.welcome}
                    </span>
                  </div>
                )}

                {/* Simplified Punchy Headline with Shining Effect */}
                <div className="mb-6 sm:mb-8 overflow-hidden">
                  <h1 className={`text-4xl sm:text-6xl md:text-7xl font-outfit font-bold text-white leading-[1.1] tracking-tighter transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
                    {slide.title.split(' ').map((word: string, i: number) => (
                      <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                        {word === 'Industrial' || word === 'Regional' || word === 'Mastery' ? (
                          <span className="shining-text">{word}</span>
                        ) : word}
                      </span>
                    ))}
                  </h1>
                </div>
                
                {/* Reduced Subtitle */}
                <div className="max-w-2xl overflow-hidden mb-10">
                  <p className={`text-lg sm:text-xl text-slate-300 font-light leading-relaxed transition-all duration-1000 delay-500 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
                    {slide.subtitle}
                  </p>
                </div>
                
                {/* Action Row */}
                <div className={`flex flex-col sm:flex-row gap-5 transition-all duration-1000 delay-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <Link 
                    to="/services" 
                    className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-slate-950 transition-all duration-300 bg-amber-500 rounded-sm hover:bg-white shadow-2xl uppercase tracking-widest text-xs glow-hover"
                  >
                    <span className="relative z-10 flex items-center">
                      Expertise
                      <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-10 py-5 font-black text-white border-2 border-white/20 rounded-sm hover:bg-white/10 hover:border-white transition-all duration-300 uppercase tracking-widest text-xs"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Context Indicator */}
            <div className={`absolute bottom-24 right-4 sm:right-12 z-20 transition-all duration-1000 delay-700 hidden lg:block ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
               <div className="flex flex-col items-end gap-3">
                 <div className="text-amber-500 font-black text-xs uppercase tracking-[0.5em] border-b-2 border-amber-500/30 pb-2">{slide.caption}</div>
                 <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">
                   <MapPin size={12} className="text-amber-500/50" />
                   {slide.locationTag}
                 </div>
               </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Overlays */}
        <div className="absolute bottom-12 left-4 right-4 sm:left-12 sm:right-12 z-30 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-amber-500 font-outfit font-black text-sm tracking-tighter">0{currentSlide + 1}</span>
            <div className="w-24 sm:w-48 h-[1px] bg-white/20 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-amber-500 transition-all duration-[8000ms] ease-linear"
                style={{ width: '100%', key: currentSlide }}
              ></div>
            </div>
            <span className="text-white/20 font-outfit font-bold text-sm tracking-tighter">0{HERO_SLIDES.length}</span>
          </div>
          
          <div className="flex gap-3">
            <button onClick={prevSlide} className="group p-4 bg-white/5 hover:bg-amber-500 text-white hover:text-slate-950 rounded-full transition-all duration-500 border border-white/10 backdrop-blur-md">
              <ChevronLeft size={20} className="group-active:scale-90" />
            </button>
            <button onClick={nextSlide} className="group p-4 bg-white/5 hover:bg-amber-500 text-white hover:text-slate-950 rounded-full transition-all duration-500 border border-white/10 backdrop-blur-md">
              <ChevronRight size={20} className="group-active:scale-90" />
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Overview Section */}
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group reveal">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Heavy Infrastructure" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Construction Site" />
                  </div>
                </div>
                <div className="pt-12 sm:pt-20">
                  <div className="aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Technical Engineering" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-[2rem] shadow-3xl hidden xl:block float">
                <div className="text-3xl font-bold text-amber-500 mb-1 font-outfit">RC 831090</div>
                <div className="text-[10px] uppercase tracking-[0.4em] font-black opacity-60">Certified Excellence</div>
              </div>
            </div>

            <div className="space-y-10 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-xs font-black uppercase tracking-widest">About the Company</span>
                <h2 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-900 leading-[1.1]">
                  Driving <span className="shining-text">Industrialization</span> Across West Africa
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Interrand Engineering Ltd is a premier subsidiary of the Interrand Group, founded with a clear mandate to catalyze structural growth through technical, professional, and financial expertise.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:border-amber-500/30">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Scale</h4>
                    <p className="text-sm text-slate-500">Supporting critical economic sectors at scale.</p>
                  </div>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:border-blue-500/30">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-lg">Precision</h4>
                    <p className="text-sm text-slate-500">Disciplined execution and technical mastery.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center text-slate-900 font-black hover:text-amber-600 transition-all border-b-4 border-slate-900 hover:border-amber-500 pb-2 group text-lg uppercase tracking-widest">
                  Learn Our Full Story <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Operational Excellence Video Section */}
      <section className="relative py-32 sm:py-48 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-large-building-construction-site-view-4842-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
          <div className="absolute inset-0 bg-slate-950/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 reveal">
              <div className="flex items-center gap-4 mb-8">
                <span className="p-3 bg-amber-500/20 rounded-full text-amber-500 animate-pulse">
                   <Activity size={24} />
                </span>
                <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs">Live On-Site Activity</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-outfit font-bold text-white mb-8 leading-tight">
                Engineering at the <br /> <span className="shining-text">Highest Caliber</span>
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-xl">
                Our operations are characterized by disciplined project delivery and rigorous adherence to international engineering standards, ensuring structural integrity in every build.
              </p>
              <div className="flex flex-wrap gap-12">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-black">Project Monitoring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-500 mb-1">100%</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-black">Safety Compliance</div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="relative group">
                 <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-white/20 p-4 animate-[spin_20s_linear_infinite] group-hover:border-amber-500 transition-colors"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white/5 backdrop-blur-3xl rounded-full flex flex-col items-center justify-center text-center p-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                       <Play className="text-amber-500 fill-amber-500 mb-4" size={32} />
                       <span className="text-white text-xs font-black uppercase tracking-widest leading-tight">Operational <br /> Excellence</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20 reveal">
            <h2 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-6">Expertise</h2>
            <h3 className="text-3xl sm:text-6xl font-outfit font-bold text-slate-900 mb-8 leading-tight">Engineering Excellence</h3>
            <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed">
              We deploy specialized technical mastery across critical infrastructure sectors to ensure operational efficiency and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {SERVICES.map((s, idx) => {
              const IconMap: any = { Building2, Settings, Zap, Factory: Building2, Droplets: Building2, Truck: Building2 };
              const Icon = IconMap[s.icon] || Settings;
              return (
                <div key={s.id} className="group bg-white p-10 sm:p-12 rounded-[2.5rem] border border-slate-100 hover:border-amber-500/20 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="w-20 h-20 bg-slate-50 text-amber-500 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-amber-500/30">
                    <Icon size={36} />
                  </div>
                  <h4 className="text-2xl font-outfit font-bold text-slate-900 mb-6">{s.title}</h4>
                  <p className="text-slate-500 leading-relaxed mb-10 text-base font-light">
                    {s.description}
                  </p>
                  <Link to={`/services#${s.id}`} className="inline-flex items-center text-amber-600 font-black text-xs uppercase tracking-widest hover:translate-x-3 transition-transform">
                    Explore Details <ChevronRight className="ml-2" size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-24 sm:py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Industrial" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-bold mb-10 leading-[1.1] tracking-tighter reveal">
              Regional <span className="shining-text">Infrastructure</span> Leadership
            </h3>
            <p className="text-xl sm:text-2xl text-slate-300 mb-20 font-light leading-relaxed max-w-4xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
              With full operational hubs in Nigeria and Ghana, we deliver technical depth to the critical industrial sectors of West Africa.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
              {[
                { label: 'Year Established', val: '2009' },
                { label: 'Ghana Expansion', val: '2012' },
                { label: 'RC Number', val: '831090' },
                { label: 'Status', val: 'Active' }
              ].map((stat, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 reveal" style={{ transitionDelay: `${i * 0.1 + 0.3}s` }}>
                  <div className="text-3xl sm:text-5xl font-black text-amber-500 mb-2 font-outfit group-hover:scale-105 transition-transform">{stat.val}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-slate-500 font-black group-hover:text-slate-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-amber-500 rounded-[3rem] p-12 sm:p-24 text-center shadow-3xl shadow-amber-500/30 relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-[80px]"></div>
          <div className="relative z-10">
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-outfit font-bold text-slate-900 mb-10 leading-[1] tracking-tighter">
              Build the <br className="hidden sm:block" /> Future Today
            </h3>
            <p className="text-lg sm:text-2xl text-slate-950/70 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Partner with Interrand Engineering for world-class technical execution and structural innovation that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-sm font-black text-lg uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl hover:scale-105 active:scale-95 glow-hover">
                Start Project
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-12 py-6 bg-white/10 text-slate-950 border-2 border-slate-900/10 rounded-sm font-black text-lg uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all backdrop-blur-md">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
