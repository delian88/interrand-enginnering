
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">Technical Expertise</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            From heavy infrastructure to specialized industrial systems, we provide professional mastery across the West African region.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
            {SERVICES.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;
              return (
                <div key={service.id} id={service.id} className="flex flex-col md:flex-row gap-8 scroll-mt-32">
                  <div className="w-20 h-20 bg-slate-50 text-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                    <IconComponent size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-outfit font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Engineering Standards', 'Technical Depth', 'disciplined Execution', 'Safety Focused'].map((tag, i) => (
                        <div key={i} className="flex items-center text-slate-500 text-sm">
                          <Icons.CheckCircle2 className="text-green-500 mr-2" size={16} />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industrialization Deep Dive */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-outfit font-bold text-slate-900 mb-6">The Interrand Ecosystem</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  As a core engineering subsidiary, we draw on the financial and professional strength of the entire Interrand Group. This allows us to handle mega-projects that require significant technical depth and financial backing.
                </p>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Cross-Border Advantage</h4>
                    <p className="text-slate-500 text-sm">Our 2013 activation in Ghana demonstrates our capacity to replicate excellence in diverse regulatory environments.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">Global Impact Vision</h4>
                    <p className="text-slate-500 text-sm">We don't just build; we engineer the industrial heartbeat of Nigeria and Ghana.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1531834357221-ed7c296df74a?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg mt-12" alt="Technical Work" />
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg" alt="Factory Support" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Our Methodology</h2>
          <h3 className="text-4xl font-outfit font-bold text-slate-900 mb-16">How We Deliver Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-slate-100 mb-4">01</div>
              <h4 className="font-bold text-xl mb-2">Diagnosis</h4>
              <p className="text-slate-500 text-sm">Deep analysis of technical requirements and site challenges.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-slate-100 mb-4">02</div>
              <h4 className="font-bold text-xl mb-2">Innovation</h4>
              <p className="text-slate-500 text-sm">Applying world-class standards and modern engineering tech.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-slate-100 mb-4">03</div>
              <h4 className="font-bold text-xl mb-2">Execution</h4>
              <p className="text-slate-500 text-sm">Disciplined delivery ensuring long-term asset integrity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
