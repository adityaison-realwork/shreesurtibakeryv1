import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const galleryItems = Object.entries(IMAGES).map(([key, src]) => ({
    id: key,
    src,
    title: key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  }));

  const getGridStyle = (index: number) => {
    // Creating a varied grid layout
    // 0: Horizontal (2x1)
    // 1: Square (1x1)
    // 2: Vertical (1x2)
    // 3: Square (1x1)
    // 4: Big Square (2x2)
    const i = index % 8;
    if (i === 0) return 'md:col-span-2 md:row-span-1';
    if (i === 2) return 'md:col-span-1 md:row-span-2';
    if (i === 4) return 'md:col-span-2 md:row-span-2';
    if (i === 6) return 'md:col-span-2 md:row-span-1';
    return 'md:col-span-1 md:row-span-1';
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-24">
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Diary</span>
          <h1 className="text-5xl md:text-7xl font-black text-charcoal dark:text-white leading-none tracking-tight mb-8">
            The <span className="text-primary italic font-serif">Aesthetics</span> <br />of Crumb.
          </h1>
          <p className="text-lg text-charcoal/60 dark:text-cream/60">A curated collection of our daily bakes and behind-the-scenes moments.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px] grid-flow-dense">
          {galleryItems.map((item, index) => (
            <div key={item.id} className={`group relative rounded-[2rem] overflow-hidden shadow-lg ${getGridStyle(index)}`}>
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-black text-lg tracking-wider uppercase border border-white/30 px-6 py-2 rounded-full backdrop-blur-md">
                   {item.title}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Hook */}
      <div className="container mx-auto px-6 mt-32">
         <div className="bg-cream dark:bg-surface-dark rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>
            <span className="material-symbols-outlined text-primary text-4xl mb-6">camera_alt</span>
            <h2 className="text-3xl font-black text-charcoal dark:text-white mb-4">Want more?</h2>
            <p className="text-charcoal/60 dark:text-cream/60 mb-8">Follow our daily bake on Instagram @ShreeSurtiBakery</p>
            <a href="#" className="inline-block px-10 py-4 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg">
               Follow Us
            </a>
         </div>
      </div>
    </div>
  );
};

export default Gallery;