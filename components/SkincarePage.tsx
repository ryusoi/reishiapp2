import React from 'react';
import SunflowerHero from './SunflowerHero';
import { Sparkles, Activity, ShieldCheck, Sun, Moon, Droplets, Zap, Flame } from 'lucide-react';

const SkincarePage: React.FC<{ addToCart: (product: any) => void }> = ({ addToCart }) => {
  
  const ganoLuna = {
      id: 'c3d4e5f6-a7b8-49ca-93d2-3456789012cd',
      name: 'Gano Luna - Anti-Wrinkle Night Cream',
      price_rials: '8700000',
      image_url: 'media/gano_luna_night.png',
      active: true,
      category: 'skincare'
  };

  const ganoSol = {
      id: 'd4e5f6a7-b8c9-4adb-94e3-4567890123de',
      name: 'Gano Sol - All Purpose Day Gel',
      price_rials: '7500000',
      image_url: 'media/gano_sol_day_gel.png',
      active: true,
      category: 'skincare'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 font-sans transition-colors duration-500">
      
      {/* Hero Section */}
      <SunflowerHero />

      {/* Intro Philosophy */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
          <div className="animate-on-scroll fade-in">
             <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">Bio-Active Formulation</span>
             <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white mb-8 leading-tight">
                Clinically Potent. <br/>Consciously Cultivated.
             </h2>
             <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Our skincare line transcends cosmetics. These are <span className="text-emerald-600 dark:text-emerald-400 font-medium">medicinal grade</span> formulations 
                derived from log-grown Ganoderma Lucidum. Rich in Ganoderic Acids and Beta-Glucans, they penetrate deep into the dermis 
                to stimulate collagen synthesis, elastin production, and macrophage activation for true cellular rejuvenation.
             </p>
          </div>
      </section>

      {/* Scientific Icons Grid */}
      <section className="bg-neutral-50 dark:bg-neutral-800/50 py-20 border-y border-neutral-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Activity className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">Collagen Synthesis</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Boosts elasticity & firmness</p>
             </div>
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <ShieldCheck className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">Dermal Cure</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Eczema, Psoriasis, Vitiligo</p>
             </div>
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Flame className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">Burn Remedy</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Instant relief for heat & sun</p>
             </div>
             <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <Sparkles className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-serif font-bold text-neutral-900 dark:text-white mb-2">Cellular Repair</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Macrophage Activation</p>
             </div>
          </div>
      </section>

      {/* Product Showcase: Gano Luna */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] group">
               <video 
                  src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Luna.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm font-bold tracking-widest uppercase text-indigo-400">Night Ritual</span>
               </div>
               <h2 className="text-5xl font-serif text-neutral-900 dark:text-white mb-6">Gano Luna</h2>
               <h3 className="text-xl text-neutral-500 mb-8 font-light">Anti-Wrinkle Miracle Cream</h3>
               
               <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                  A revolutionary formula that works while you sleep. Gano Luna activates macrophages to clear cellular debris and accelerates 
                  the production of new collagen and elastin fibers. Users report a visible reduction in fine lines and a "plumped" vitality by morning.
               </p>

               <div className="p-6 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 mb-8">
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                     <Zap className="w-4 h-4 text-amber-400" /> Potency Profile
                  </h4>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                     <li>• High-Concentration Ganoderic Acid A</li>
                     <li>• Deep-penetrating Peptide Complex</li>
                     <li>• Reishi Spore Oil Lipid Barrier</li>
                  </ul>
               </div>

               <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif text-neutral-900 dark:text-white">8,700,000 IRR</span>
                  <button 
                     onClick={() => addToCart(ganoLuna)}
                     className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                  >
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Product Showcase: Gano Sol */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-neutral-100 dark:border-white/5">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-bold tracking-widest uppercase text-amber-500">Day Protection</span>
               </div>
               <h2 className="text-5xl font-serif text-neutral-900 dark:text-white mb-6">Gano Sol</h2>
               <h3 className="text-xl text-neutral-500 mb-8 font-light">Medicinal Day Gel</h3>
               
               <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                  Your daily shield and instant remedy. Gano Sol is a fast-absorbing gel that provides immediate relief for burns, sunburns, and inflammation. 
                  Its potent anti-inflammatory properties make it effective against chronic skin conditions like Psoriasis and Eczema. 
                  Also promotes hair regrowth when applied to the scalp.
               </p>

               <div className="p-6 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-white/10 mb-8">
                  <h4 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                     <Droplets className="w-4 h-4 text-blue-400" /> Healing Matrix
                  </h4>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                     <li>• Instant cooling for heat/sun burns</li>
                     <li>• Triterpene-rich inflammation control</li>
                     <li>• Scalp follicle stimulation</li>
                  </ul>
               </div>

               <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif text-neutral-900 dark:text-white">7,500,000 IRR</span>
                  <button 
                     onClick={() => addToCart(ganoSol)}
                     className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                  >
                     Add to Cart
                  </button>
               </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] group">
               <video 
                  src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Sol.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default SkincarePage;