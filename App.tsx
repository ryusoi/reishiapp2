import React, { useState, useEffect, useRef } from 'react';
import { products as initialProducts, resolveUrl, formatPrice, STORAGE_URL } from './data';
import { Product } from './types';
import { supabase } from './lib/supabase';
import { auth } from './lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import ChatBot from './components/ChatBot';
import AboutContent from './components/AboutContent'; 
import TeaRitual from './components/TeaRitual';
import FruitVsMycelium from './components/FruitVsMycelium';
import CultivationVideo from './components/CultivationVideo';
import LoginModal from './components/LoginModal';
import CouponPopup from './components/CouponPopup';
import MycoDocPromo from './components/MycoDocPromo'; 
import NavSidebar from './components/NavSidebar'; 
import QRCodeModal from './components/QRCodeModal'; 
import Logo from './components/Logo'; 
import SkincarePage from './components/SkincarePage'; 
import PetHealthPage from './components/PetHealthPage'; 
import ExtractPage from './components/ExtractPage';
import ReishiDecorPage from './components/ReishiDecorPage';
import ProductDetail from './components/ProductDetail';
import { 
  ShoppingBag, Sun, Moon, Menu, X, ArrowRight, Heart, 
  Leaf, Star, ChevronLeft, ChevronRight, Plus, Minus, Droplets, Beaker, Play,
  Users, Map, ChevronUp, ChevronDown
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'shop' | 'about' | 'contact' | 'product_detail' | 'skincare' | 'pets' | 'extract' | 'decor';

// --- Helper Functions ---
const inferCategory = (name: string): Product['category'] => {
  const n = name.toLowerCase();
  if (n.includes('luna') || n.includes('sol') || n.includes('skin') || n.includes('cream') || n.includes('gel')) return 'skincare';
  if (n.includes('pet') || n.includes('animal')) return 'pets';
  if (n.includes('decor')) return 'decor';
  return 'supplement';
};

// --- Custom Hook for Scroll Animations ---
const useScrollAnimation = (dependencies: any[] = []) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe elements
    const observeElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    };

    // Immediate attempt
    observeElements();
    
    // Retry after small delay to catch dynamic content
    const timeoutId = setTimeout(observeElements, 100);

    // FAILSAFE: Force elements to be visible after 1 second if animation didn't trigger
    const failsafeId = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('animate');
      });
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(failsafeId);
    };
  }, dependencies);
};

// --- Sub-Components ---

