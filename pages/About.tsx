import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-24">
      {/* Editorial Header */}
      <div className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block animate-fade-in">Established 1998</span>
          <h1 className="text-5xl md:text-8xl font-black text-charcoal dark:text-white leading-[0.85] tracking-tight mb-8">
            More Than Just <br />
            <span className="text-primary italic font-serif">Flour & Water</span>.
          </h1>
        </div>
      </div>

      {/* 1. The Backstory */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-white dark:bg-surface-dark rounded-[3rem] p-8 md:p-16 shadow-xl border border-charcoal/5 dark:border-white/5">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/2">
               <h2 className="text-4xl font-black text-charcoal dark:text-white mb-8 relative inline-block">
                 The Origin Story
                 <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></div>
               </h2>
               <div className="prose prose-lg text-charcoal/70 dark:text-cream/70">
                 <p className="mb-6">
                   It all began on a rainy Tuesday in Surat, 1998. Arjun Patel, armed with nothing but his grandmother's handwritten recipe book and a stubborn refusal to compromise on quality, opened a tiny 200-square-foot shop.
                 </p>
                 <p className="mb-6">
                   Shree Surti Bakery wasn't an overnight success. In a market flooded with mass-produced white bread, Arjun's dark, crusty, slow-fermented loaves were an anomaly. But he stood by his craft. He would stand outside the shop, handing out warm slices to passersby, confident that one taste would change their minds.
                 </p>
                 <p>
                   He was right. Today, that tiny shop has grown into a city landmark, but the soul remains the same. The starter used in our sourdough today is a direct descendant of the one Arjun cultivated in his kitchen twenty-six years ago.
                 </p>
               </div>
             </div>
             <div className="lg:w-1/2 relative">
               <div className="aspect-[3/4] rounded-[2rem] overflow-hidden rotate-2 shadow-2xl">
                  <img src={IMAGES.country_loaf} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Original Shop" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-charcoal text-white p-6 rounded-2xl shadow-xl max-w-xs">
                 <p className="font-serif italic">"We bake for the community, not the shelf."</p>
                 <p className="text-xs font-bold uppercase mt-2 text-primary">— Arjun Patel</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 2. The Process */}
      <section className="container mx-auto px-6 mb-32">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-charcoal dark:text-white mb-6">The 48-Hour Ritual</h2>
            <p className="text-xl text-charcoal/60 dark:text-cream/60">
              Great bread cannot be hurried. Our process is a labor of love that spans two full days.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "The Mix", 
                desc: "We blend organic, stone-ground flour with filtered water and our wild yeast starter. This initial mix, or 'autolyse', allows the flour to fully hydrate." 
              },
              { 
                step: "02", 
                title: "The Rise", 
                desc: "The dough rests for 24-36 hours in a temperature-controlled environment. This slow fermentation breaks down gluten and unlocks deep, complex flavors." 
              },
              { 
                step: "03", 
                title: "The Hearth", 
                desc: "Bread is loaded onto the hot stone hearth of our deck ovens. High heat and steam create the signature blistered crust and open airy crumb." 
              }
            ].map((item) => (
              <div key={item.step} className="bg-cream dark:bg-white/5 p-8 rounded-[2rem] relative overflow-hidden group hover:bg-white dark:hover:bg-surface-dark transition-colors duration-300">
                 <span className="text-[120px] font-black text-charcoal/5 dark:text-white/5 absolute -top-4 -right-4 leading-none select-none">{item.step}</span>
                 <h3 className="text-2xl font-black text-charcoal dark:text-white mb-4 relative z-10">{item.title}</h3>
                 <p className="text-charcoal/70 dark:text-cream/70 relative z-10 leading-relaxed">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 3. Moral Principles */}
      <section className="container mx-auto px-6">
        <div className="bg-charcoal text-white rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[200px] opacity-20"></div>
           
           <h2 className="text-4xl md:text-5xl font-black mb-12 relative z-10 text-center md:text-left">Our Promise to You & The Earth</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="flex gap-6">
                 <div className="size-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-primary">recycling</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Zero Waste Philosophy</h3>
                    <p className="text-white/70 leading-relaxed">
                       We bake in small batches to minimize surplus. Any day-old bread is donated to local shelters or repurposed into breadcrumbs and puddings. Nothing goes to the bin.
                    </p>
                 </div>
              </div>

              <div className="flex gap-6">
                 <div className="size-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-primary">handshake</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Local First</h3>
                    <p className="text-white/70 leading-relaxed">
                       Our flour comes from mills within 100 miles. Our milk is from a local cooperative. By supporting local producers, we reduce our carbon footprint and ensure peak freshness.
                    </p>
                 </div>
              </div>

              <div className="flex gap-6">
                 <div className="size-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-primary">verified_user</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Clean Label</h3>
                    <p className="text-white/70 leading-relaxed">
                       No preservatives. No dough conditioners. No unpronounceable chemicals. Just flour, water, salt, and yeast. The way bread was meant to be.
                    </p>
                 </div>
              </div>
              
              <div className="flex gap-6">
                 <div className="size-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-primary">diversity_1</span>
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-2">People Over Profit</h3>
                    <p className="text-white/70 leading-relaxed">
                       We pay our bakers a living wage and foster a culture of respect and creativity. Happy bakers make better bread. It's that simple.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;