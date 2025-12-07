import React from 'react';
import AuroraHero from './AuroraHero';
import { 
  Activity, Moon, Zap, ShieldAlert, Heart, AlertTriangle, 
  Dog, Cat, ExternalLink, ArrowRight, Play 
} from 'lucide-react';

const PetHealthPage: React.FC<{ addToCart: (product: any) => void }> = ({ addToCart }) => {
  
  const ganoNutriPet = {
      id: 'e6f7a8b9-c0d1-4ef2-95f3-567890123ef0',
      name: 'Gano Nutri-Pet',
      price_rials: '6800000',
      image_url: 'media/nutripet.png', // Placeholder
      active: true,
      category: 'pets'
  };

  const silentCrisis = [
      {
          title: "Overweight Pets",
          desc: "Obesity accelerates inflammation and shortens lifespan. Excess weight puts pets at risk of cancer, diabetes, and organ failure.",
          icon: <Activity className="w-6 h-6 text-red-400" />
      },
      {
          title: "Underweight Pets",
          desc: "Malnutrition weakens immunity. When essential nutrients are missing, organs struggle and disease takes hold faster.",
          icon: <AlertTriangle className="w-6 h-6 text-amber-400" />
      },
      {
          title: "Low Energy / Fatigue",
          desc: "A warning sign of oxidative stress and hormonal disruption. These issues pave the way for premature aging.",
          icon: <Zap className="w-6 h-6 text-yellow-400" />
      },
      {
          title: "Bad Sleep",
          desc: "Poor sleep destroys cellular recovery. Chronic sleep disruption increases the risk of degenerative disease.",
          icon: <Moon className="w-6 h-6 text-indigo-400" />
      },
      {
          title: "Bad Coat",
          desc: "A lifeless coat signals internal imbalance, poor absorption, and oxidative stress.",
          icon: <ShieldAlert className="w-6 h-6 text-orange-400" />
      },
      {
          title: "Hair Loss",
          desc: "Reflects hormonal imbalance or immune stress. Weakens the body's defenses against environmental toxins.",
          icon: <Activity className="w-6 h-6 text-pink-400" />
      },
      {
          title: "Weak Nails",
          desc: "Brittle nails indicate nutrient depletion and organ strain, accelerating the aging process.",
          icon: <AlertTriangle className="w-6 h-6 text-stone-400" />
      },
      {
          title: "Organ Detox Failure",
          desc: "Toxins overload the liver and kidneys. When detox fails, cancer risk rises sharply.",
          icon: <Activity className="w-6 h-6 text-green-400" />
      },
      {
          title: "Cancer Risk",
          desc: "Nearly half of dogs over 10 develop cancer. Chronic inflammation is the root cause.",
          icon: <ShieldAlert className="w-6 h-6 text-red-600" />
      },
      {
          title: "Hormonal Imbalance",
          desc: "Disrupted hormones lead to rapid aging and higher risks of metabolic disease.",
          icon: <Heart className="w-6 h-6 text-purple-400" />
      },
      {
          title: "Chronic Stress",
          desc: "Elevated cortisol damages cells and suppresses immunity, inviting degenerative disease.",
          icon: <Zap className="w-6 h-6 text-blue-400" />
      },
      {
          title: "Mood Decline",
          desc: "Depression and anxiety in pets mirror biological imbalances that weaken the whole body.",
          icon: <Moon className="w-6 h-6 text-teal-400" />
      }
  ];

  const dogDiseases = [
      "Cancer (Lymphoma, Osteosarcoma, etc.)", "Heart Disease (DCM, Mitral Valve)", 
      "Chronic Kidney Failure", "Liver Disease (Hepatitis, Cirrhosis)", 
      "Diabetes Mellitus", "Obesity-Related Degenerative Disease", 
      "Arthritis / Joint Disease", "GI Disorders (IBD, Pancreatitis)", 
      "Autoimmune Disorders (IMHA)", "Endocrine Disorders (Cushing's)", 
      "Infectious Diseases (Parvo, Lyme)", "Neurological Disease (Epilepsy)"
  ];

  const catDiseases = [
      "Chronic Kidney Disease (CKD)", "Cancer (Lymphoma)", 
      "Hyperthyroidism", "Diabetes Mellitus", 
      "Heart Disease (HCM)", "FLUTD (Urinary Blockages)", 
      "Liver Disease (Fatty Liver)", "Infectious Diseases (FIV, FeLV)", 
      "Dental Disease (Stomatitis)", "GI Disorders (IBD)", 
      "Skin & Allergy Problems", "Neurological / Cognitive Decline"
  ];

  const globalPartners = [
      { name: "MycoDog", url: "https://mycodog.com" },
      { name: "Real Mushrooms", url: "https://www.realmushrooms.com/pet" },
      { name: "Host Defense", url: "https://hostdefense.com" },
      { name: "GOBA Guard", url: "https://goba.eu" },
      { name: "Mushrooms 4 Pets", url: "https://healthfulpets.co.uk" },
      { name: "Pet Wellbeing", url: "https://petwellbeing.co.uk" },
      { name: "Buddy & Lola", url: "https://www.petsathome.com" },
      { name: "NaturVet", url: "https://naturvet.com" },
      { name: "Hemp Heros", url: "https://hempheros.ie" },
      { name: "All Natural Pet", url: "https://allnaturalpet.co.uk" },
      { name: "Earth Buddy Pet", url: "https://earthbuddypet.com" }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 font-sans transition-colors duration-500">
      
      {/* Hero Section */}
      <AuroraHero />

      {/* Intro Philosophy & Video 1 */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="animate-on-scroll fade-in">
                <span className="text-emerald-500 font-medium tracking-widest uppercase text-xs mb-4 block">Veterinary Science meets Mycology</span>
                <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white mb-8 leading-tight">
                   The Silent Crisis <br/>In Pet Health
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                   Why are our pets dying younger? Modern pets face an onslaught of environmental toxins, processed diets, and chronic stress. 
                   This has led to an epidemic of cancer, organ failure, and autoimmune disease.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                   <strong>Gano Nutri-Pet</strong> utilizes the same log-grown Ganoderma Lucidum used in human medicine to restore 
                   cellular intelligence, boost immunity, and provide the adaptogenic support our furry friends desperately need.
                </p>
             </div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group animate-on-scroll scale-in">
                <video 
                   src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Reishi%20Nutripet%20(1).mp4" 
                   className="w-full h-full object-cover"
                   autoPlay muted loop playsInline
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
          </div>
      </section>

      {/* The 12 Points of Crisis */}
      <section className="bg-neutral-900 py-24 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-16">
                  12 Indicators of Biological Imbalance
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {silentCrisis.map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors animate-on-scroll fade-in">
                          <div className="mb-4 p-3 bg-neutral-900 rounded-xl w-fit border border-white/20">
                              {item.icon}
                          </div>
                          <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                          <p className="text-sm text-neutral-400 leading-relaxed">
                              {item.desc}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Disease Breakdown & Video 2 */}
      <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
             {/* Dog Diseases */}
             <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-xl animate-on-scroll slide-right">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
                        <Dog className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-serif text-neutral-900 dark:text-white">Common Canine Pathologies</h3>
                </div>
                <ul className="space-y-3">
                    {dogDiseases.map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                            <span className="text-red-500 mt-1">•</span>
                            {d}
                        </li>
                    ))}
                </ul>
             </div>

             {/* Video 2 Context */}
             <div className="flex flex-col gap-8">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group animate-on-scroll scale-in">
                    <video 
                       src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Reishi%20Biome.mp4" 
                       className="w-full h-full object-cover"
                       autoPlay muted loop playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white font-serif text-xl">The Microbiome Connection</p>
                    </div>
                 </div>
                 <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-500/20">
                    <h4 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-4">The Solution: Immunomodulation</h4>
                    <p className="text-emerald-900/80 dark:text-emerald-200/80">
                        Ganoderma does not just "boost" immunity; it modulates it. This is critical for pets with autoimmune issues or allergies. 
                        Beta-glucans train the innate immune cells (macrophages) to recognize threats without overreacting.
                    </p>
                 </div>
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
             {/* Video 3 Context */}
             <div className="flex flex-col gap-8 order-2 lg:order-1">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group animate-on-scroll scale-in">
                    <video 
                       src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Nutripet.mp4" 
                       className="w-full h-full object-cover"
                       autoPlay muted loop playsInline
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white font-serif text-xl">Vitality Restored</p>
                    </div>
                 </div>
             </div>

             {/* Cat Diseases */}
             <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-xl order-1 lg:order-2 animate-on-scroll slide-left">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400">
                        <Cat className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-serif text-neutral-900 dark:text-white">Common Feline Pathologies</h3>
                </div>
                <ul className="space-y-3">
                    {catDiseases.map((d, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                            <span className="text-red-500 mt-1">•</span>
                            {d}
                        </li>
                    ))}
                </ul>
             </div>
          </div>
      </section>

      {/* Video 4 & Call to Action */}
      <section className="bg-neutral-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
              <video 
                  src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Nutripet%20Gano.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay muted loop playsInline
              />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <h2 className="text-5xl md:text-7xl font-serif text-gold-chrome mb-8 tracking-tight">Gano Nutri-Pet</h2>
              <p className="text-xl text-white/90 mb-12 font-light">
                  A daily supplement for longevity, vitality, and cellular repair. 
                  Give them the gift of time.
              </p>
              <button 
                onClick={() => addToCart(ganoNutriPet)}
                className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                Add to Cart
              </button>
          </div>
      </section>

      {/* Global Partners */}
      <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-neutral-900 dark:text-white mb-4">Global Mycology for Pets</h2>
              <p className="text-neutral-500">Trusted brands worldwide advancing veterinary mushroom science.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {globalPartners.map((partner, idx) => (
                  <a 
                    key={idx}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-emerald-500 transition-colors group"
                  >
                      <span className="font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                          {partner.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-emerald-500" />
                  </a>
              ))}
          </div>
      </section>

    </div>
  );
};

export default PetHealthPage;