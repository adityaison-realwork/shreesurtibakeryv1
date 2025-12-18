import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-32 pb-24">
      {/* Header & Stats */}
      <div className="container mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Community</span>
          <h1 className="text-5xl md:text-8xl font-black text-charcoal dark:text-white leading-none tracking-tight mb-8">
            The Wall of <br />
            <span className="text-primary italic font-serif">Love</span>.
          </h1>
          <p className="text-lg text-charcoal/60 dark:text-cream/60 max-w-lg">
            Our customers are the yeast that helps us grow. Here’s why they keep coming back for their daily loaf.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 items-center bg-white dark:bg-surface-dark p-8 rounded-[2.5rem] shadow-xl border border-charcoal/5 dark:border-white/5">
           <div>
              <p className="text-5xl font-black text-charcoal dark:text-white leading-none mb-2">4.9</p>
              <div className="flex text-primary mb-1">
                 {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 dark:text-cream/40">Average Rating</p>
           </div>
           <div className="h-12 w-px bg-charcoal/10 dark:bg-white/10 hidden sm:block"></div>
           <div>
              <p className="text-5xl font-black text-charcoal dark:text-white leading-none mb-2">1.2k+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 dark:text-cream/40">Happy Regulars</p>
           </div>
        </div>
      </div>

      {/* Review Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={review.id} className={`group p-10 rounded-[3rem] transition-all duration-500 shadow-sm border border-charcoal/5 dark:border-white/5 ${idx % 2 === 0 ? 'bg-white dark:bg-surface-dark hover:shadow-2xl' : 'bg-primary text-white shadow-xl shadow-primary/20 rotate-1'}`}>
              <div className="flex items-center gap-4 mb-8">
                <img src={review.avatar} alt={review.author} className="size-14 rounded-2xl object-cover shadow-lg group-hover:rotate-6 transition-transform" />
                <div>
                   <h3 className={`font-black text-lg ${idx % 2 !== 0 ? 'text-white' : 'text-charcoal dark:text-white'}`}>{review.author}</h3>
                   <span className={`text-[10px] font-bold uppercase tracking-widest ${idx % 2 !== 0 ? 'text-white/60' : 'text-charcoal/40 dark:text-cream/40'}`}>{review.date}</span>
                </div>
              </div>
              
              <div className={`flex mb-6 ${idx % 2 !== 0 ? 'text-white' : 'text-primary'}`}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `'FILL' ${i < review.rating ? 1 : 0}` }}>
                    star
                  </span>
                ))}
              </div>

              <p className={`text-lg italic font-serif leading-relaxed mb-6 ${idx % 2 !== 0 ? 'text-white/90' : 'text-charcoal/70 dark:text-cream/70'}`}>
                "{review.text}"
              </p>
              
              <div className={`pt-6 border-t ${idx % 2 !== 0 ? 'border-white/20' : 'border-charcoal/5 dark:border-white/5'} flex justify-between items-center`}>
                 <span className={`text-[10px] font-black uppercase tracking-widest ${idx % 2 !== 0 ? 'text-white/40' : 'text-charcoal/30'}`}>Verified Customer</span>
                 <span className="material-symbols-outlined opacity-30">format_quote</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 mt-32 text-center">
         <h2 className="text-4xl font-black text-charcoal dark:text-white mb-8">Share your Surti experience.</h2>
         <button className="px-12 py-5 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-full font-black text-lg shadow-2xl hover:bg-primary transition-all">
            Write a Review
         </button>
      </div>
    </div>
  );
};

export default Reviews;