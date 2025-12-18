import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, PRODUCTS, REVIEWS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark">
      {/* New Hero Section */}
      <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#2C241E]">
        
        {/* Mobile Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-center md:hidden z-0" 
          style={{ backgroundImage: `url(${IMAGES.hero_mobile})` }} 
        />
        
        {/* Desktop Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-center hidden md:block z-0" 
          style={{ backgroundImage: `url(${IMAGES.hero_desktop})` }} 
        />

        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-16 md:pt-0">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-1 md:mb-3 drop-shadow-lg tracking-tight">Experience</h2>
          <h1 className="text-primary text-5xl md:text-7xl lg:text-8xl font-black mb-3 md:mb-4 drop-shadow-lg tracking-tight">
            Artisan Baking
          </h1>
          <p className="text-white text-lg md:text-3xl font-body italic mb-6 md:mb-8 font-medium drop-shadow-md">
            Where Tradition Meets Taste
          </p>
          <p className="text-white/90 text-sm md:text-xl max-w-xl md:max-w-2xl mb-10 md:mb-12 font-body leading-relaxed drop-shadow text-balance">
            Handcrafted daily using traditional methods and 100% natural ingredients, bringing warmth and flavor to your home.
          </p>
          
          <div className="flex flex-row gap-4 md:gap-6 w-full justify-center">
            <Link to="/menu" className="px-8 py-4 bg-charcoal text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform border border-charcoal min-w-[140px]">
              View Menu
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white text-charcoal rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl min-w-[140px]">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-black text-charcoal dark:text-white mb-4 md:mb-6">The Secret Ingredient is <span className="text-primary italic font-serif">Patience</span>.</h2>
            <p className="text-base md:text-lg text-charcoal/60 dark:text-cream/60">We don't rush the process. From the first fold to the final bake, we let the dough lead the way.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: 'temp_preferences_custom', title: 'Slow Proofed', text: 'Our sourdough fermenting for 48 hours to develop deep complex flavors.' },
              { icon: 'spa', title: 'Organic Flour', text: 'Sourced from local sustainable mills that share our love for the earth.' },
              { icon: 'hand_gesture', title: 'Hand Kneaded', text: 'Every loaf is shaped by hand, giving it a unique character and heart.' }
            ].map((prop, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl hover:bg-cream dark:hover:bg-surface-dark transition-all duration-500 group">
                <div className="size-16 md:size-20 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl md:text-4xl">{prop.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-charcoal dark:text-white mb-2 md:mb-4">{prop.title}</h3>
                <p className="text-sm md:text-base text-charcoal/60 dark:text-cream/60">{prop.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items - Horizontal Scroll */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 mb-8 md:mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-charcoal dark:text-white mb-2">Morning Essentials</h2>
            <p className="text-charcoal/50 text-sm md:text-base">Curated favorites from our morning bake.</p>
          </div>
          <Link to="/menu" className="hidden md:flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
            See the full menu <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </div>
        
        <div className="flex overflow-x-auto gap-4 md:gap-8 px-6 no-scrollbar snap-x snap-mandatory pb-8">
          {featuredProducts.map((p) => (
            <div key={p.id} className="min-w-[280px] md:min-w-[400px] snap-center group">
              <div className="relative h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 shadow-xl md:shadow-2xl">
                <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-1 md:mb-2">{p.name}</h3>
                      <p className="text-white/70 text-xs md:text-sm font-medium">{p.description}</p>
                    </div>
                    <span className="text-primary font-black text-xl md:text-2xl">₹{p.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New CTA Button */}
        <div className="flex justify-center mt-6 md:hidden">
          <Link to="/menu" className="px-10 py-4 bg-charcoal dark:bg-surface-dark text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-lg">
             Explore Full Menu
          </Link>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-cream dark:bg-white/5">
        <div className="container mx-auto px-6 mb-12 text-center">
           <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">Testimonials</span>
           <h2 className="text-3xl md:text-4xl font-black text-charcoal dark:text-white">Love from the Neighborhood</h2>
        </div>
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
           <div className="flex gap-6 md:grid md:grid-cols-3 min-w-[300px] pb-4">
              {REVIEWS.map((review) => (
                 <div key={review.id} className="min-w-[300px] p-8 bg-white dark:bg-surface-dark rounded-[2rem] shadow-sm border border-charcoal/5 dark:border-white/5 flex flex-col">
                    <div className="flex gap-1 text-primary mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: `'FILL' ${i < review.rating ? 1 : 0}` }}>star</span>
                      ))}
                    </div>
                    <p className="italic text-charcoal/70 dark:text-cream/70 mb-6 flex-grow">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                       <img src={review.avatar} alt={review.author} className="size-10 rounded-full" />
                       <div>
                          <p className="font-bold text-sm text-charcoal dark:text-white">{review.author}</p>
                          <p className="text-[10px] uppercase font-bold text-charcoal/40 dark:text-cream/40">{review.date}</p>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
           <div className="bg-charcoal dark:bg-surface-dark rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-5xl font-black mb-6">Visit Us Today</h2>
                 <p className="text-white/70 mb-8 text-lg">
                   Surti Bakery, Priya Crossroads, Opp. Priya Talkies,<br className="hidden md:block"/> Sevasi, Vadodara, Gujarat 391410
                 </p>
                 <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest hover:bg-primary-dark transition-all">
                       Get Directions
                    </Link>
                    <a href="tel:9484848148" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
                       Call +91 94848 48148
                    </a>
                 </div>
               </div>
           </div>
        </div>
      </section>

      {/* Call to Action - Immersive */}
      <section className="px-4 md:px-6 py-16 md:py-24 pt-0">
        <div className="max-w-6xl mx-auto relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-charcoal h-[400px] md:h-[500px] flex items-center justify-center text-center px-6">
           <img src={IMAGES.texture} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" alt="Texture" />
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8">Bring the bakery <br /><span className="text-primary italic font-serif">home with you</span>.</h2>
              <p className="text-white/70 text-base md:text-lg mb-8 md:mb-12">Pre-order your weekend sourdough loaves or a custom pastry box for your next gathering.</p>
              <Link to="/contact" className="inline-flex items-center px-8 py-4 md:px-12 md:py-5 bg-primary text-white rounded-full font-black text-sm md:text-xl shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all uppercase tracking-wider">
                Pre-order Now
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;