// --- HEADER ---
const Header: React.FC<{ 
  toggleCart: () => void; 
  toggleNav: () => void;
  cartCount: number; 
  setPage: (p: Page) => void;
  onOpenLogin: () => void;
  user: User | null;
}> = ({ toggleCart, toggleNav, cartCount, setPage, onOpenLogin, user }) => {
  
  const getUserName = () => {
    if (!user || !user.displayName) return '';
    const name = user.displayName.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <header className="sticky z-50 top-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left: Brand or Mobile Menu */}
        <div className="flex items-center gap-4">
          <button onClick={toggleNav} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-neutral-900 dark:text-white" />
          </button>
          
          <button onClick={() => setPage('home')} className="flex items-center gap-3 group">
              <Logo className="h-16 w-auto" textSize="text-xl md:text-2xl" />
          </button>
        </div>
        
        {/* Desktop Nav (Simplified, as we have Sidebar now) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <button onClick={() => setPage('home')} className="hover:text-neutral-900 dark:hover:text-white transition">Home</button>
          <button onClick={() => setPage('shop')} className="hover:text-neutral-900 dark:hover:text-white transition">Collection</button>
          <button onClick={() => setPage('skincare')} className="hover:text-neutral-900 dark:hover:text-white transition">Skincare</button>
          <button onClick={() => setPage('pets')} className="hover:text-neutral-900 dark:hover:text-white transition">Pet Health</button>
          <button onClick={() => setPage('about')} className="hover:text-neutral-900 dark:hover:text-white transition">Science</button>
        </nav>

        {/* Right: User & Cart */}
        <div className="flex items-center gap-3">
          {user && user.displayName ? (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide">
                {getUserName()}
              </span>
            </div>
          ) : (
             <button 
                onClick={onOpenLogin} 
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-emerald-500/50 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all group"
             >
                <div className="w-1.5 h-1.5 rounded-full border border-neutral-400 dark:border-neutral-500 group-hover:border-emerald-500 transition-colors"></div>
                <span className="text-[10px] uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white">
                    Guest
                </span>
            </button>
          )}

          <button onClick={toggleCart} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors relative text-neutral-900 dark:text-white">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  const [offset, setOffset] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        requestAnimationFrame(() => {
            setOffset(window.pageYOffset);
        });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReplay = () => {
      if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
      }
  };

  return (
    <section 
        className="relative h-[85vh] overflow-hidden bg-neutral-900 cursor-pointer"
        onClick={handleReplay}
        title="Click to replay video"
    >
      <div 
        className="absolute inset-0 w-full h-[125%] -top-[12%]"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <video
            ref={videoRef}
            src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/GANOSHAKH%20TEA2%20(1).mp4"
            className="w-full h-full object-cover opacity-80"
            autoPlay
            muted
            playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center pointer-events-none text-center">
        <div className="max-w-4xl text-white hero-content animate-on-scroll fade-in stagger-1 pointer-events-auto flex flex-col items-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-medium">Log-Cultivated Medicine</p>
          <h1 className="text-6xl md:text-7xl font-serif font-medium leading-tight mb-6">
            Ancient Wisdom,<br />Modern Alchemy
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-lg mx-auto leading-relaxed font-light">
            Experience the potent vitality of Iran's only log-grown Ganoderma Lucidum. 
            A convergence of 500+ bioactives for immunity, skin, and spirit.
          </p>
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => { e.stopPropagation(); setPage('shop'); }}
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Shop Collection
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setPage('about'); }}
              className="flex items-center gap-2 px-8 py-4 border border-white/30 rounded-full font-medium hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              Our Science <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ... (TrustBar component remains the same)
const TrustBar = () => (
  <section className="border-t border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 py-16 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 text-center animate-on-scroll blur-slide">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <span className="text-3xl md:text-5xl font-serif italic text-neutral-900 dark:text-white">Restore immunity,</span>
        <img src={`${STORAGE_URL}/Gano%20Shakh%20Antler%20and%20Conks.jpg`} className="w-16 h-12 object-cover rounded-2xl -rotate-6 shadow-xl ring-4 ring-white dark:ring-neutral-800" alt="Extract" />
        <span className="text-3xl md:text-5xl font-serif italic text-neutral-900 dark:text-white">love nature,</span>
        <img src={`${STORAGE_URL}/Gano%20Shakh%20Grow%20room.jpg`} className="w-16 h-12 object-cover rounded-2xl rotate-6 shadow-xl ring-4 ring-white dark:ring-neutral-800" alt="Mushroom" />
        <span className="text-3xl md:text-5xl font-serif italic text-neutral-900 dark:text-white">renew vitality.</span>
      </div>
    </div>
  </section>
);

