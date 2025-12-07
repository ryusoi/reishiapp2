import React from 'react';
import { STORAGE_URL, formatPrice } from '../data';
import { Droplets, Shield, Zap, Moon, FlaskConical, ArrowRight, Check } from 'lucide-react';

interface ExtractPageProps {
  addToCart: (product: any) => void;
}

const ExtractPage: React.FC<ExtractPageProps> = ({ addToCart }) => {
  const extractProduct = {
    id: 'b2c3d4e5-f6a7-48b9-92c1-2345678901bc',
    name: 'Gano Extract - Tincture',
    price_rials: '9700000',
    image_url: 'media/gano_extract.png',
    active: true,
    category: 'supplement'
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 font-sans transition-colors duration-500">
      
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-black">
        <video 
            src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Ganodrma%20Extract%20Top.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            autoPlay muted loop playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900"></div>
        
        <div className="relative z-10 text-center px-6 animate-on-scroll fade-in">
           <span className="text-amber-400 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Double Extraction Technology</span>
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
              The Golden Elixir
           </h1>
           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Concentrated vitality. Our dual-extraction process unlocks the full spectrum of 
              <span className="text-amber-400 font-medium mx-1">Triterpenes</span> and 
              <span className="text-amber-400 font-medium mx-1">Polysaccharides</span>.
           </p>
        </div>
      </div>

      {/* The Alchemy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-16 animate-on-scroll fade-in">
            <h2 className="text-4xl font-serif text-neutral-900 dark:text-white mb-4">Why Tinctures?</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
               Raw mushroom powder is tough to digest due to chitin cell walls. 
               Our extraction process breaks down this barrier, making bioactives 100% bioavailable immediately upon ingestion.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <Droplets className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white mb-3">Hot Water Extraction</h3>
               <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                  We use purified hot water to isolate water-soluble <strong>Beta-Glucans</strong>.
               </p>
               <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-2">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Immune Modulation</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Gut Health</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Blood Sugar Balance</li>
               </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-widest">
                  Gold Standard
               </div>
               <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                  <FlaskConical className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white mb-3">Alcohol Extraction</h3>
               <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                  Organic ethanol is used to pull out non-water soluble <strong>Triterpenes</strong> (Ganoderic Acids).
               </p>
               <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-2">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Liver Protection</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Anti-Histamine</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Hormonal Balance</li>
               </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                  <Zap className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-white mb-3">Instant Bioavailability</h3>
               <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                  Sublingual application (under the tongue) allows compounds to bypass digestion and enter the bloodstream directly.
               </p>
               <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-2">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Fast Acting</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> Higher Potency Dose</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-emerald-500" /> No Digestive Stress</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="flex flex-col justify-center animate-on-scroll slide-right">
                  <h2 className="text-5xl font-serif text-white mb-6">Gano Extract</h2>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-widest">
                        High Potency
                     </span>
                     <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                        50ml
                     </span>
                  </div>

                  <p className="text-neutral-300 text-lg leading-relaxed mb-8 font-light">
                     Our flagship tincture. Stored in UV-protected violet glass to preserve the energetic stability of the bioactives. 
                     Just one dropper full (1ml) contains the medicinal equivalent of 15g of raw mushroom powder.
                  </p>

                  <div className="space-y-4 mb-10">
                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <Moon className="w-6 h-6 text-indigo-400" />
                        <div>
                           <h4 className="text-white font-bold text-sm">Sleep & De-Stress</h4>
                           <p className="text-neutral-400 text-xs">Regulates cortisol and calms the nervous system.</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <Shield className="w-6 h-6 text-emerald-400" />
                        <div>
                           <h4 className="text-white font-bold text-sm">Deep Immunity</h4>
                           <p className="text-neutral-400 text-xs">Activates Macrophages and Natural Killer cells.</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center gap-8">
                      <span className="text-4xl font-serif text-white">{formatPrice(extractProduct.price_rials)} IRR</span>
                      <button 
                        onClick={() => addToCart(extractProduct)}
                        className="px-8 py-4 bg-white text-neutral-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
                      >
                        Add to Cart <ArrowRight className="w-5 h-5" />
                      </button>
                  </div>
              </div>

              <div className="relative h-[600px] flex items-center justify-center animate-on-scroll scale-in">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                     <video 
                        src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Ganodrma%20Extract%20Top.mp4"
                        className="w-full h-full object-cover opacity-80"
                        autoPlay muted loop playsInline
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                     
                     <div className="absolute bottom-8 left-8 right-8 text-center">
                        <p className="text-amber-200 font-serif italic text-xl">"Liquid Gold for the modern body."</p>
                     </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Usage Ritual */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
         <h2 className="text-3xl font-serif text-neutral-900 dark:text-white mb-12">Daily Ritual</h2>
         <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center max-w-xs">
               <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-serif text-2xl text-neutral-900 dark:text-white mb-6 border border-neutral-200 dark:border-neutral-700">1</div>
               <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Shake Well</h4>
               <p className="text-sm text-neutral-500">Activate the compounds.</p>
            </div>
            <div className="hidden md:block w-24 h-px bg-neutral-200 dark:bg-neutral-800"></div>
            <div className="flex flex-col items-center max-w-xs">
               <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-serif text-2xl text-neutral-900 dark:text-white mb-6 border border-neutral-200 dark:border-neutral-700">2</div>
               <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Measure Dose</h4>
               <p className="text-sm text-neutral-500">1ml (one full dropper).</p>
            </div>
            <div className="hidden md:block w-24 h-px bg-neutral-200 dark:bg-neutral-800"></div>
            <div className="flex flex-col items-center max-w-xs">
               <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-serif text-2xl text-neutral-900 dark:text-white mb-6 border border-neutral-200 dark:border-neutral-700">3</div>
               <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Consume</h4>
               <p className="text-sm text-neutral-500">Under tongue or in tea/coffee.</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ExtractPage;