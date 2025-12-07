import React, { useEffect, useState } from 'react';
import { Instagram, Wind, Sun, Clock, Brain, Eye, Heart } from 'lucide-react';

const ReishiDecorPage: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setOffset(window.pageYOffset);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans overflow-hidden">
      
      {/* 1. PARALLAX HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-[120%]"
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        >
           <video 
              src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Reishi%20Decor%202.mp4"
              className="w-full h-full object-cover opacity-80"
              autoPlay muted loop playsInline
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-neutral-900"></div>
        </div>

        <div className="relative z-10 text-center px-6 animate-on-scroll fade-in mix-blend-screen">
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter mb-4 text-gold-chrome drop-shadow-2xl">
              REISHI DECOR
           </h1>
           <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-neutral-300 uppercase">
              Natural Sculptures • Good Fortune • Longevity
           </p>
        </div>
      </section>

      {/* 2. THE ARTISTIC PROCESS */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-right">
               <div className="w-16 h-1 bg-gradient-to-r from-[#aa771c] to-transparent mb-8"></div>
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                  <span className="text-gold-chrome">2 Years</span> of<br/>
                  Atmospheric Sculpting
               </h2>
               <p className="text-neutral-400 text-lg leading-relaxed mb-6 font-light">
                  Each piece is a collaboration between human intent and mycelial intelligence. 
                  It takes over <strong>24 months</strong> from colonization to the final dried sculpture.
               </p>
               <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                  During the fruiting phase, we become conductors of the environment. By altering the 
                  <span className="text-white font-medium"> angle of light</span> sources and meticulously modulating 
                  <span className="text-white font-medium"> CO2 and Oxygen</span> levels, we guide the Ganoderma to stretch, 
                  twist, and antler into "out of this world" shapes that no machine could replicate.
               </p>
               
               <div className="flex gap-8 text-neutral-500">
                  <div className="flex flex-col items-center">
                     <Clock className="w-6 h-6 mb-2 text-[#aa771c]" />
                     <span className="text-xs uppercase tracking-widest">24 Months</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <Sun className="w-6 h-6 mb-2 text-[#aa771c]" />
                     <span className="text-xs uppercase tracking-widest">Light Sculpting</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <Wind className="w-6 h-6 mb-2 text-[#aa771c]" />
                     <span className="text-xs uppercase tracking-widest">O2 / CO2 Flow</span>
                  </div>
               </div>
            </div>

            <div className="relative animate-on-scroll scale-in">
               <div className="aspect-[3/4] rounded-sm overflow-hidden border border-[#aa771c]/30 p-2">
                  <div className="w-full h-full bg-neutral-800 overflow-hidden relative">
                      <video 
                        src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/REISHI%20DECOR%20A%20Fragile%20Dose%20of%20Health.mp4"
                        className="w-full h-full object-cover opacity-90"
                        autoPlay muted loop playsInline
                      />
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-4 py-2 border-l-2 border-[#aa771c]">
                         <p className="text-xs text-[#aa771c] uppercase tracking-widest">A Fragile Dose of Health</p>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. VISUAL IMMERSION (The Natural Sculpture) */}
      <section className="relative py-24 bg-black overflow-hidden">
         <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#aa771c]/20 via-transparent to-transparent"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll fade-in">
               <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Interior Design & Meditation</h2>
               <p className="text-neutral-500 max-w-2xl mx-auto">
                  In Japanese culture, these majestic natural statues represent good fortune and longevity. 
                  Perfect for meditation rooms, they create an atmosphere of profound calm and relaxation.
               </p>
            </div>

            <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(170,119,28,0.2)] animate-on-scroll slide-up">
               <video 
                  src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Reishi%20Decor%20Natural%20Sculpture.mp4"
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
               />
            </div>
         </div>
      </section>

      {/* 4. NEUROAESTHETICS & SCIENCE */}
      <section className="py-32 bg-[#0a0a0c] relative">
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            
            <div className="mb-20 text-center animate-on-scroll fade-in">
               <div className="inline-block p-3 rounded-full bg-white/5 border border-white/10 mb-6">
                  <Brain className="w-8 h-8 text-emerald-400" />
               </div>
               <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                  Neuroaesthetics & <br/> Psychophysiology
               </h2>
               <p className="text-xl text-neutral-400 font-light">
                  Where Aesthetic Perception Meets Biological Resonance
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {/* Card 1 */}
               <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#aa771c]/50 transition-colors animate-on-scroll slide-right">
                  <h3 className="text-2xl font-serif text-[#aa771c] mb-4 flex items-center gap-3">
                     <Eye className="w-5 h-5" /> Visual Catalyst
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                     The human brain evolved to recognize cues of vitality. When we encounter Reishi-inspired forms, 
                     the brain engages associative networks linking these stimuli to well-being, potentially triggering 
                     dopamine and serotonin release through the <strong>Mirror Neuron System</strong>.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#aa771c]/50 transition-colors animate-on-scroll slide-left delay-100">
                  <h3 className="text-2xl font-serif text-[#aa771c] mb-4 flex items-center gap-3">
                     <Heart className="w-5 h-5" /> Stress Regulation
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                     Reishi’s organic curvature aligns with <strong>Biophilic Design</strong> principles. 
                     Environmental psychology suggests these nature-inspired aesthetics can lower cortisol levels 
                     and reduce blood pressure by signaling a restorative environment to the subconscious.
                  </p>
               </div>

               {/* Card 3 (Full Width) */}
               <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-black border border-emerald-500/20 hover:border-emerald-500/40 transition-colors animate-on-scroll slide-up delay-200">
                  <h3 className="text-2xl font-serif text-emerald-400 mb-4">Symbolic Micro-Dosing</h3>
                  <p className="text-neutral-300 leading-relaxed">
                     While consuming Reishi influences immune regulation, the mere presence of Reishi decor functions as a 
                     <strong> "Visual Micro-Dose"</strong>. Cognitive associations with the mushroom’s medicinal properties 
                     prime the brain toward homeostasis, leveraging the placebo effect to reinforce a health-conscious mindset 
                     through visual exposure alone.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. COMMUNITY & INSTAGRAM CTA */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800 text-center">
         <div className="max-w-2xl mx-auto px-6 animate-on-scroll scale-in">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Join the Myco Design Community</h2>
            <p className="text-neutral-400 mb-12">
               We invite you to explore the intersection of nature, art, and wellness. 
               Be part of a movement that values the slow, deliberate beauty of the natural world.
            </p>

            <a 
               href="https://www.instagram.com/reishidecor" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_40px_rgba(200,50,200,0.4)] bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 animate-gradient-x"
               style={{ backgroundSize: '200% 200%', animation: 'gradient-xy 3s ease infinite' }}
            >
               <Instagram className="w-6 h-6" />
               <span>Follow @reishidecor</span>
            </a>
            
            <style>{`
               @keyframes gradient-xy {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
               }
            `}</style>
         </div>
      </section>
    </div>
  );
};

export default ReishiDecorPage;