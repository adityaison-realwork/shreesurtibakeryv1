import React, { useState } from 'react';
import { PRODUCTS, IMAGES } from '../constants';
import { Product } from '../types';

const categories: Product['category'][] = ['Sourdough', 'Sweet', 'Savory', 'Coffee'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Helper to determine grid classes based on index to create a "diverse" layout
  const getGridClasses = (index: number) => {
    // Pattern: 
    // 0: Big Square (2x2)
    // 1: Tall (1x2)
    // 2: Small (1x1)
    // 3: Wide (2x1)
    // 4: Small (1x1)
    // 5: Small (1x1)
    const patternIndex = index % 6;
    switch (patternIndex) {
      case 0: return 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto';
      case 1: return 'md:col-span-1 md:row-span-2 aspect-[4/5]';
      case 3: return 'md:col-span-2 md:row-span-1 aspect-[2/1]';
      default: return 'md:col-span-1 md:row-span-1 aspect-square';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <h1 className="text-5xl font-black text-charcoal dark:text-white mb-2">Our Menu</h1>
          <p className="text-charcoal/60 dark:text-cream/60 text-lg">Freshly baked goodness, every single day.</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input 
            type="search" 
            placeholder="Search pastries..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-surface-dark border-none shadow-sm focus:ring-2 focus:ring-primary text-charcoal dark:text-white"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-white/40">search</span>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 pb-8 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setActiveCategory('All')}
          className={`flex h-10 shrink-0 items-center px-6 rounded-full font-bold transition-all ${activeCategory === 'All' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white dark:bg-surface-dark text-charcoal dark:text-cream hover:bg-gray-100'}`}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex h-10 shrink-0 items-center px-6 rounded-full font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white dark:bg-surface-dark text-charcoal dark:text-cream hover:bg-gray-100'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Diverse Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {filteredProducts.map((product, index) => {
            const gridClass = getGridClasses(index);
            
            return (
              <div 
                key={product.id} 
                className={`group relative overflow-hidden rounded-[2rem] shadow-sm cursor-default bg-charcoal/5 dark:bg-white/5 ${gridClass}`}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                   {product.tags?.map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                       {tag}
                     </span>
                   ))}
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                   <h3 className="text-white text-2xl font-black leading-tight mb-1">{product.name}</h3>
                   <div className="flex justify-between items-end">
                      <p className="text-white/80 text-sm font-medium line-clamp-2 max-w-[70%]">{product.description}</p>
                      <div className="text-white font-bold text-xl">${product.price.toFixed(2)}</div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-charcoal/20 dark:text-white/20 mb-4">cookie</span>
          <p className="text-xl text-charcoal/60 dark:text-cream/60">No treats found matching your search.</p>
        </div>
      )}
      
      {/* Feature Section (Replaces Quick Add) */}
      <div className="mt-16 mb-8">
        <div className="bg-charcoal dark:bg-surface-dark rounded-[2.5rem] shadow-2xl overflow-hidden relative">
           {/* Decorative */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
           
           <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 h-64 md:h-[400px] relative w-full">
                 <img src={IMAGES.texture} className="w-full h-full object-cover" alt="Texture" />
                 <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent md:bg-gradient-to-l md:from-transparent md:to-charcoal/0"></div>
              </div>
              <div className="p-8 md:p-16 flex-1 relative z-10 text-center md:text-left">
                 <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-2 block">Chef's Special</span>
                 <h3 className="text-3xl md:text-5xl font-black text-white mb-4">Pain au Chocolat</h3>
                 <p className="text-white/70 text-lg leading-relaxed mb-8">
                   Our signature pastry. A classic French delicacy with a crisp, flaky crust and a center of dark, semi-sweet chocolate batons sourced from single-origin cacao.
                 </p>
                 <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    <span>Available Daily until 11 AM</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;