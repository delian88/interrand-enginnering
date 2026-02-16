
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">Connect With Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Partner with Interrand Engineering for technically driven excellence and global standard project delivery.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Get in Touch</h2>
              <h3 className="text-3xl font-outfit font-bold text-slate-900 mb-8">Discuss Your Next Project</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-6 text-amber-600 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Nigeria Headquarters</h4>
                    <p className="text-slate-600 max-w-xs">Plot 1124, Beside Gudu District Library Gudu, Abuja, Nigeria, 900104</p>
                    <p className="text-amber-600 text-sm font-bold mt-1">RC No: 831090</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6 text-blue-600 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Ghana Office</h4>
                    <p className="text-slate-600">Airport Residential Area, Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-6 text-slate-600 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Phone</h4>
                    <p className="text-slate-600">0806 352 9436</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-6 text-slate-600 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                    <p className="text-slate-600">info@interrandgroup.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">Newsletter</h4>
                <p className="text-slate-400 text-sm mb-6">Stay updated on our industrialization projects across West Africa.</p>
                <div className="flex">
                  <input type="email" placeholder="Enter your email" className="bg-slate-800 border-none rounded-l-lg px-4 py-3 flex-grow focus:ring-1 focus:ring-amber-500 text-white" />
                  <button className="bg-amber-500 px-6 py-3 rounded-r-lg font-bold hover:bg-amber-600 transition-all">Subscribe</button>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h3>
                  <p className="text-slate-600">Thank you for reaching out. Our technical team will review your inquiry and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Organization</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none">
                      <option>Industrial Support</option>
                      <option>Civil Engineering</option>
                      <option>Electrical Systems</option>
                      <option>Project Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message / Inquiry</label>
                    <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center group shadow-xl">
                    Submit Inquiry <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-2xl z-10 text-center max-w-sm">
            <MapPin size={32} className="text-amber-500 mx-auto mb-4" />
            <h4 className="font-bold text-slate-900 mb-2">Regional Engineering Centers</h4>
            <p className="text-slate-600 text-sm">Strategic offices in Abuja and Accra to serve the West African sub-region.</p>
          </div>
        </div>
        <img src="https://picsum.photos/seed/map/1920/600?grayscale" className="w-full h-full object-cover" alt="Map area" />
      </section>
    </div>
  );
};

export default Contact;
