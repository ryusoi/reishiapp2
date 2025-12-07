import React from 'react';
import { FlaskConical, Dna, ShieldCheck } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-4xl mx-auto px-6 py-20 font-sans leading-relaxed text-center">
      <div className="text-center mb-16">
         <h1 className="text-4xl md:text-5xl font-serif mb-6 text-white">Log-Based vs. Sawdust Cultivation</h1>
         <p className="text-xl text-emerald-400 font-light">A Scientific, Biochemical, and Energetic Analysis</p>
      </div>

      <div className="bg-[#1E1E26] p-8 rounded-3xl border border-white/10 mb-12 hover:border-emerald-500/30 transition-colors">
        <h3 className="text-2xl font-serif text-white mb-4">Abstract</h3>
        <p className="text-gray-300">
          This analysis explores the critical differences between whole-log Ganoderma cultivation (used by Gano Shakh) and common sawdust methods. 
          Log-grown Ganoderma demonstrates dramatically higher density, diversity, and completeness of 500+ bioactives. 
          The synergy between lignin-rich ancient hardwood and long-term mycelial colonization drives a uniquely potent bioactive expression profile.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="flex flex-col items-center">
           <h3 className="text-xl font-bold text-emerald-400 mb-4">Log-Based Systems (Gano Shakh)</h3>
           <ul className="space-y-3 text-gray-300 text-left inline-block">
             <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Colonization in 10–14 months</li>
             <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Intact lignin–cellulose architecture</li>
             <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> High structural resistance forces advanced enzyme production</li>
             <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> 500+ Bioactives including rare ganoderic acids</li>
           </ul>
        </div>
        <div className="opacity-60 flex flex-col items-center">
           <h3 className="text-xl font-bold text-red-400 mb-4">Sawdust Systems (Industry Standard)</h3>
           <ul className="space-y-3 text-gray-400 text-left inline-block">
             <li className="flex items-start gap-2"><span>•</span> Colonization in 30–90 days</li>
             <li className="flex items-start gap-2"><span>•</span> Loose, fragmented substrate</li>
             <li className="flex items-start gap-2"><span>•</span> Low lignin density</li>
             <li className="flex items-start gap-2"><span>•</span> Limited enzymatic diversity (weak medicinal profile)</li>
           </ul>
        </div>
      </div>

      <h2 className="text-3xl font-serif text-white mt-12 mb-6">Why Bioactives Are More Potent</h2>
      <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
        <strong>Lignin: The Core Biochemical Trigger.</strong> Hardwood lignin contains phenylpropanoid networks and aromatic rings. 
        Ganoderma must deploy complex enzymes to break these structures. This stress triggers the production of secondary metabolites 
        like Ganoderic acids (100+ types) and Meroterpenoids. Only log-grown Reishi accesses this precursor pool.
      </p>

      <h2 className="text-3xl font-serif text-white mt-12 mb-6">Energetic Storage & Transfer</h2>
      <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
        Trees that are decades old accumulate trace minerals and solar energy. Recent biophoton imaging technologies suggest that 
        Ganoderma acts as a biological transformer, decoding the tree's energetic signature. When consuming Gano Shakh log-grown Reishi, 
        users often describe a "grounding energy" and "cellular vitality" that correlates with this bioenergetic density.
      </p>

      <h2 className="text-3xl font-serif text-white mt-12 mb-6 flex items-center justify-center gap-3"><FlaskConical className="w-8 h-8 text-emerald-400"/> Molecular Mechanisms</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-[#1E1E26] p-6 rounded-2xl border border-white/5 hover:bg-emerald-900/10 transition-colors">
           <h4 className="text-xl font-bold text-emerald-400 mb-2 flex items-center justify-center gap-2"><Dna className="w-5 h-5"/> Triterpenes</h4>
           <p className="text-gray-400 text-sm leading-relaxed">
             The "bitter" compounds. Structurally similar to steroid hormones. They inhibit histamine release, improve oxygen utilization, and support liver function. 
             Log-grown Reishi has the highest concentration of Ganoderic Acid A and C, which are critical for anti-inflammatory pathways.
           </p>
        </div>
        <div className="bg-[#1E1E26] p-6 rounded-2xl border border-white/5 hover:bg-emerald-900/10 transition-colors">
           <h4 className="text-xl font-bold text-emerald-400 mb-2 flex items-center justify-center gap-2"><ShieldCheck className="w-5 h-5"/> Beta-D-Glucans</h4>
           <p className="text-gray-400 text-sm leading-relaxed">
             Polysaccharides that act as "biological response modifiers". They train the immune system (macrophages and NK cells) to recognize pathogens more effectively without over-stimulating the system (immunomodulation).
           </p>
        </div>
      </div>

      <div className="mt-16 p-8 bg-gradient-to-br from-emerald-900/40 to-black border border-emerald-500/20 rounded-3xl text-center">
        <h3 className="text-2xl font-serif text-white mb-4">The Gano Shakh Commitment</h3>
        <p className="text-emerald-100 mb-6">
          We are the only log-based cultivators in the entire country. We choose the hard path because it produces the strongest mushrooms, 
          the deepest medicinal profiles, and the truest expression of nature's design.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;