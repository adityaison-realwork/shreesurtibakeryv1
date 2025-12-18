import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const whatsappMsg = encodeURIComponent("Hello Shree Surti Bakery, I would like to inquire about...");
  // Using a generic embed format for the provided coordinates.
  const mapEmbedUrl = "https://maps.google.com/maps?q=22.299616800818118,73.12797900125874&z=15&output=embed";
  const mapLink = "https://www.google.com/maps/dir/?api=1&destination=22.299616800818118,73.12797900125874";
  
  // Dynamic Status Logic
  const [isOpen, setIsOpen] = useState(false);
  const [showHours, setShowHours] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      // Shop is open from 10 AM (10) to 10 PM (22)
      const open = currentHour >= 10 && currentHour < 22;
      setIsOpen(open);
    };
    
    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const weekDays = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

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
      {/* Mobile Layout: Status full width (col-span-2), Crowd & Wait side-by-side (col-span-1 each) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {/* Status Card - Full width on mobile row 1 */}
        <div className={`col-span-2 md:col-span-1 ${isOpen ? 'bg-primary' : 'bg-charcoal/80 dark:bg-white/10'} text-white p-8 rounded-[2rem] shadow-xl shadow-primary/30 flex flex-col items-center text-center relative overflow-hidden group transition-colors duration-500`}>
           <div className={`absolute -right-4 -top-4 size-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ${!isOpen && 'opacity-20'}`}></div>
           <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm animate-pulse">
             <span className="material-symbols-outlined text-3xl">storefront</span>
           </div>
           <h3 className="text-lg font-bold uppercase tracking-widest opacity-80 mb-1">Current Status</h3>
           <p className="text-4xl font-black">{isOpen ? 'OPEN NOW' : 'CLOSED'}</p>
           <p className="text-sm mt-2 opacity-90">
             {isOpen ? 'Closes at 10:00 PM' : 'Opens at 10:00 AM'}
           </p>
        </div>

        {/* Crowd Card - Left on mobile row 2 */}
        <div className="col-span-1 bg-charcoal dark:bg-surface-dark text-white p-6 md:p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center relative overflow-hidden justify-center">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
           <div className="flex gap-1 mb-4 md:mb-6 mt-2">
              <div className={`w-1.5 h-4 md:w-2 md:h-6 ${isOpen ? 'bg-green-400' : 'bg-white/20'} rounded-full`}></div>
              <div className={`w-1.5 h-4 md:w-2 md:h-6 ${isOpen ? 'bg-green-400' : 'bg-white/20'} rounded-full`}></div>
              <div className="w-1.5 h-4 md:w-2 md:h-6 bg-charcoal/50 border border-white/20 rounded-full"></div>
              <div className="w-1.5 h-4 md:w-2 md:h-6 bg-charcoal/50 border border-white/20 rounded-full"></div>
           </div>
           <h3 className="text-xs md:text-lg font-bold uppercase tracking-widest opacity-60 mb-1">Crowd</h3>
           <p className={`text-xl md:text-3xl font-black ${isOpen ? 'text-green-400' : 'text-white/40'}`}>
             {isOpen ? 'MODERATE' : '-'}
           </p>
        </div>

        {/* Wait Time Card - Right on mobile row 2 */}
        <div className="col-span-1 bg-white dark:bg-white/5 text-charcoal dark:text-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-charcoal/5 dark:border-white/10 flex flex-col items-center text-center justify-center">
           <span className="material-symbols-outlined text-3xl md:text-4xl mb-2 md:mb-4 text-primary">timer</span>
           <h3 className="text-xs md:text-lg font-bold uppercase tracking-widest opacity-60 mb-1">Wait Time</h3>
           <p className="text-xl md:text-3xl font-black">{isOpen ? '~5 MIN' : '-'}</p>
        </div>
      </div>

      {/* Quick Action Buttons - 3 Columns side-by-side on mobile */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 mb-16">
         <a href="tel:9484848148" className="flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-charcoal/5 dark:border-white/5 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-500/30 transition-all group">
            <div className="size-10 md:size-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-xl md:text-2xl">call</span>
            </div>
            <span className="text-[10px] md:text-sm font-black uppercase tracking-wider text-charcoal dark:text-white">Call Us</span>
         </a>

         <a href={mapLink} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-charcoal/5 dark:border-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500/30 transition-all group">
            <div className="size-10 md:size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-xl md:text-2xl">directions</span>
            </div>
            <span className="text-[10px] md:text-sm font-black uppercase tracking-wider text-charcoal dark:text-white">Get Directions</span>
         </a>

         <a href={`https://wa.me/9194848148?text=${whatsappMsg}`} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-charcoal/5 dark:border-white/5 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-500/30 transition-all group">
            <div className="size-10 md:size-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined text-xl md:text-2xl">chat</span>
            </div>
            <span className="text-[10px] md:text-sm font-black uppercase tracking-wider text-charcoal dark:text-white">WhatsApp</span>
         </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Info & Map - Spans 2 cols */}
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-cream dark:bg-white/5 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
              <h2 className="text-3xl font-black mb-8 dark:text-white">Visit Us</h2>
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                       <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                       <p className="font-bold text-base md:text-lg dark:text-white">Surti Bakery</p>
                       <p className="text-charcoal/60 dark:text-cream/60 text-sm">Priya Crossroads, Opp. Priya Talkies,<br/>Sevasi, Vadodara,<br/>Gujarat 391410</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                       <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                       <p className="font-bold text-lg dark:text-white">+91 94848 48148</p>
                       <div className="text-charcoal/60 dark:text-cream/60 cursor-pointer select-none" onClick={() => setShowHours(!showHours)}>
                         <div className="flex items-center gap-2">
                           <span>View Opening Hours</span>
                           <span className={`material-symbols-outlined text-sm transition-transform ${showHours ? 'rotate-180' : ''}`}>expand_more</span>
                         </div>
                       </div>
                       
                       {/* Dropdown Timings */}
                       <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${showHours ? 'grid-rows-[1fr] mt-4 pb-2' : 'grid-rows-[0fr]'}`}>
                         <div className="overflow-hidden">
                           <ul className="space-y-2 text-sm">
                             {weekDays.map(day => (
                               <li key={day} className="flex justify-between border-b border-charcoal/10 dark:border-white/10 pb-1 last:border-0">
                                 <span className="opacity-70">{day}</span>
                                 <span className="font-bold">10am – 10pm</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                       </div>

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

           {/* Real Google Maps Embed */}
           <div className="h-64 rounded-[2.5rem] overflow-hidden relative shadow-lg bg-background-light dark:bg-white/5">
              <iframe 
                src={mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bakery Location"
              ></iframe>
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
                    <input type="text" className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium" placeholder="Arjun" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium" placeholder="Patel" />
                 </div>
              </div>
              
              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">Email Address</label>
                 <input type="email" className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium" placeholder="arjun@example.com" />
              </div>

              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/50 dark:text-cream/50 mb-2">Message</label>
                 <textarea rows={5} className="w-full bg-background-light dark:bg-white/5 rounded-2xl border-none p-4 focus:ring-2 focus:ring-primary dark:text-white transition-all font-medium resize-none" placeholder="I'd like to order a cake for..."></textarea>
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