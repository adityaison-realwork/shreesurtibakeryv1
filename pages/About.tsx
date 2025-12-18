import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-24 overflow-x-hidden">
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

      {/* 2. The Process - CREATIVE REDESIGN (Timeline Journey) */}
      <section className="container mx-auto px-6 mb-32 relative">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black text-charcoal dark:text-white mb-6">The Symphony of Dough</h2>
            <p className="text-xl text-charcoal/60 dark:text-cream/60">
              A 4-movement masterpiece performed daily. No shortcuts, just time and temperature.
            </p>
         </div>

         <div className="relative max-w-5xl mx-auto">
            {/* Timeline Spine: Left aligned on mobile, Center on desktop */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2"></div>

            {[
              { 
                step: "01", 
                title: "The Awakening", 
                subtitle: "Autolyse • 2 Hours",
                desc: "Flour meets water. We gently mix organic grains with filtered water and let them rest. This passive phase allows the gluten to organize itself naturally before the yeast arrives.",
                icon: "water_drop"
              },
              { 
                step: "02", 
                title: "The Long Sleep", 
                subtitle: "Fermentation • 24-36 Hours",
                desc: "Our wild yeast culture is folded in. The dough naps in a cool room, slowly developing the signature tang and airy structure that defines a true sourdough.",
                icon: "hourglass_bottom"
              },
              { 
                step: "03", 
                title: "The Sculpture", 
                subtitle: "Shaping • 4 Hours",
                desc: "Each loaf is divided and shaped by human hands. No machines. We create surface tension that will later bloom into a beautiful 'ear' in the oven.",
                icon: "hand_gesture"
              },
              { 
                step: "04", 
                title: "The Transformation", 
                subtitle: "Baking • 45 Mins",
                desc: "High heat and steam. The loaves hit the hot deck of our stone oven. The crust caramelizes to a deep chestnut hue while the inside remains moist and custardy.",
                icon: "local_fire_department"
              }
            ].map((item, index) => (
              <div key={item.step} className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 
                 {/* Spacer for desktop layout balance */}
                 <div className="hidden md:block md:w-1/2"></div>

                 {/* Timeline Node */}
                 <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 size-16 rounded-full bg-background-light dark:bg-background-dark border-4 border-white dark:border-surface-dark shadow-xl z-10 flex items-center justify-center">
                    <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center">
                       <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </div>
                 </div>

                 {/* Content Card */}
                 <div className={`pl-24 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    {/* Watermark Number */}
                    <span className={`text-6xl md:text-8xl font-black text-charcoal/5 dark:text-white/5 absolute -top-8 md:-top-12 select-none z-0 hidden md:block ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>{item.step}</span>
                    <span className="md:hidden text-6xl font-black text-charcoal/5 dark:text-white/5 absolute -top-6 right-0 select-none z-0">{item.step}</span>
                    
                    <div className="relative z-10">
                       <h3 className="text-2xl md:text-3xl font-black text-charcoal dark:text-white mb-2">{item.title}</h3>
                       <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">{item.subtitle}</span>
                       <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed text-sm md:text-base">
                         {item.desc}
                       </p>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 3. Principles - CREATIVE REDESIGN (Horizontal Scroll) */}
      <section className="py-20 bg-charcoal dark:bg-black/20 text-white overflow-hidden relative">
         {/* Background accent */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 mb-12">
           <h2 className="text-4xl font-black mb-4">The Baker's Oath</h2>
           <p className="text-white/60">The non-negotiables that guide our hands.</p>
        </div>

        {/* Horizontal Scroll Container (Snap) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 no-scrollbar md:grid md:grid-cols-4 md:px-6 md:pb-0 container mx-auto">
           {[
             { title: "Zero Waste", desc: "Day-old bread feeds the shelter, not the bin.", color: "bg-orange-500", icon: "recycling" },
             { title: "Local First", desc: "Flour from 100 miles. Milk from down the road.", color: "bg-blue-500", icon: "location_on" },
             { title: "Clean Label", desc: "Pronounceable ingredients only. No chemistry set.", color: "bg-green-500", icon: "science_off" },
             { title: "Fair Wages", desc: "Happy bakers make better bread. Simple math.", color: "bg-purple-500", icon: "groups" }
           ].map((item, i) => (
             <div key={i} className={`min-w-[85vw] md:min-w-0 snap-center p-8 rounded-[2.5rem] relative overflow-hidden group bg-white/5 border border-white/10 flex flex-col justify-between h-[300px] md:h-auto`}>
                <div className={`absolute -top-10 -right-10 p-24 rounded-full blur-[50px] opacity-20 ${item.color} group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md relative z-10 group-hover:scale-110 transition-transform duration-500">
                   <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                
                <div className="relative z-10">
                   <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                   <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default About;