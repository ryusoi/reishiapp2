import React, { useEffect, useRef } from 'react';
import { Sunrise, CheckCircle, Wind, Play } from 'lucide-react';

const TeaRitual: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
                    el.classList.add('opacity-100', 'translate-y-0', 'blur-0');
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
        
        return () => observer.disconnect();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
      <section className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
         {/* Background */}
         <div className="absolute top-0 w-full h-full bg-cover bg-center -z-10 opacity-100" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e29626f0-78e5-4f5c-804a-7d6950dee264_3840w.jpg")'}}></div>
         
         <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="flex flex-col items-center justify-center text-center mb-16 pt-8">
               <h1 className="text-5xl md:text-7xl tracking-tight mb-2 font-serif" style={{fontFamily: "'Instrument Serif', serif", fontWeight: 400}}>Ganoderma with Matcha Tea Rituals</h1>
               <p className="text-slate-200/80 mt-1 font-light">Mindful tea guidance for your daily practice</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-12">
               {/* Card 1: Daily Ritual */}
               <div data-reveal className="transition-all duration-700 ease-out will-change-transform opacity-0 translate-y-8 blur-sm">
                  <div 
                    className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-[rgba(0,0,0,0.5)_0px_25px_50px_-12px] group p-8 sm:p-10 ring-1 ring-emerald-500/10 bg-center relative overflow-hidden text-white bg-cover rounded-3xl justify-between"
                    style={{backgroundImage: 'url("https://cdn.midjourney.com/ab015e70-3530-4b30-957c-7e88ecccfe00/0_1.png?w=800&q=80")', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(16, 185, 129, 0.12) 0px 0px 0px 1px'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                     <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <video src="https://cdn.midjourney.com/video/7624a6bf-c70d-4c63-861d-9f9b79b5e226/1.mp4" muted playsInline loop className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>
                     
                     <div className="space-y-6 relative z-10">
                        <div className="flex items-center justify-between">
                           <Sunrise className="w-8 h-8 text-emerald-200 group-hover:scale-110 transition-transform" />
                           <span className="text-xs px-3 py-1.5 bg-emerald-400/20 text-emerald-200 rounded-full font-medium">Fresh</span>
                        </div>
                        <div>
                           <p className="text-3xl sm:text-4xl tracking-tight font-serif" style={{fontFamily: "'Instrument Serif', serif", fontWeight: 400}}>7 Day Ritual</p>
                           <p className="text-emerald-200 text-lg mt-2">Morning Ceremony</p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 right-0 text-right">
                                <p className="text-emerald-200 text-2xl font-serif" style={{fontFamily: "'Instrument Serif', serif", fontWeight: 400}}>12 min</p>
                                <p className="text-emerald-300 text-sm font-light">completed</p>
                            </div>
                        </div>
                     </div>

                     <div className="space-y-4 border-t border-emerald-700/50 pt-6 relative z-10">
                        <p className="leading-relaxed text-sm text-slate-50 font-light">
                           “Whisk, breathe, and be present. Today’s ritual celebrated calm, bright energy.”
                        </p>
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-2">
                              <span className="text-xs tracking-wider font-semibold">MATCHA</span>
                              <CheckCircle className="w-4 h-4 text-emerald-200" />
                           </div>
                           <span className="text-emerald-200 text-sm hover:underline cursor-pointer font-medium">Continue ritual</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Card 2: Breath + Ritual */}
               <div data-reveal className="transition-all duration-700 ease-out will-change-transform opacity-0 translate-y-8 blur-sm delay-100">
                  <div 
                    className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-[rgba(0,0,0,0.5)_0px_25px_50px_-12px] group p-8 sm:p-10 ring-1 ring-cyan-400/10 bg-center relative overflow-hidden text-white bg-cover rounded-3xl justify-between"
                    style={{backgroundImage: 'url("https://cdn.midjourney.com/1d4fd59c-9023-4628-8ea1-4256408af86b/0_1.png?w=800&q=80")', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(34, 211, 238, 0.12) 0px 0px 0px 1px'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                     <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <video src="https://cdn.midjourney.com/video/157de36c-d492-4080-87f3-0dcebd3b268f/1.mp4" muted playsInline loop className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>

                     <div className="space-y-6 relative z-10">
                        <div className="flex items-center justify-between">
                           <Wind className="w-8 h-8 text-cyan-200 group-hover:scale-110 transition-transform" />
                           <span className="text-xs px-3 py-1.5 bg-cyan-400/20 text-cyan-200 rounded-full font-medium">Whisking</span>
                        </div>
                        <div>
                           <p className="text-2xl sm:text-3xl tracking-tight font-serif" style={{fontFamily: "'Instrument Serif', serif", fontWeight: 400}}>Whisk & Breathe</p>
                           <p className="text-cyan-200 text-base mt-2">Calming Ritual</p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 right-0 text-right">
                                <p className="text-cyan-200 text-2xl font-serif" style={{fontFamily: "'Instrument Serif', serif", fontWeight: 400}}>5 min</p>
                                <p className="text-cyan-300 text-sm font-light">session</p>
                            </div>
                        </div>
                     </div>

                     <div className="space-y-4 border-t border-cyan-600/50 pt-6 relative z-10">
                        <p className="leading-relaxed text-sm text-slate-50 font-light">
                           Pair mindful breathing with gentle whisking to settle the mind and invite steady energy.
                        </p>
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-2">
                              <span className="text-xs tracking-wider font-semibold">MATCHA</span>
                              <CheckCircle className="w-4 h-4 text-cyan-200" />
                           </div>
                           <span className="text-cyan-200 text-sm hover:underline cursor-pointer font-medium">Start ritual</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Card 3: Ritual Library */}
               <div data-reveal className="transition-all duration-700 ease-out will-change-transform opacity-0 translate-y-8 blur-sm delay-200">
                  <div 
                    className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-[rgba(0,0,0,0.5)_0px_25px_50px_-12px] group p-8 sm:p-10 ring-1 ring-violet-400/10 bg-center relative overflow-hidden text-white bg-cover rounded-3xl justify-between"
                    style={{backgroundImage: 'url("https://cdn.midjourney.com/a2ccbf1b-ad14-4f40-9667-0ac8bfdb7d70/0_2.png?w=800&q=80")', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(139, 92, 246, 0.12) 0px 0px 0px 1px'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                     <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <video src="https://cdn.midjourney.com/video/2624865a-07f4-4dc8-a9f3-12f620b1ff50/2.mp4" muted playsInline loop className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </div>

                     <div className="space-y-6 relative z-10">
                        <div className="flex items-center justify-between">
                           <span className="text-xs px-3 py-1.5 bg-violet-400/20 text-violet-200 rounded-full font-medium">Tea House</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl tracking-tighter font-serif" style={{fontFamily: "'Instrument Serif', serif", fontWeight: 400}}>Rituals</h2>
                        <div className="space-y-3 text-sm">
                           {[
                               { name: 'Clarity', sessions: 12 },
                               { name: 'Calm Energy', sessions: 8 },
                               { name: 'Gentle Kindness', sessions: 15 },
                               { name: 'Body Grounding', sessions: 6 }
                           ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors cursor-pointer">
                                 <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-slate-50 rounded-full"></div>
                                    <span className="font-light">{item.name}</span>
                                 </div>
                                 <span className="font-medium text-white flex items-center">
                                    {item.sessions} sessions <Play className="w-3 h-3 ml-1" />
                                 </span>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4 border-t border-violet-700/50 pt-6 relative z-10">
                        <p className="leading-relaxed text-sm text-slate-50 font-light">
                           A curated tea-ritual library with guided ceremonies for every mood and moment.
                        </p>
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-2">
                              <span className="text-xs tracking-wider font-semibold">MATCHA</span>
                              <CheckCircle className="w-4 h-4 text-violet-200" />
                           </div>
                           <span className="text-violet-200 text-sm hover:underline cursor-pointer font-medium">Explore rituals</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-2 flex items-center justify-between">
                <p className="text-xs text-zinc-400 font-light">© 2025 Matcha</p>
                <div className="hidden sm:flex items-center gap-4 text-xs text-slate-900/80">
                <a href="#" className="hover:text-white transition-colors text-zinc-400">Privacy</a>
                <span className="text-zinc-700">|</span>
                <a href="#" className="hover:text-white transition-colors text-zinc-400">Terms</a>
                </div>
            </div>
         </div>
      </section>
    );
};

export default TeaRitual;