// ... (CollectionsSlider component remains the same)
const CollectionsSlider = () => {
  const [active, setActive] = useState(0);
  const collections = [
    { 
      title: "Gano Extract", 
      subtitle: "High Potency Tinctures", 
      video: `${STORAGE_URL}/Ganodrma%20Extract%20Top.mp4`
    },
    { 
      title: "Gano Nutri-Pet", 
      subtitle: "Vitality for Companions", 
      video: `${STORAGE_URL}/Nutripet%20Gano%20Shakh.mp4` 
    },
    { 
      title: "Gano Luna & Sol", 
      subtitle: "Advanced Skincare", 
      video: `${STORAGE_URL}/Gano%20Luna.mp4` 
    },
    { 
      title: "Reishi Decor", 
      subtitle: "Log-Grown Art", 
      video: `${STORAGE_URL}/Reishi%20Decor%202.mp4` 
    },
    { 
      title: "Gano Shakh Antler Cultivation", 
      subtitle: "The most Potent Ganoderma in the world", 
      video: "https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Antlers.mp4" 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % collections.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [collections.length]);

  return (
    <section className="py-24 bg-white dark:bg-neutral-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center animate-on-scroll fade-in">
        <h2 className="text-4xl font-serif text-neutral-900 dark:text-white mb-2">Explore Collections</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mb-6">Targeted formulations for every biological need.</p>
        <button className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-emerald-600 transition dark:text-white">View all <ArrowRight className="w-4 h-4"/></button>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-[450px] flex gap-4 animate-on-scroll slide-up stagger-1">
        {collections.map((col, idx) => (
          <div 
            key={idx}
            onClick={() => setActive(idx)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              active === idx ? 'flex-[4]' : 'flex-[1] grayscale hover:grayscale-0'
            }`}
          >
            <video 
                src={col.video} 
                className="absolute inset-0 w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 items-center text-center ${active === idx ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="text-2xl font-serif text-white mb-1">{col.title}</h3>
              <p className="text-gray-300 text-sm">{col.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MemberPromo: React.FC<{ onJoin: () => void }> = ({ onJoin }) => (
    <section className="py-8 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/30 transition-all cursor-pointer group animate-on-scroll fade-in text-center md:text-left" onClick={onJoin}>
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6" />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-white font-serif text-lg tracking-wide">Myco Community</h3>
                        <p className="text-neutral-400 text-xs">Join for 10% OFF & Vintage Reserves</p>
                    </div>
                </div>
                <button className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition">
                    Subscribe
                </button>
            </div>
        </div>
    </section>
);

const VisualArchive: React.FC = () => {
  const videos = [
    { title: "Gano Health", url: `${STORAGE_URL}/Gano%20Health.mp4` },
    { title: "The Process", url: `${STORAGE_URL}/Gano%20Shakh%20(2).mp4` },
    { title: "Log Cultivation", url: `${STORAGE_URL}/Gano%20Shakh%20Log.mp4` },
    { title: "Nutripet Essence", url: `${STORAGE_URL}/Nutripet%20Gano.mp4` },
    { title: "Reishi Biome", url: `${STORAGE_URL}/Reishi%20Biome%20(2).mp4` },
    { title: "Team & Vision", url: `${STORAGE_URL}/Team%20Sales.mp4` },
  ];

  const safePlay = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => { });
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-md">The Visual Archive</h2>
          <p className="text-neutral-400">Witness the journey from spore to spirit.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div key={idx} className={`group relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 animate-on-scroll card-reveal stagger-${(idx % 3) + 1}`}>
              <video 
                src={vid.url} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                muted
                loop
                playsInline
                onMouseOver={safePlay}
                onMouseOut={e => e.currentTarget.pause()}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none p-6 flex flex-col justify-end items-center">
                <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                  {vid.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductGrid: React.FC<{ 
  products: Product[];
  addToCart: (p: Product) => void; 
  onProductClick: (id: string) => void;
}> = ({ products, addToCart, onProductClick }) => (
  <section className="py-24 bg-neutral-50 dark:bg-neutral-800 transition-colors duration-300" id="shop">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-12 animate-on-scroll fade-in">
        <h2 className="text-4xl font-serif text-neutral-900 dark:text-white mb-2">Featured Products</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mb-6">Thoughtful formulas, sustainably harvested.</p>
        <div className="flex gap-2">
          <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-white dark:hover:bg-neutral-700 transition dark:text-white"><ChevronLeft className="w-5 h-5" /></button>
          <button className="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-white dark:hover:bg-neutral-700 transition dark:text-white"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <article 
            key={product.id}
            className={`group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 transition-all hover:shadow-xl hover:-translate-y-1 animate-on-scroll card-reveal stagger-${(idx % 3) + 1} text-center`}
          >
            <div className="relative aspect-square overflow-hidden cursor-pointer bg-neutral-100 dark:bg-neutral-800" onClick={() => onProductClick(product.id)}>
              {/* VIDEO THUMBNAIL LOGIC: Prefer video if available to resolve missing image issues */}
              {product.video_url ? (
                <video 
                    src={product.video_url}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={resolveUrl(product.image_url)} // Fallback to image while loading
                />
              ) : (
                <img 
                    src={resolveUrl(product.image_url)} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                />
              )}
              
              <span className="absolute top-4 left-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 z-10">
                {product.category || 'supplement'}
              </span>
              <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-neutral-800/80 rounded-full hover:scale-110 transition backdrop-blur dark:text-white z-10">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <div className="flex flex-col items-center mb-2 w-full">
                <h3 className="font-serif text-lg font-medium text-neutral-900 dark:text-white cursor-pointer" onClick={() => onProductClick(product.id)}>{product.name}</h3>
                <span className="font-medium text-neutral-900 dark:text-white mt-1">{formatPrice(product.price_rials)} IRR</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-neutral-400 ml-2">(42 reviews)</span>
              </div>

              <button 
                onClick={() => addToCart(product)}
                className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                Add to cart <Plus className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Philosophy = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center bg-cover bg-center rounded-3xl p-8 lg:p-20 relative overflow-hidden group animate-on-scroll scale-in" style={{ backgroundImage: `url('${STORAGE_URL}/Gano%20Shakh%20Antler%20and%20Conks.jpg')` }}>
      <div className="absolute inset-0 bg-neutral-900/60 transition-colors duration-500 group-hover:bg-neutral-900/70"></div>
      <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">Clinically proven.<br/>Consciously cultivated.</h2>
        <p className="text-neutral-200 text-lg leading-relaxed mb-10 max-w-lg">
          We formulate with evidence-based percentages, skin-identical lipids, and potent mushroom botanicals to support long-term health.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10 w-full">
           <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition flex flex-col items-center">
              <Leaf className="w-6 h-6 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white mb-1">Organic</h4>
              <p className="text-xs text-gray-300">Log-grown purity</p>
           </div>
           <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition flex flex-col items-center">
              <Droplets className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="font-bold text-white mb-1">Dual Extract</h4>
              <p className="text-xs text-gray-300">Max bioavailability</p>
           </div>
           <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 transition flex flex-col items-center">
              <Beaker className="w-6 h-6 text-purple-400 mb-3" />
              <h4 className="font-bold text-white mb-1">Lab Tested</h4>
              <p className="text-xs text-gray-300">Certified potency</p>
           </div>
        </div>

        <button onClick={() => setPage('about')} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur transition border border-white/30">
          View Science <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const Footer: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
    const [isSitemapOpen, setIsSitemapOpen] = useState(false);

    const sitemapLinks = {
        Shop: [
            { label: 'All Products', page: 'shop' },
            { label: 'Skincare', page: 'skincare' },
            { label: 'Supplements', page: 'extract' },
            { label: 'Pet Health', page: 'pets' },
            { label: 'Reishi Decor', page: 'decor' } // Added Link
        ],
        Science: [
            { label: 'Our Story', page: 'about' },
            { label: 'Log Cultivation', page: 'about' },
            { label: 'Lab Reports', page: 'about' }
        ],
        Support: [
            { label: 'Contact Us', page: 'contact' },
            { label: 'Shipping', page: 'contact' },
            { label: 'Returns', page: 'contact' }
        ]
    };

    return (
      <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 pt-20 pb-12 transition-colors duration-300 relative overflow-hidden">
        {/* Background Logo Watermark */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none w-[600px] h-[600px] grayscale">
             <img src="https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/222.png" className="w-full h-full object-contain" alt="" />
        </div>
    
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left relative z-10">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <Logo className="h-24 mb-6" textSize="text-3xl" />
            <p className="text-neutral-500 dark:text-neutral-400 max-w-sm mb-6 text-center md:text-left leading-relaxed">
              Pioneering the cultivation of medicinal mushrooms in Iran. 
              Merging 50 years of mycological expertise with modern extraction technology.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 dark:text-white uppercase tracking-widest text-xs">Shop</h4>
            <ul className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
              <li onClick={() => setPage('extract')} className="hover:text-emerald-600 transition cursor-pointer">Supplements</li>
              <li onClick={() => setPage('skincare')} className="hover:text-emerald-600 transition cursor-pointer">Skincare</li>
              <li onClick={() => setPage('pets')} className="hover:text-emerald-600 transition cursor-pointer">Pets</li>
              <li onClick={() => setPage('decor')} className="hover:text-emerald-600 transition cursor-pointer">Reishi Decor</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 dark:text-white uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-3 text-sm text-neutral-500 dark:text-neutral-400">
              <li onClick={() => setPage('contact')} className="hover:text-emerald-600 transition cursor-pointer">Contact Us</li>
              <li onClick={() => setPage('contact')} className="hover:text-emerald-600 transition cursor-pointer">Shipping Policy</li>
            </ul>
          </div>
        </div>

        {/* Sitemap Toggle */}
        <div className="max-w-7xl mx-auto px-6 border-t border-neutral-100 dark:border-neutral-800 pt-8 relative z-10">
            <button 
                onClick={() => setIsSitemapOpen(!isSitemapOpen)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-4"
            >
                <Map className="w-4 h-4" />
                Sitemap
                {isSitemapOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {/* Expandable Sitemap */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 overflow-hidden transition-all duration-500 ease-in-out ${isSitemapOpen ? 'max-h-[500px] opacity-100 mb-12' : 'max-h-0 opacity-0'}`}>
                {Object.entries(sitemapLinks).map(([category, links]) => (
                    <div key={category}>
                        <h5 className="font-serif font-bold text-neutral-900 dark:text-white mb-4">{category}</h5>
                        <ul className="space-y-2">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <button 
                                        onClick={() => setPage(link.page as Page)}
                                        className="text-sm text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400 text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
              <p className="mx-auto md:mx-0">© 2025 Gano Shakh. All rights reserved.</p>
            </div>
        </div>
      </footer>
    );
};

const CartSidebar: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  cartItems: { product: Product; qty: number }[];
  updateQty: (id: string, delta: number) => void;
}> = ({ isOpen, onClose, cartItems, updateQty }) => {
  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(String(item.product.price_rials).replace(/,/g, ''), 10) || 0;
    return sum + (price * item.qty);
  }, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      <div className={`fixed inset-y-0 right-0 z-[51] w-full sm:w-96 bg-white dark:bg-neutral-900 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
            <h3 className="text-lg font-bold font-serif dark:text-white">Your Cart</h3>
            <button onClick={onClose} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full dark:text-white"><X className="w-5 h-5"/></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-neutral-500 mt-10">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <img src={resolveUrl(item.product.image_url)} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg border border-neutral-100 dark:border-neutral-800" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm dark:text-white">{item.product.name}</h4>
                    <p className="text-sm text-neutral-500 mb-2">{formatPrice(item.product.price_rials)} IRR</p>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQty(item.product.id, -1)} className="p-1 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-white"><Minus className="w-3 h-3"/></button>
                      <span className="text-sm font-medium dark:text-white">{item.qty}</span>
                      <button onClick={() => updateQty(item.product.id, 1)} className="p-1 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-white"><Plus className="w-3 h-3"/></button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium dark:text-white">Total</span>
              <span className="text-lg font-bold font-serif dark:text-white">{total.toLocaleString()} IRR</span>
            </div>
            <button className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-bold hover:opacity-90 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// --- Main App ---

const App = () => {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [isShareOpen, setIsShareOpen] = useState(false); 
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  
  // --- LOGIN, COUPON, CHAT STATES ---
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCouponVisible, setIsCouponVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useScrollAnimation([activePage, products]);

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    const fetchProducts = async () => {
      if (!supabase) return;

      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('active', true); 

        if (error) {
          console.error('Supabase Error:', error.message);
          return;
        }

        if (data && data.length > 0) {
          const mappedProducts: Product[] = data.map((item: any) => {
            const resolvedImage = resolveUrl(item.image_url);
            const resolvedVideo = item.video_url ? resolveUrl(item.video_url) : '';
            
            const gallery = [];
            if (resolvedVideo) gallery.push(resolvedVideo);
            if (resolvedImage) gallery.push(resolvedImage);
            
            return {
              id: item.id,
              name: item.name,
              short_name: item.name.split(' ')[0],
              description: item.description,
              long_description: item.description,
              price_rials: item.price_rials, 
              image_url: resolvedImage,
              gallery: gallery.length > 0 ? gallery : [resolvedImage],
              active: item.active === true || item.active === 'true', 
              size: item.size || 'Standard',
              category: inferCategory(item.name),
              video_url: resolvedVideo,
              created_at: item.created_at
            };
          });
          setProducts(mappedProducts);
        } else {
          console.log('Supabase connected but returned no products. Using fallback data.');
        }
      } catch (err) {
        console.error('Unexpected error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.product.id === product.id);
      if (existing) {
        return prev.map(p => p.product.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = Math.max(0, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setActivePage('product_detail');
    window.scrollTo(0,0);
  };

  // Helper to find selected product safely
  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300 font-sans">
      <Header 
        toggleCart={() => setIsCartOpen(true)} 
        toggleNav={() => setIsNavOpen(true)}
        cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} 
        setPage={setActivePage}
        onOpenLogin={() => setIsLoginOpen(true)}
        user={currentUser}
      />

      <main>
        {activePage === 'home' && (
          <>
            <Hero setPage={setActivePage} />
            <TrustBar />
            <CollectionsSlider />
            <MemberPromo onJoin={() => setIsLoginOpen(true)} />
            <ProductGrid products={products} addToCart={handleAddToCart} onProductClick={handleProductClick} />
            <MycoDocPromo onOpenChat={() => setIsChatOpen(true)} />
            <Philosophy setPage={setActivePage} />
            <FruitVsMycelium />
            <VisualArchive />
            <CultivationVideo />
            <TeaRitual />
          </>
        )}
        
        {activePage === 'shop' && (
          <div className="pt-10">
             <ProductGrid products={products} addToCart={handleAddToCart} onProductClick={handleProductClick} />
          </div>
        )}

        {activePage === 'skincare' && (
          <SkincarePage addToCart={handleAddToCart} />
        )}
        
        {activePage === 'extract' && (
          <ExtractPage addToCart={handleAddToCart} />
        )}

        {activePage === 'pets' && (
          <PetHealthPage addToCart={handleAddToCart} />
        )}
        
        {activePage === 'decor' && (
          <ReishiDecorPage />
        )}

        {activePage === 'about' && (
          <div className="pt-10 bg-white dark:bg-neutral-900">
            <AboutContent />
          </div>
        )}
        
        {activePage === 'product_detail' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            addToCart={handleAddToCart} 
            onBack={() => setActivePage('shop')} 
          />
        )}

        {activePage === 'contact' && (
          <div className="py-20 px-6 max-w-2xl mx-auto text-center animate-on-scroll fade-in">
             <h1 className="text-5xl font-serif mb-6 dark:text-white">Contact Us</h1>
             <p className="text-neutral-500 mb-12">We'd love to hear from you.</p>
             <form className="space-y-4 text-left max-w-md mx-auto">
                <div>
                   <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
                   <input type="email" className="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 dark:text-white focus:ring-2 ring-emerald-500 outline-none transition" />
                </div>
                <div>
                   <label className="block text-sm font-medium mb-2 dark:text-white">Message</label>
                   <textarea rows={4} className="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 dark:text-white focus:ring-2 ring-emerald-500 outline-none transition" />
                </div>
                <button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg hover:opacity-90">Send Message</button>
             </form>
          </div>
        )}
      </main>

      <Footer setPage={setActivePage} />
      
      {/* High Definition Navigation Sidebar */}
      <NavSidebar 
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        setPage={setActivePage}
        toggleTheme={toggleTheme}
        isDark={isDark}
        onShare={() => setIsShareOpen(true)}
      />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        updateQty={updateCartQty} 
      />
      
      <ChatBot 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onClose={() => setIsChatOpen(false)}
      />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSuccess={() => setIsCouponVisible(true)}
      />

      <CouponPopup 
        isVisible={isCouponVisible} 
        onClose={() => setIsCouponVisible(false)} 
      />

      <QRCodeModal 
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

    </div>
  );
};

export default App;