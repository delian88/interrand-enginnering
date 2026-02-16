
import React from 'react';
import { LEADERSHIP, CORE_VALUES } from '../constants.tsx';
import { Target, Eye, Shield, Users, User, CheckCircle2, Globe2, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Dynamic Header */}
      <div className="bg-slate-900 py-32 sm:py-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-110">
          <img src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Interrand Office" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-7xl font-outfit font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">Our Legacy & Vision</h1>
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            A world-class engineering subsidiary of the Interrand Group, building the foundation of West African development since 2009.
          </p>
        </div>
      </div>

      {/* Corporate Identity */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-xs font-bold uppercase tracking-widest mb-6">Established 2009</div>
              <h2 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-900 mb-8 leading-tight">Technically Driven Excellence Across <span className="text-amber-500">Borders</span></h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  Registered on 14th July 2009 with RC No 831090, Interrand Engineering Ltd is a core engineering subsidiary within the Interrand Group, established with a vision for global impact.
                </p>
                <p>
                  Our expansion to Ghana in 2012 marked a milestone in our operational capacity, signaling a willingness to compete and deliver world-class infrastructure beyond Nigeria. Under the leadership of David Omonije and Dr. Benjamin Abimbola Adigun, we operate with a clear focus on engineering standards.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start p-6 bg-slate-50 rounded-2xl">
                  <Globe2 className="text-amber-500 mr-4 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900">Cross-Border Hubs</h4>
                    <p className="text-sm text-slate-500 mt-1">Strategic presence in Nigeria and Ghana since 2013.</p>
                  </div>
                </div>
                <div className="flex items-start p-6 bg-slate-50 rounded-2xl">
                  <Award className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold text-slate-900">High Standards</h4>
                    <p className="text-sm text-slate-500 mt-1">Disciplined project delivery and long-term asset value.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-3xl">
                <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Industrial Hub" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-500 rounded-full flex items-center justify-center text-white text-center p-6 font-bold shadow-2xl hidden lg:flex">
                15+ Years Mastery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Operations */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            <div className="bg-white p-10 sm:p-16 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100">
              <div className="w-20 h-20 bg-amber-500 text-white rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-amber-500/20">
                <Target size={40} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                To assist and support the industrialization and development of critical sectors by deploying our technical, professional, and financial expertise across the West African sub-region.
              </p>
            </div>
            <div className="bg-white p-10 sm:p-16 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-slate-900/20">
                <Eye size={40} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-outfit font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                To be a leading global force in engineering, recognized for technical innovation, disciplined delivery, and structural integrity that catalyzes economic growth.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-outfit font-bold text-slate-900 mb-16">The Pillars of Interrand Engineering</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((v, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl text-left border border-slate-100 hover:border-amber-500/30 transition-all shadow-sm">
                  <CheckCircle2 className="text-amber-500 mb-4" size={32} />
                  <h4 className="font-bold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">Executive Governance</h2>
            <h3 className="text-3xl sm:text-5xl font-outfit font-bold text-slate-900 mb-6">Expert Leadership Team</h3>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-light leading-relaxed">
              Guided by a distinguished executive leadership team, Interrand Engineering Ltd. maintains a steadfast commitment to corporate governance, technical innovation, and strategic cross-border development. Our management brings together decades of specialized engineering expertise and disciplined financial oversight to ensure every project exceeds global benchmarks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {LEADERSHIP.map((leader, i) => (
              <div key={i} className="group text-center">
                <div className="aspect-square rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center justify-center mb-10 shadow-inner group-hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden">
                  <User size={120} className="text-slate-300 group-hover:text-amber-500 transition-colors duration-500 transform group-hover:scale-110" strokeWidth={1} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="px-6">
                  <h4 className="text-3xl font-bold text-slate-900 mb-2">{leader.name}</h4>
                  <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-6">{leader.role}</p>
                  <p className="text-slate-600 italic leading-relaxed font-light text-base sm:text-lg">"{leader.bio}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
