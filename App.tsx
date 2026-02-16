
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Globe, Facebook, Linkedin, Twitter } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    if (isOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLightNav = scrolled || location.pathname !== '/';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group relative z-[110]">
            <div className={`text-xl sm:text-2xl font-outfit font-bold tracking-tight transition-colors duration-300 ${isLightNav ? 'text-slate-900' : 'text-white'}`}>
              INTERRAND<span className="text-amber-500">ENGINEERING</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-amber-500 relative py-2 ${
                  isLightNav ? 'text-slate-600' : 'text-white/90'
                } ${location.pathname === link.path ? 'text-amber-500' : ''}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/30 text-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden relative z-[110]">
            <button 
              onClick={toggleMenu} 
              className={`p-2 transition-colors duration-300 rounded-lg ${isLightNav ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white z-[100] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-3xl font-outfit font-bold transition-colors ${
                  location.pathname === link.path ? 'text-amber-500' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100">
            <Link 
              to="/contact" 
              className="block w-full text-center py-5 bg-amber-500 text-white rounded-2xl font-bold text-xl shadow-xl shadow-amber-500/20"
            >
              Request a Consultation
            </Link>
            <div className="mt-12 flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all"><Linkedin size={24} /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all"><Facebook size={24} /></a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-outfit font-bold text-white tracking-tight">
              INTERRAND<span className="text-amber-500">ENGINEERING</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A core engineering subsidiary within the Interrand Group, established for global impact and technically driven excellence since 2009.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all"><Icon size={20} /></a>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-lg font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors text-sm">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Expertise</h4>
            <ul className="space-y-3">
              {['Civil Engineering', 'Mechanical Systems', 'Power & Electrical', 'Industrial Support', 'Oil & Gas Services'].map((item) => (
                <li key={item} className="flex items-center text-sm text-slate-400"><ChevronRight size={14} className="text-amber-500 mr-2" /> {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm">
                <MapPin size={18} className="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="block font-bold text-white mb-0.5">Nigeria Office</span>Victoria Island, Lagos</span>
              </li>
              <li className="flex items-start text-sm">
                <Globe size={18} className="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="block font-bold text-white mb-0.5">Ghana Office</span>Airport Residential Area, Accra</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail size={18} className="text-amber-500 mr-3 flex-shrink-0" />
                <span>info@interrandengineering.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Interrand Engineering Ltd (RC 831090). All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
