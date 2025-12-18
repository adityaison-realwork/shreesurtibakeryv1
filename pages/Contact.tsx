import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32 px-4 max-w-7xl mx-auto bg-background-light dark:bg-background-dark">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-charcoal dark:text-white mb-6">Let's Break Bread.</h1>
        <p className="text-xl text-charcoal/60 dark:text-cream/60 max-w-2xl mx-auto">
          Whether you have a question about our ingredients, need a custom order, or just want to say hello, we're all ears.
        </p>
      </div>

      {/* Live Status Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Status Card */}
        <div className="bg-primary text-white p-8 rounded-[2rem] shadow-xl shadow-primary/30 flex flex-col items-center text-center relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 size-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm animate-pulse">
             <span className="material-symbols-outlined text-3xl">storefront</span>
           </div>
           <h3 className="text-lg font-bold uppercase tracking-widest opacity-80 mb-1">Current Status</h3>
           <p className="text-4xl font-black">OPEN NOW</p>
           <p className="text-sm mt-2 opacity-90">Closes at 8:00 PM</p>
        </div>

        {/* Crowd Card */}
        <div className="bg-charcoal dark:bg-surface-dark text-white p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
           <div className="flex gap-1 mb-6 mt-2">
              <div className="w-2 h-6 bg-green-400 rounded-full"></div>
              <div className="w-2 h-6 bg-green-400 rounded-full"></div>
              <div className="w-2 h-6 bg-charcoal/50 border border-white/20 rounded-full"></div>
              <div className="w-2 h-6 bg-charcoal/50 border border-white/20 rounded-full"></div>
              <div className="w-2 h-6 bg-charcoal/50 border border-white/20 rounded-full"></div>
           </div>
           <h3 className="text-lg font-bold uppercase tracking-widest opacity-60 mb-1">Crowd Level</h3>
           <p className="text-4xl font-black text-green-400">MODERATE</p>
           <p className="text-sm mt-2 opacity-60">Plenty of seating available</p>
        </div>

        {/* Wait Time Card */}
        <div className="bg-white dark:bg-white/5 text-charcoal dark:text-white p-8 rounded-[2rem] shadow-xl border border-charcoal/5 dark:border-white/10 flex flex-col items-center text-center">
           <span className="material-symbols-outlined text-4xl mb-4 text-primary">timer</span>
           <h3 className="text-lg font-bold uppercase tracking-widest opacity-60 mb-1">Avg. Wait Time</h3>
           <p className="text-4xl font-black">~5 MINS</p>
           <p className="text-sm mt-2 opacity-60">Fresh batches every hour</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Info & Map - Spans 2 cols */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-cream dark:bg-white/5 p-10 rounded-[2.5rem] relative overflow-hidden">
              <h2 className="text-3xl font-black mb-8 dark:text-white">Visit Us</h2>
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                       <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                       <p className="font-bold text-lg dark:text-white">123 Baker Street</p>
                       <p className="text-charcoal/60 dark:text-cream/60">Food District, City Center 45001</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                       <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                       <p className="font-bold text-lg dark:text-white">+1 (555) 123-4567</p>
                       <p className="text-charcoal/60 dark:text-cream/60">Mon-Fri, 9am - 5pm</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                       <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                       <p className="font-bold text-lg dark:text-white">hello@shreesurti.com</p>
                       <p className="text-charcoal/60 dark:text-cream/60">For bulk orders & inquiries</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Stylized Map Placeholder */}
           <div className="h-64 rounded-[2.5rem] overflow-hidden relative shadow-lg group cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFDsg0XNzjBl_si_2LiNix19p-Tg4MStwsaS_o9UCia5cPtoMLQ4J-Bxc_yUG7J9eohe6zBiEJDaGqOpR44uCCsN4-7Z-1g5igNij7EaOgpar3QwKgShqjsTr8c5yI8suOsthLDOmNiHXCKXAe3LVEHz8tEkkEMjrXLTAMpyHFLIkGsld7CE_HNGARW4dRHETM7h13GXK6zToUunelQv1AMXtG6JN7PxlQdktA5VWn7fX3MPVySltvledxUqKKRWViIM6lgx0t00Hr" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Map Background" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-white text-charcoal font-black px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform">
                    Get Directions
                 </button>
              </div>
           </div>
        </div>

        {/* Form Card - Spans 3 cols */}
        <div className="lg:col-span-3 bg-white dark:bg-surface-dark rounded-[3rem] p-8 md:p-12 shadow-2xl border border-charcoal/5 dark:border-white/5 relative overflow-hidden">
           <div className="absolute -top-32 -right-32 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
           
           <h2 className="text-3xl font-black mb-8 dark:text-white relative z-10">Send a Message</h2>
           <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">First Name</label>
                    <input type="text" className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium" placeholder="Jane" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium" placeholder="Doe" />
                 </div>
              </div>
              
              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">Email Address</label>
                 <input type="email" className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium" placeholder="jane@example.com" />
              </div>

              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">Message</label>
                 <textarea rows={5} className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium resize-none" placeholder="Tell us what's on your mind..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark hover:translate-y-1 transition-all">
                 Send Message
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;