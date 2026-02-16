
import React, { useState } from 'react';
import { PROJECTS } from '../constants.tsx';
import { MapPin, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Industrial', 'Civil', 'Electrical'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">Our Footprint</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Evidence of capacity, confidence, and cross-border engineering delivery.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-bold transition-all border-2 ${
                  filter === cat 
                  ? 'bg-amber-500 border-amber-500 text-white' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-amber-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-widest">
                      {project.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <MapPin size={14} className="mr-1" /> {project.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <button className="w-full py-4 border border-slate-200 rounded-xl font-bold flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                    Project Details <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ghana Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="p-12 lg:p-20 text-white lg:w-1/2">
              <h2 className="text-3xl font-outfit font-bold mb-6">Cross-Border Confidence</h2>
              <p className="text-lg text-amber-50 mb-8 leading-relaxed">
                In 2012, Interrand Engineering Ltd signaled its capacity to compete globally by expanding to Ghana. By 2013, we became fully active, delivering structured engineering solutions across the region.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-bold mb-1">2012</div>
                  <div className="text-amber-100 text-sm">Expansion Year</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="text-amber-100 text-sm">Local Commitment</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=1200" alt="Ghana Projects" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
