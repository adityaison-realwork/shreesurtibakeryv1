import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS, APP_NAME } from '../constants';

export const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color logic: White when not scrolled (on dark hero), specific colors when scrolled (on white background)
  const textColorClass = scrolled ? 'text-charcoal dark:text-white' : 'text-white';
  const navLinkClass = (isActive: boolean) => 
    `text-sm font-bold tracking-wide uppercase transition-all hover:text-primary ${
      isActive 
        ? 'text-primary' 
        : scrolled 
          ? 'text-charcoal/60 dark:text-cream/60' 
          : 'text-white/80 hover:text-white'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center px-6 h-20 transition-all duration-500 ${scrolled ? 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-b border-charcoal/5 dark:border-white/5 shadow-sm' : 'bg-transparent'}`}>
      <Link to="/" className="flex items-center group">
        <div className={`flex size-10 items-center justify-center rounded-xl transition-all duration-300 ${scrolled ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-white/10 text-white group-hover:bg-white group-hover:text-primary'}`}>
          <span className="material-symbols-outlined text-[24px]">bakery_dining</span>
        </div>
        <h2 className={`ml-3 text-xl font-extrabold tracking-tight transition-colors duration-300 ${textColorClass}`}>
          {APP_NAME}
        </h2>
      </Link>
      
      <div className="hidden md:flex items-center ml-auto gap-8">
        {NAV_ITEMS.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path}
            className={({ isActive }) => navLinkClass(isActive)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export const MobileTabBar: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-background-dark/90 border-t border-charcoal/5 dark:border-white/10 backdrop-blur-xl px-2 pb-safe">
      <div className="flex items-center justify-between h-16 max-w-md mx-auto">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 transition-all ${
                isActive ? 'text-primary' : 'text-charcoal/40 dark:text-white/40'
              }`
            }
          >
            <span className="material-symbols-outlined text-[24px] mb-1 leading-none">{item.icon}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream dark:bg-charcoal/30 pt-16 pb-24 md:pb-16 px-6 border-t border-charcoal/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
            <span className="ml-2 text-xl font-extrabold text-charcoal dark:text-white">{APP_NAME}</span>
          </Link>
          <p className="text-charcoal/60 dark:text-cream/60 leading-relaxed">
            Crafting artisanal moments since 1998. Every loaf is a labor of love, baked with wild yeast and local pride.
          </p>
        </div>
        
        <div>
          <h4 className="font-extrabold text-charcoal dark:text-white mb-6 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-4">
            {NAV_ITEMS.map(item => (
              <li key={item.path}>
                <Link to={item.path} className="text-charcoal/60 dark:text-cream/60 hover:text-primary transition-colors font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-charcoal dark:text-white mb-6 uppercase tracking-widest text-xs">Visit</h4>
          <p className="text-charcoal/60 dark:text-cream/60 mb-2">123 Baker Street, City Center</p>
          <p className="text-charcoal/60 dark:text-cream/60 mb-6">City 45001, IN</p>
          <p className="text-charcoal/60 dark:text-cream/60">Mon-Fri: 7am — 8pm</p>
          <p className="text-charcoal/60 dark:text-cream/60">Sat-Sun: 8am — 9pm</p>
        </div>

        <div>
          <h4 className="font-extrabold text-charcoal dark:text-white mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
          <div className="flex gap-4">
            {['facebook', 'instagram', 'twitter'].map(social => (
              <a key={social} href="#" className="size-10 rounded-full bg-charcoal/5 dark:bg-white/5 flex items-center justify-center text-charcoal/60 dark:text-cream/60 hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-[20px]">link</span>
              </a>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="font-extrabold text-charcoal dark:text-white mb-4 uppercase tracking-widest text-xs">Newsletter</h4>
            <div className="flex border-b border-charcoal/20 dark:border-white/20 pb-2">
              <input type="email" placeholder="Your email" className="bg-transparent border-none focus:ring-0 p-0 text-sm w-full placeholder:text-charcoal/30" />
              <button className="text-primary font-bold text-sm">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-charcoal/5 dark:border-white/5 text-center text-xs text-charcoal/40 dark:text-cream/40">
        © 2024 Shree Surti Bakery. Hand-baked in the city.
      </div>
    </footer>
  );
};